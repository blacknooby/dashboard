// 1. Hàm này sẽ tự động chạy mỗi khi trang web (Phòng khách hoặc Phòng ngủ) vừa được tải xong
document.addEventListener("DOMContentLoaded", function() {
    // Khai báo danh sách ID của tất cả các đèn trong hệ thống
    const allLights = ['lr-light1', 'lr-light2', 'br-light1', 'br-light2'];

    allLights.forEach(function(lightId) {
        // Kiểm tra xem đèn này có tồn tại trên trang hiện tại đang mở không
        const statusElement = document.getElementById(lightId + '-status');
        const bulbImage = document.getElementById(lightId + '-img');

        if (statusElement && bulbImage) {
            // Lọc trong bộ nhớ localStorage xem đèn này đang lưu trạng thái gì
            // Nếu chưa có dữ liệu lưu trữ, mặc định sẽ coi là 'false' (Tắt)
            const isOn = localStorage.getItem(lightId) === 'true';

            // Phục hồi lại giao diện dựa trên trạng thái đã lưu
            if (isOn) {
                statusElement.textContent = "Trạng thái: Đang Bật";
                statusElement.classList.add("active");
                bulbImage.src = "https://www.w3schools.com/js/pic_bulbon.gif";
            } else {
                statusElement.textContent = "Trạng thái: Đã Tắt";
                statusElement.classList.remove("active");
                bulbImage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
            }
        }
    });
});

// 2. Hàm được gọi khi bạn ấn nút Bật hoặc Tắt
function toggleLight(lightId, isOn) {
    const statusElement = document.getElementById(lightId + '-status');
    const bulbImage = document.getElementById(lightId + '-img');

    if (isOn) {
        // Cập nhật giao diện thành BẬT
        statusElement.textContent = "Trạng thái: Đang Bật";
        statusElement.classList.add("active");
        bulbImage.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        
        
        // LƯU TRẠNG THÁI VÀO BỘ NHỚ
        localStorage.setItem(lightId, 'true');
    } else {
        // Cập nhật giao diện thành TẮT
        statusElement.textContent = "Trạng thái: Đã Tắt";
        statusElement.classList.remove("active");
        bulbImage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        localStorage.setItem(lightId, 'false');
    }
}