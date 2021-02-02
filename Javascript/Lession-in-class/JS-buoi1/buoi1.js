console.log('Hello World');
console.log('Bưởi ơi');

function xepLoaiSinhVien(){
    var diemTB;
    var ketQua;
    if(diemTB >10 || diemTB < 0){
        ketQua = "Điểm nhập không hợp lệ";
        break;
    } 
    if(diemTB >= 9){
        ketQua = "Xuất Sắc";
    } if(diemTB >=8){
        ketQua = "Giỏi";
    } if(diemTB >=7){
        ketQua = "Khá";
    } if(diemTB >=6){
        ketQua = "Trung Bình Khá";
    } if(diemTB >=5){
        ketQua = "Trung Bình";
    } if(diemTB < 5){
        ketQua = "Yếu";
    } 
}