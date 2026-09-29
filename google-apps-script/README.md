# Gửi lead SNA bằng Google Apps Script

Giải pháp này dùng chính tài khoản Google sở hữu Sheet để gửi email qua `MailApp`.
Không cần Resend và không công khai Google Sheet.

## Cài đặt

1. Mở Google Sheet quản lý lead SNA.
2. Chọn **Extensions → Apps Script**.
3. Xóa nội dung mẫu trong `Code.gs`, dán toàn bộ nội dung tệp `Code.gs` trong thư mục này và lưu.
4. Mở **Project Settings → Script Properties**, thêm:
   - Property: `WEBHOOK_SECRET`
   - Value: chuỗi ngẫu nhiên dài tối thiểu 32 ký tự.
5. Chạy hàm `testConfiguration` một lần và chấp nhận quyền gửi email.
6. Chọn **Deploy → New deployment → Web app**:
   - Execute as: `Me`
   - Who has access: `Anyone`
7. Sao chép URL kết thúc bằng `/exec`.
8. Trong Vercel → dự án SNA → Settings → Environment Variables, thêm cho Production:
   - `GOOGLE_APPS_SCRIPT_WEBHOOK_URL`: URL `/exec` vừa sao chép.
   - `GOOGLE_APPS_SCRIPT_WEBHOOK_SECRET`: đúng chuỗi bí mật ở bước 4.
   - `LEAD_NOTIFICATION_TO`: `vuong.ngvu@gmail.com`
9. Redeploy bản Production mới nhất.
10. Gửi một lead thử. Sau khi nhận được email, vào `/admin/` và bấm **Gửi bù email** để gửi lại các lead cũ.

## Lưu ý

- Không đưa `WEBHOOK_SECRET` vào source code hoặc gửi qua chat.
- Khi sửa `Code.gs`, tạo deployment version mới trong Apps Script.
- Gmail cá nhân và Google Workspace có quota gửi email khác nhau. Apps Script sẽ trả lỗi rõ khi hết quota.
- Mỗi lead được đánh dấu theo `leadId` trong Script Properties để tránh gửi trùng khi bấm thử lại.
