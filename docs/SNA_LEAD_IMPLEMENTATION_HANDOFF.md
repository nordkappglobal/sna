# Bàn giao WIP — Landing page và hệ thống Lead SNA

Ngày bàn giao: 31/08/2026  
Trạng thái: **Đang phát triển, chưa sẵn sàng cho production**

## 1. Phạm vi đã lưu

### Landing page

- Đã bổ sung dữ liệu và ảnh thật của 5 giảng viên tiêu biểu.
- Đã điều chỉnh khu vực giảng viên trên mobile theo dạng thẻ cuộn ngang.
- Các thay đổi này đã được xem thử trên local trước khi bắt đầu phần lead.

### Bộ khung hệ thống lead

- Có tài liệu kiến trúc và kế hoạch tại `docs/SNA_LEAD_ADMIN_IMPLEMENTATION_PLAN.md`.
- Có hướng dẫn cấu hình ban đầu tại `docs/SETUP.md`.
- Có migration Supabase cho `leads`, `admin_users`, `lead_events` và `integration_jobs`.
- Có bộ kiểm tra dữ liệu form, chuẩn hóa số điện thoại và chống gửi trùng ở mức ứng dụng.
- Có API tạo lead và API quản trị lead ở trạng thái WIP.
- Có bộ khung đồng bộ Google Sheet và gửi email qua Resend.
- Có cấu hình khởi đầu cho Vite và tệp `.env.example`.

## 2. Những phần chưa hoàn thành

- Chưa cài dependencies, chưa có `package-lock.json`.
- Chưa chạy build hoặc kiểm thử tích hợp.
- Chưa tạo giao diện `/admin/`.
- Chưa kết nối project Supabase, chưa áp dụng migration và chưa tạo admin thật.
- Chưa kết nối Google Sheet hoặc Resend.
- Chưa cấu hình rate limit trên Vercel Firewall.
- Chưa chuyển form landing page khỏi chế độ mô phỏng local.
- Chưa bỏ cảnh báo form demo và chưa đổi thông báo thành công theo mã đăng ký.
- Chưa cập nhật cấu hình Vercel để xác nhận Vite build và API routes hoạt động cùng nhau.
- Chưa deploy và chưa đẩy các thay đổi này lên GitHub.

## 3. Điểm cần kiểm tra kỹ trước khi tiếp tục

- Xác minh cách truyền idempotency key của Resend theo đúng phiên bản SDK được cài.
- Kiểm thử truy vấn chống trùng với trường mảng `activities` trong Supabase.
- Kiểm thử và siết chặt chuỗi tìm kiếm/filter của PostgREST trong API admin.
- Hoàn thiện cơ chế retry để số lần thử trong `integration_jobs` được cộng dồn chính xác.
- Kiểm tra cập nhật Google Sheet theo Lead ID ở cột A và xử lý đồng thời khi có nhiều lead.
- Xác nhận chiến lược backend dùng Supabase secret key sau khi đã xác minh access token và `admin_users`.
- Kiểm thử toàn bộ RLS/permission để `anon` và `authenticated` không đọc hoặc ghi trực tiếp các bảng nghiệp vụ.
- Không để secret, thông tin phụ huynh hoặc học sinh xuất hiện trong bundle, log hay analytics.

## 4. Thứ tự triển khai đề xuất cho đội code

1. Đọc `docs/SNA_LEAD_ADMIN_IMPLEMENTATION_PLAN.md` và đối chiếu bộ khung hiện tại.
2. Chạy `npm install`, tạo lockfile, sau đó sửa mọi lỗi build/lint/test phát sinh.
3. Tạo Supabase project thử nghiệm, áp dụng migration và kiểm tra RLS bằng cả anon key lẫn user session.
4. Hoàn thiện và kiểm thử `POST /api/leads`, bao gồm validation, chống trùng và trường hợp integration bị lỗi.
5. Xây giao diện `/admin/` responsive với Magic Link, tìm kiếm, lọc, phân trang, sửa trạng thái, xóa mềm và khôi phục.
6. Hoàn thiện Google Sheet sync, Resend và thao tác retry trong admin.
7. Kết nối form landing page với API thật; chỉ bỏ nhãn demo sau khi toàn bộ luồng thử nghiệm đạt yêu cầu.
8. Kiểm tra desktop/mobile, security, dữ liệu cá nhân và deployment Preview trước khi đưa production.

## 5. Cấu hình cần chuẩn bị

Các biến môi trường được liệt kê trong `.env.example`. Không gửi khóa bí mật qua chat và không commit bất kỳ tệp `.env` thực tế nào.

Các dịch vụ cần có:

- Supabase project khu vực Singapore.
- Google Cloud Service Account có quyền Editor trên Sheet riêng tư.
- Resend domain đã xác minh và API key.
- Vercel project có đủ biến môi trường cho Preview và Production.

## 6. Quy tắc dữ liệu khi phát triển

- Chỉ dùng dữ liệu giả như `0900000000` cho đến khi schema, RLS, email và Sheet được kiểm thử đầy đủ.
- Không dùng dữ liệu cá nhân thật nếu chưa có sự đồng ý và chưa xác nhận luồng bảo mật.
- Supabase phải là nguồn dữ liệu gốc; lỗi Google Sheet hoặc email không được làm mất lead.
- Không hard-delete lead trong phiên bản đầu.

## 7. Các tệp chính

- Kế hoạch: `docs/SNA_LEAD_ADMIN_IMPLEMENTATION_PLAN.md`
- Hướng dẫn cấu hình: `docs/SETUP.md`
- Migration: `supabase/migrations/202608310001_sna_leads.sql`
- API form: `api/leads.js`
- API admin WIP: `api/admin/leads.js`
- Logic server: `server/`
- Ảnh giảng viên: `assets/instructors/`

