// @ts-check
/* global supabase */

let sb = null;

// State
let session = null;
let currentLeads = [];
let currentPage = 1;
let totalCount = 0;
let adminsList = [];

// DOM Elements
const screenLogin = document.getElementById('login-screen');
const screenDashboard = document.getElementById('dashboard-screen');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const userEmailEl = document.getElementById('user-email');
const btnLogout = document.getElementById('logout-btn');

const tbody = document.getElementById('leads-tbody');
const mobileList = document.getElementById('leads-mobile-list');
const loadingIndicator = document.getElementById('loading-indicator');

// Filters
const filterSearch = document.getElementById('filter-search');
const filterStatus = document.getElementById('filter-status');
const filterActivity = document.getElementById('filter-activity');
const btnRefresh = document.getElementById('btn-refresh');

// Pagination
const btnPrev = document.getElementById('btn-prev-page');
const btnNext = document.getElementById('btn-next-page');
const pageInfo = document.getElementById('page-info');

// Init
async function init() {
  try {
    const configResponse = await fetch('/api/admin/config', { cache: 'no-store' });
    const config = await configResponse.json();
    if (!configResponse.ok || !config.url || !config.publishableKey) {
      throw new Error(config.error || 'supabase_auth_not_configured');
    }
    sb = window.supabase.createClient(config.url, config.publishableKey);
  } catch (error) {
    showLogin();
    loginMessage.textContent = 'Hệ thống đăng nhập đang thiếu cấu hình. Vui lòng liên hệ quản trị viên.';
    loginMessage.className = 'alert alert-error';
    console.error('Admin auth configuration error:', error);
    return;
  }

  const { data } = await sb.auth.getSession();
  if (data.session) {
    session = data.session;
    showDashboard();
  } else {
    // Check hash for magic link redirect
    sb.auth.onAuthStateChange((event, newSession) => {
      if (event === 'SIGNED_IN') {
        session = newSession;
        showDashboard();
      } else if (event === 'SIGNED_OUT') {
        session = null;
        showLogin();
      }
    });
    showLogin();
  }
  setupListeners();
}

function showLogin() {
  screenDashboard.classList.remove('active');
  screenLogin.classList.add('active');
}

function showDashboard() {
  screenLogin.classList.remove('active');
  screenDashboard.classList.add('active');
  userEmailEl.textContent = session.user.email;
  loadLeads(1);
}

function setupListeners() {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    loginMessage.textContent = 'Đang đăng nhập...';
    loginMessage.className = 'alert alert-info';

    const { error } = await sb.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      loginMessage.textContent = error.message;
      loginMessage.className = 'alert alert-error';
    } else {
      loginMessage.textContent = 'Đăng nhập thành công!';
      loginMessage.className = 'alert alert-info';
    }
  });

  btnLogout.addEventListener('click', async () => {
    await sb.auth.signOut();
  });

  btnRefresh.addEventListener('click', () => loadLeads(1));
  filterStatus.addEventListener('change', () => loadLeads(1));
  filterActivity.addEventListener('change', () => loadLeads(1));

  let searchTimeout;
  filterSearch.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => loadLeads(1), 500);
  });

  btnPrev.addEventListener('click', () => {
    if (currentPage > 1) loadLeads(currentPage - 1);
  });

  btnNext.addEventListener('click', () => {
    if (currentPage * 25 < totalCount) loadLeads(currentPage + 1);
  });
}

