document.addEventListener("DOMContentLoaded", () => {
  const dataStr = sessionStorage.getItem("sna_lead_data");
  if (!dataStr) {
    // Nếu không có dữ liệu, chuyển về trang chủ
    window.location.href = "/";
    return;
  }

  try {
    const data = JSON.parse(dataStr);
    document.getElementById("res-ref").textContent = data.reference || "N/A";
    document.getElementById("res-parent").textContent = data.parentName || "Khách";
    document.getElementById("res-student").textContent = data.studentName || "Học sinh";

    const prices = {
      "football": 189000,
      "basketball": 189000,
      "dance": 189000,
      "vovinam": 189000,
      "taekwondo": 189000,
      "karate": 189000,
      "drums": 231000,
      "zither": 389000
    };

    const names = {
      "football": "Bóng đá",
      "basketball": "Bóng rổ",
      "dance": "Nhảy hiện đại",
      "vovinam": "Vovinam",
      "taekwondo": "Taekwondo",
      "karate": "Karate",
      "drums": "Trống hội",
      "zither": "Đàn tranh"
    };

    let total = 0;
    const activitiesEl = document.getElementById("res-activities");
    activitiesEl.innerHTML = "";

    if (data.activities && data.activities.length > 0) {
      data.activities.forEach(act => {
        const price = prices[act] || 0;
        const name = names[act] || act;
        total += price;

        const div = document.createElement("div");
        const strong = document.createElement("strong");
        div.style.marginBottom = "4px";
        strong.textContent = name;
        div.append(strong, document.createTextNode(`: ${price.toLocaleString("vi-VN")} đ`));
        activitiesEl.appendChild(div);
      });
    } else {
      activitiesEl.textContent = "Chưa chọn môn";
    }

    document.getElementById("res-total").textContent = total > 0 ? (total.toLocaleString("vi-VN") + " VNĐ") : "0 VNĐ";

    // Xóa dữ liệu sau khi đã hiển thị để tránh F5 bị lặp lại nếu cần,
    // nhưng ở đây ta cứ giữ nguyên để F5 vẫn xem được hóa đơn, chỉ xóa khi quay về trang chủ.
    // sessionStorage.removeItem("sna_lead_data");

  } catch (e) {
    console.error("Error parsing lead data", e);
    window.location.href = "/";
  }

  // Xử lý đếm ngược chuyển hướng
  let timeLeft = 10;
  const timerEl = document.getElementById("timer");
  const interval = setInterval(() => {
    timeLeft -= 1;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(interval);
      window.location.href = "https://snamarianapolis.edu.vn/vi/";
    }
  }, 1000);
});
