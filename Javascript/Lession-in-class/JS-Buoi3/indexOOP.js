// 1. Trừu tượng
// 2. Đóng gói
// 3. Kế thừa
// 4. Đa hình
var getSection = function(id){
    return document.querySelector(id);
}

//Khai báo đối tượng với block scope
var sinhVien = {
    maSinhVien: 'abc',
    tenSinhVien: 'Thái',
    loaiSinhVien: 'Giỏi',
    diemLy: '7',
    diemHoa: '8',
    diemToan: '9',
    diemRenLuyen: '',
    tinhDiemTB : function () {
        var diemTrungBinh = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) / 3;
        return diemTrungBinh;
    },
    xepLoaiSinhVien : function(){
        var ketQua = 'Yếu';
        var diemTrungBinh = this.tinhDiemTB();
        if(diemRenLuyen < 5)
            return ketQua;
        else if(diemTrungBinh < 5)
            return ketQua;
        else if(diemTrungBinh > 9 && diemTrungBinh <= 10)
            ketQua = 'Xuất Sắc';
        else if(diemTrungBinh >= 8)
            ketQua = 'Giỏi';
        else if(diemTrungBinh >= 7)
            ketQua = 'Khá';
        else if (diemTrungBinh >= 6)
            ketQua = 'Trung Bình Khá';
        else if (diemTrungBinh >= 5)
            ketQua = 'Trung Bình';
        else {
            ketQua = 'Không Xác Định';
        }
        return ketQua;
    }
    
}

// Truy xuất biến trong đối tượng (Thuộc tính)
// Có 2 cách:
// Cách 1: ten_doi_tuong.tenThuocTinh
// console.log(sinhVien.maSinhVien);

// Cách 2: ten_doi_tuong['ten_thuoc_tinh'];
// console.log(sinhVien['tenSinhVien']);

//Truy xuất hàm trong đối tượng (Phương thức)
// Cách 1: ten_doi_tuong.ten_phuong_thuc();
// sinhVien.tinhDiemTB();
// Cách 2: ten_doi_tuong['ten_phuong_thuc']();
// sinhVien['tinhDiemTB']();

// = > {} scope

//Cài đặt sự kiện khi người dùng click vào nút button
document.querySelector('#btnXacNhan').onclick = function () {
    //Lấy gía trị người dụng nhập vào gán cho các thuộc tính của đối tượng.
    sinhVien.maSinhVien = document.querySelector('#maSinhVien').value;
    sinhVien.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sinhVien.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sinhVien.diemToan = document.querySelector('#diemToan').value;
    sinhVien.diemLy = document.querySelector('#diemLy').value;
    sinhVien.diemHoa = document.querySelector('#diemHoa').value;
    sinhVien.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    // console.log('Sinh Viên', sinhVien);
    


//Hiển thị dữ liệu lên giao diện
getSection('#sTenSinhVien').innerHTML = sinhVien.tenSinhVien;
getSection('#sMaSinhVien').innerHTML = sinhVien.maSinhVien;
getSection('#sLoaiSinhVien').innerHTML = sinhVien.loaiSinhVien;
getSection('#diemTrungBinh').innerHTML = sinhVien.tinhDiemTB().toFixed(2);
getSection('#xepLoai').innerHTML = sinhVien.xepLoaiSinhVien();
}