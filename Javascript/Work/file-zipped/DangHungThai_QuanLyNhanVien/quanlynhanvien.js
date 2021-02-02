// var nhanSu = {
//     tenNhanSu: '',
//     maNhanSu: '',
//     luongCB: '',
//     chucVu: '',
//     gioLamTrongThang: '',
//     tinhLuong: function () {
//         var tongLuong = this.luongCB * Number(this.chucVu);
//         return tongLuong;
//     },
//     xepLoaiNhanVien: function () {
//         var ketQua = '';
//         switch (Number(this.chucVu)) {
//             case 1:
//                 if (this.gioLamTrongThang > 120) {
//                     ketQua = 'Nhân Viên Xuất Sắc';
//                 } else if (this.gioLamTrongThang > 100) {
//                     ketQua = 'Nhân Viên Giỏi';
//                 } else if (this.gioLamTrongThang > 80) {
//                     ketQua = 'Nhân Viên Khá';
//                 } else if (this.gioLamTrongThang > 50) {
//                     ketQua = 'Nhân Viên Trung Bình';
//                 }
//                 getSection('#xepLoaiTrongThang').style.display = 'block';
//                 return ketQua;
//                 break;
//             default:
//                 getSection('#xepLoaiTrongThang').style.display = 'none';
//                 break;
//         }
//     },
//     chuyenDoiTen: function(){
//         switch (Number(this.chucVu)) {
//             case 1:
//                 return this.chucVu = 'Nhân Viên';
//                 break;
//             case 2:
//                 return this.chucVu = 'Quản Lý';
//                     break;
//             case 3:
//                 return this.chucVu = 'Giám Đốc';
//                 break;   
//         }
//     },

// }

// //Gắn sự kiến Onclick
// getSection('#btnXacNhan').onclick = function () {
//     nhanSu.tenNhanSu = getSection('#tenNhanSu').value;
//     nhanSu.maNhanSu = getSection('#maNhanSu').value;
//     nhanSu.chucVu = getSection('#chucVu').value;
//     nhanSu.luongCB = getSection('#luongCoBan').value;
//     nhanSu.gioLamTrongThang = getSection('#gioLamTrongThang').value;

//     getSection('#sTenNhanSu').innerHTML = nhanSu.tenNhanSu;
//     getSection('#sMaNhanSu').innerHTML = nhanSu.maNhanSu;
//     getSection('#tongLuong').innerHTML = nhanSu.tinhLuong() + ' VNĐ';
//     getSection('#xepLoai').innerHTML = nhanSu.xepLoaiNhanVien();
//     getSection('#sChucVu').innerHTML = nhanSu.chuyenDoiTen();
// }
var getSection = function (id) {
    return document.querySelector(id);
}
//SỬA BÀI QUẢN LÝ NHÂN VIÊN
// var nhanVien = new NhanVien();
// console.log(nhanVien);
// var nhanVien2 = new NhanVien();

//Hàm tính tổng lượng
// var tinhTongLuong = function(){
//     return nv.heSoChucVu * nv.luongCb;
// }


getSection('#btnXacNhan').onclick = function(){
    var nv = new NhanVien();
    nv.tenNhanVien = getSection('#tenNhanVien').value;
    nv.maNhanVien = getSection('#maNhanVien').value;
    // nv.chucVu = getSection('#chucVu').innerHTML;
    nv.luongCB = getSection('#luongCoBan').value;
    nv.gioLamTrongThang = getSection('#gioLamTrongThang').value;
    nv.heSoChucVu = getSection('#chucVu').value;



    // Thuộc tính thẻ select
    // .options: Trả về mảng các đối tượng option trong thẻ select (Giống như DOM đến tag name option)

    //.selectedIndex: Trả về vị trí thẻ option được chọn (0 hoặc 1 hoặc 2)
    var mangOption = getSection('#chucVu').options;
    var viTriOptionChon = getSection('#chucVu').selectedIndex;
    
    //Lấy tra thẻ option thứ selectedIndex .innerHTML => Lấy ra innerHTML của thẻ option được chọn trong thẻ select

    nv.chucVu = mangOption[viTriOptionChon].innerHTML;
    console.log(mangOption);
    console.log(nv);

    //In ra giao diện thông tin nhân viên
    getSection('#sTenNhanVien').innerHTML = nv.tenNhanVien;
    getSection('#sMaNhanVien').innerHTML = nv.maNhanVien;
    getSection('#sChucVu').innerHTML = nv.chucVu;
    getSection('#tongLuong').innerHTML = nv.tinhTongLuong();
    getSection('#xepLoai').innerHTML = nv.xepLoaiNhanVien();

}