async function fetchAPI(endpoint, options = {}) {
  const url = `/api/admin/leads${endpoint === '/' ? '' : endpoint}`;
  const headers = {
    'Authorization': `Bearer ${session.access_token}`,
    'Content-Type': 'application/json',
    ...(options.headers || {})
  };
  let res;
  try {
    res = await fetch(url, { ...options, headers });
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
  const text = await res.text();
  let data = {};
  try {
    if (text) data = JSON.parse(text);
  } catch (e) {
    throw new Error(`Parse error. Status: ${res.status}. Body: ${text.slice(0,100)}`);
  }
  if (!res.ok) {
    throw new Error(data.error || `HTTP ${res.status} error: ${text.slice(0, 100)}`);
  }
  return data;
}

async function loadLeads(page = 1) {
  currentPage = page;
  loadingIndicator.classList.remove('hidden');
  tbody.innerHTML = '';
  mobileList.innerHTML = '';

  try {
    const query = new URLSearchParams({
      page: page.toString(),
      status: filterStatus.value,
      activity: filterActivity.value,
      q: filterSearch.value
    });

    const data = await fetchAPI(`?${query.toString()}`);
    currentLeads = data.leads;
    totalCount = data.count;
    adminsList = data.admins;

    updateSummary(data.summary);
    renderLeads();
    updatePagination();
  } catch (err) {
    console.error(err);
    if (err.message === 'unauthorized' || err.message === 'forbidden') {
      alert('Bạn không có quyền truy cập hoặc phiên đăng nhập đã hết hạn.');
      sb.auth.signOut();
    }
  } finally {
    loadingIndicator.classList.add('hidden');
  }
}

function updateSummary(summary) {
  if (!summary) return;
  document.getElementById('stat-today').textContent = summary.today;
  document.getElementById('stat-consulting').textContent = summary.consulting;
  document.getElementById('stat-followup').textContent = summary.followUp;
  document.getElementById('stat-enrolled').textContent = summary.enrolled;
  document.getElementById('stat-sync-errors').textContent = summary.syncErrors;
}

function updatePagination() {
  const totalPages = Math.ceil(totalCount / 25) || 1;
  pageInfo.textContent = `Trang ${currentPage} / ${totalPages} (${totalCount} leads)`;
  btnPrev.disabled = currentPage <= 1;
  btnNext.disabled = currentPage >= totalPages;
}

function renderLeads() {
  if (currentLeads.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" style="text-align: center">Không có dữ liệu</td></tr>';
    mobileList.innerHTML = '<div class="lead-card">Không có dữ liệu</div>';
    return;
  }

  currentLeads.forEach(lead => {
    // Desktop Row
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${lead.reference}</td>
      <td><strong>${escapeHTML(lead.student_name)}</strong><br><small>${escapeHTML(lead.grade) || 'Chưa rõ'}</small></td>
      <td>${escapeHTML(lead.parent_name)}</td>
      <td><a href="tel:${lead.phone_raw}">${lead.phone_raw}</a></td>
      <td>
        <div class="tag-list">
          ${(lead.activities || []).map(a => `<span class="tag">${activityName(a)}</span>`).join('')}
        </div>
      </td>
      <td>
        <select class="status-select" data-id="${lead.id}" data-original="${lead.status}">
          <option value="new" ${lead.status === 'new' ? 'selected' : ''}>Mới</option>
          <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Đã liên hệ</option>
          <option value="consulting" ${lead.status === 'consulting' ? 'selected' : ''}>Đang tư vấn</option>
          <option value="qualified" ${lead.status === 'qualified' ? 'selected' : ''}>Tiềm năng</option>
          <option value="enrolled" ${lead.status === 'enrolled' ? 'selected' : ''}>Đã đăng ký</option>
          <option value="not_interested" ${lead.status === 'not_interested' ? 'selected' : ''}>Không quan tâm</option>
          <option value="unreachable" ${lead.status === 'unreachable' ? 'selected' : ''}>Không liên lạc được</option>
        </select>
        ${lead.sheet_sync_status === 'failed' ? '<span title="Lỗi Sheet" class="text-red">⚠️</span>' : ''}
      </td>
      <td>${new Date(lead.created_at).toLocaleDateString('vi-VN')}</td>
      <td>
        <div class="action-buttons">
          <button class="btn btn-outline btn-sm btn-delete" data-id="${lead.id}">Xóa</button>
          ${lead.sheet_sync_status === 'failed' ? `<button class="btn btn-outline btn-sm btn-retry" data-id="${lead.id}">Retry</button>` : ''}
        </div>
      </td>
    `;
    tbody.appendChild(tr);

    // Mobile Card
    const card = document.createElement('div');
    card.className = 'lead-card';
    card.innerHTML = `
      <div class="lead-card-header">
        <div>
          <div class="lead-card-title">${escapeHTML(lead.student_name)} - <small>${escapeHTML(lead.grade) || 'Chưa rõ'}</small></div>
          <div class="lead-card-meta">${lead.reference} - ${new Date(lead.created_at).toLocaleDateString('vi-VN')}</div>
        </div>
        <span class="status-badge ${lead.status}">${statusName(lead.status)}</span>
      </div>
      <div class="lead-card-meta">
        Phụ huynh: ${escapeHTML(lead.parent_name)}<br>
        SĐT: <a href="tel:${lead.phone_raw}">${lead.phone_raw}</a>
      </div>
      <div class="tag-list" style="margin-top: 0.5rem">
        ${(lead.activities || []).map(a => `<span class="tag">${activityName(a)}</span>`).join('')}
      </div>
      <div class="lead-card-actions">
        <select class="status-select" data-id="${lead.id}" data-original="${lead.status}" style="padding: 0.25rem; font-size: 0.75rem;">
          <option value="new" ${lead.status === 'new' ? 'selected' : ''}>Mới</option>
          <option value="contacted" ${lead.status === 'contacted' ? 'selected' : ''}>Đã liên hệ</option>
          <option value="consulting" ${lead.status === 'consulting' ? 'selected' : ''}>Đang tư vấn</option>
          <option value="qualified" ${lead.status === 'qualified' ? 'selected' : ''}>Tiềm năng</option>
          <option value="enrolled" ${lead.status === 'enrolled' ? 'selected' : ''}>Đã đăng ký</option>
          <option value="not_interested" ${lead.status === 'not_interested' ? 'selected' : ''}>Không quan tâm</option>
          <option value="unreachable" ${lead.status === 'unreachable' ? 'selected' : ''}>Không liên lạc được</option>
        </select>
        <button class="btn btn-outline btn-sm btn-delete" data-id="${lead.id}">Xóa</button>
      </div>
    `;
    mobileList.appendChild(card);
  });

  // Attach event listeners for dynamic elements
  document.querySelectorAll('.status-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      if (confirm('Bạn có chắc chắn muốn thay đổi trạng thái của lead này?')) {
        updateLeadStatus(e.target.dataset.id, e.target.value);
        e.target.dataset.original = e.target.value; // Update original if confirmed
      } else {
        e.target.value = e.target.dataset.original; // Revert if canceled
      }
    });
  });
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => deleteLead(e.target.dataset.id));
  });
  document.querySelectorAll('.btn-retry').forEach(btn => {
    btn.addEventListener('click', (e) => retrySheet(e.target.dataset.id));
  });
}

async function updateLeadStatus(id, newStatus) {
  try {
    await fetchAPI('/', {
      method: 'PATCH',
      body: JSON.stringify({ id, patch: { status: newStatus } })
    });
    // Optimistic update not fully implemented, reload for simplicity and accurate summary
    loadLeads(currentPage);
  } catch (err) {
    alert('Lỗi khi cập nhật: ' + err.message);
    loadLeads(currentPage); // revert
  }
}

async function deleteLead(id) {
  if (!confirm('Bạn có chắc chắn muốn xóa mềm lead này?')) return;
  try {
    await fetchAPI('/', {
      method: 'DELETE',
      body: JSON.stringify({ id })
    });
    loadLeads(currentPage);
  } catch (err) {
    alert('Lỗi khi xóa: ' + err.message);
  }
}

async function retrySheet(id) {
  try {
    await fetchAPI('/', {
      method: 'POST',
      body: JSON.stringify({ id, action: 'retry-sheet' })
    });
    alert('Đã gửi yêu cầu đồng bộ lại Google Sheet');
    loadLeads(currentPage);
  } catch (err) {
    alert('Lỗi retry: ' + err.message);
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g,
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

function activityName(act) {
  const map = {
    'football': 'Bóng đá',
    'basketball': 'Bóng rổ',
    'dance': 'Nhảy hiện đại',
    'vovinam': 'Vovinam',
    'taekwondo': 'Taekwondo',
    'karate': 'Karate',
    'drums': 'Trống hội',
    'zither': 'Đàn tranh'
  };
  return map[act] || act;
}

function statusName(status) {
  const map = {
    'new': 'Mới',
    'contacted': 'Đã liên hệ',
    'consulting': 'Đang tư vấn',
    'qualified': 'Tiềm năng',
    'enrolled': 'Đã đăng ký',
    'not_interested': 'Không quan tâm',
    'unreachable': 'Không liên lạc được'
  };
  return map[status] || status;
}

// Start
init();
