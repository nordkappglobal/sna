# Thiết lập hệ thống Lead SNA

## 1. Supabase

1. Tạo project tại khu vực gần Việt Nam (Singapore).
2. Mở SQL Editor và chạy migration trong `supabase/migrations/202608310001_sna_leads.sql`.
3. Vào Authentication → Users, tạo người quản trị đầu tiên.
4. Chạy câu lệnh sau bằng đúng UUID/email của người đó:

```sql
insert into public.admin_users (user_id, email, display_name)
values ('AUTH-USER-UUID', 'admin@example.com', 'Quản trị viên SNA');
```

5. Trong Authentication URL Configuration, thêm `https://TEN-MIEN/admin/` và URL Preview cần kiểm thử vào Redirect URLs.

## 2. Google Sheet riêng tư

Tạo file `SNA Lead Management`, tab `Leads_SNA`, để chế độ **Restricted** và tạo hàng tiêu đề:

```text
Lead ID | Mã lead | Nguồn | Ngày tạo | Phụ huynh | Điện thoại | Học sinh | Lớp | Bộ môn | Khung giờ | Ngôn ngữ | Trạng thái | Người phụ trách | Lịch gọi lại | Ghi chú | Cập nhật lúc | Đã xóa
```

Bật Google Sheets API, tạo Service Account và chia sẻ file cho email Service Account với quyền Editor. Không bật “Anyone with the link”.

## 3. Resend và Gmail

Xác minh domain gửi thư trong Resend. Tạo API key và cấu hình `LEAD_EMAIL_FROM`, `LEAD_NOTIFICATION_TO`.

Trên từng Gmail nhận lead, tạo Filter:

- Subject includes: `[SNA][LEAD MỚI]`
- Apply label: `SNA - Lead mới`
- Mark as important
- Never send to spam

## 4. Vercel

Thêm toàn bộ biến trong `.env.example` cho Preview và Production. Không gửi secret qua chat, không commit `.env`, và redeploy sau khi thay đổi biến.

Giới hạn route `/api/leads` ở mức 5 request trong 10 phút cho mỗi IP bằng Vercel Firewall/Rate Limiting.

## 5. Kiểm thử trước khi chạy thật

Chạy bằng số `0900000000`, tên có chữ `Demo`; xác nhận dữ liệu vào Supabase, Sheet và email. Kiểm thử edit, đổi trạng thái, xóa mềm, khôi phục và retry. Chỉ dùng dữ liệu thật sau khi toàn bộ kiểm thử đạt.
