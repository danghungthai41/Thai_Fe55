


var tinhDiemTB = function (diemToan, diemLy, diemHoa) {
    var diemTB = 0;
    return (Number(diemToan) + Number(diemLy) + Number(diemHoa)) / 3;
}

var xepLoaiSinhVien = function (diemTB, diemRenLuyen) {
    var ketQua = 'Yếu';

    if (diemRenLuyen < 5) {
        return ketQua;
    } else if (diemTB < 5){
        return ketQua;
    } else if (diemTB > 9 && diemTB <= 10) {
        ketQua = 'Xuất sắc';
    } else if (diemTB >= 8) {
        ketQua = 'Giỏi';
    } else if (diemTB >= 7) {
        ketQua = 'Khá';
    } else if (diemTB >= 6) {
        ketQua = 'Trung Bình Khá';
    } else if (diemTB >= 5) {
        ketQua = 'Trung Bình';
    } else {
        ketQua = 'Không xác định';
    }

    // if(diemRenLuyen < 5){
    //     return ketQua;
    // } else if (diemTB < 5){
    //     return ketQua;
    // } else if(diemTB >= 5 && diemTB <6){
    //     ketQua = 'Trung Bình';
    // } else if(diemTB >= 6 && diemTB <7){
    //     ketQua = 'Trung Bình Khá';
    // } else if(diemTB >= 7 && diemTB <8){
    //     ketQua = 'Khá';
    // } else if(diemTB >= 8 && diemTB <9){
    //     ketQua = 'Giỏi';
    // } else if(diemTB >= 9 && diemTB <= 10){
    //     ketQua = 'Xuất Sắc';
    // } else {
    //     ketQua = 'Không xác định';
    // }
    return ketQua;
}


//Cài đặt sự kiện khi người dùng CLICK XÁC NHẬN

document.querySelector('#btnXacNhan').onclick = function () {
    //Lấy dữ liệu người dùng nhập từ giao diện
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    var diemTB = tinhDiemTB(diemToan, diemLy, diemHoa);
    var xepLoai = xepLoaiSinhVien(diemTB, diemRenLuyen);

    document.querySelector('#sTenSinhVien').innerHTML = tenSinhVien;
    document.querySelector('#sMaSinhVien').innerHTML = maSinhVien;
    document.querySelector('#sLoaiSinhVien').innerHTML = loaiSinhVien;
    document.querySelector('#diemTrungBinh').innerHTML = diemTB;
    document.querySelector('#xepLoai').innerHTML = xepLoai;

    console.log(maSinhVien);
    console.log(tenSinhVien);
    console.log(loaiSinhVien);
    console.log(diemToan);
    console.log(diemLy);
    console.log(diemHoa);
    console.log(diemRenLuyen);

}