//Khai báo lớp đối tượng trong Javascript
// (Lớp đối tượng CLASS - trong JS gọi là Prototype)
var NhanVien = function () {
    this.tenNhanVien = '';
    this.maNhanVien = '';
    this.luongCB = '';
    this.chucVu = '';
    this.heSoChucVu = '';
    this.gioLamTrongThang = '';
    this.tinhTongLuong = function () {
        return this.luongCB * this.heSoChucVu;
    };
    this.xepLoaiNhanVien = function () {
        if (this.gioLamTrongThang >= 120) {
            return 'Nhân Viên Xuất Sắc';
        } else if (this.gioLamTrongThang >= 100){
            return 'Nhân Viên Giỏi';
        } else if (this.gioLamTrongThang >= 80) {
            return 'Nhân Viên Khá';
        } else if (this.gioLamTrongThang >= 50) {
            return 'Nhân Viên Trung Bình';
        } else {
            return 'Không xác định';
        }
    }
}