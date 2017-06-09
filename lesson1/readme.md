Đây là bộ khung cấu trúc của ứng dụng được xây dựng từ nháp dựa trên nodejs, express, mongodb, passport
gồm các thư muc và chức năng của từng thư mục như sau:

config:                     là thư mục chứa các cấu hình cho toàn ứng dụng
config\appConfig.js         Là file chứa các cấu hình cần thiết của ứng dụng
config\passportConfig.js    là file chứa các cấu  hình passport


controller: chứa các tệp thực thi logic của ứng dụng.
routes: là thưc mục là nơi nhận các req của trình duyệt và xác định controller nào đảm nhiệm việc thực thi logic
view: là thư mục chứa các file html hiển thị giao diện người dùng
public là thư mục chứa css, img và javascript chạy trên trình duyệt