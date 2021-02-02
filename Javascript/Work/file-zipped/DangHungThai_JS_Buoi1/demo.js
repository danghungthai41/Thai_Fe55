// var changeContent = () => {
//     var theNoiDung = document.getElementById('theNoiDung');
//     // theNoiDung.innerHTML = 'Anh Sang dạy hay hơn!';
//     theNoiDung.innerHTML = 'Nội dung đã được thay đổi!';

// }
// var btnClick = document.getElementById('btnClick');
// btnClick.onclick = changeContent;
//Cách 1:
document.getElementById('btnClick').onclick = function () {
    document.getElementById('theNoiDung').innerHTML = 'Nội dung đã được thay đổi';
}
//Cách 2:
// document.getElementById('btnClick').addEventListener("click", ()=>{
//     var theNoiDung = document.getElementById('theNoiDung');
//     // theNoiDung.innerHTML = 'Anh Sang dạy hay hơn!';
//     theNoiDung.innerHTML = 'Nội dung đã được thay đổi!';
// })

//Cách 3: Cài đặt sự kiện trên thẻ bên HTML
//<button id="btnClick" onclick ='changeContent'>Nhấn em đi</button>


//Hàm xử lý Tắt Đèn và Bật Đèn
// var turnOn = ()=>{
//     var theHinhAnh = document.getElementById('theImg');
//         theHinhAnh.src = './img/pic_bulbon.gif';
// }
// var turnOff = function () {
//     var theHinhAnh = document.getElementById('theImg');
//     theHinhAnh.src = './img/pic_bulboff.gif';
// }
document.getElementById('turnOnLight').onclick = function () {
    document.getElementById('theImg').src = './img/pic_bulbon.gif';
    var turnOnLight = document.getElementById('turnOnLight');
    var turnOffLight = document.getElementById('turnOffLight');
    turnOnLight.className = 'btnActive';
    turnOffLight.className = '';
}

document.getElementById('turnOffLight').onclick = function(){
    document.getElementById('theImg').src = './img/pic_bulboff.gif';
    var turnOnLight = document.getElementById('turnOnLight');
    var turnOffLight = document.getElementById('turnOffLight');
    turnOnLight.className = '';
    turnOffLight.className = 'btnActive';
}

// Event onclick
// var turnOffLight = document.getElementById('turnOffLight');
// turnOffLight.onclick = turnOff;
// var turnOnLight = document.getElementById('turnOnLight');
//     turnOnLight.onclick = turnOn;

// document.getElementById('turnOnLight').addEventListener("click", () => {
//     var theHinhAnh = document.getElementById('theImg');
    // console.log("test");

//     var turnOnLight = document.getElementById('turnOnLight');
//     var turnOffLight = document.getElementById('turnOffLight');
//     turnOnLight.className = 'btnActive';
//     turnOffLight.className = '';

//     theHinhAnh.src = './img/pic_bulbon.gif';
// })

// document.getElementById('turnOffLight').addEventListener("click", () => {
//     var theHinhAnh = document.getElementById('theImg');
//     // console.log("test");

//     var turnOnLight = document.getElementById('turnOnLight');
//     var turnOffLight = document.getElementById('turnOffLight');
//     turnOnLight.className = '';
//     turnOffLight.className = 'btnActive';

//     theHinhAnh.src = './img/pic_bulboff.gif';
// })

// Bài 3:
var fontS = 20;
document.getElementById('text_font').style.fontSize = fontS + 'px';
document.getElementById('btnTangFont').onclick = function (){
    fontS++;
    document.getElementById('text_font').style.fontSize = fontS +'px';
}
document.getElementById('btnGiamFont').onclick = function(){
    fontS--;
    if(fontS <= 0){
        fontS = 0;
    }
    document.getElementById('text_font').style.fontSize = fontS + 'px';
}

// var fontS = 36;
// document.getElementById('text_font').style.fontSize = fontS + 'px';

// //Cài đặt sự kiện click
// document.getElementById('btnTangFont').onclick = () => {
//     fontS++;
//     document.getElementById('text_font').style.fontSize = fontS + 'px';
// }
// document.getElementById('btnGiamFont').onclick = () => {
//     fontS--;
//     if (fontS <= 0)
//         fontS = 0;
//     document.getElementById('text_font').style.fontSize = fontS + 'px';
// }
// var tangFont = ()=>{
//     var tangFontSize = document.getElementById('text_font');
//     tangFontSize.style.fontSize = 'fontSizeText++';
// }
// var giamFont = ()=>{
//     var giamFontSize = document.getElementById('text_font');
//     giamFontSize.style.fontSize = 'fontSizeText--';
// }
//  var btnTangFont = getElementById('btnTangFont') = tangFont;
//  var btnGiamFont = getElementById('btnGiamFont') = giamFont;

// DOM dựa vào tag name
var arrSection = document.getElementsByTagName('section');
//Thay đổi nội dung thẻ 2
// arrSection[1].innerHTML = 'Front end 55';
// arrSection[1].style.backgroundColor = 'violet';

//THay đổi nội dung tất cả thẻ section thành Front end 55
// var arrSection = document.getElementsByTagName('section');
for (var index = 0; index < arrSection.length; index++) {
    // Mỗi lần lấy ra 1 section
    var tagSection = arrSection[index];
    tagSection.innerHTML = 'Front end 55';
    tagSection.style.backgroundColor = 'violet';
}
// console.log('arrSection', arrSection);

// ===========DOM dựa vào class name
var arrP = document.getElementsByClassName('class_text');
arrP[2].innerHTML = 'CyberSoft';

//============= DOM query Selector=============
// document.querySelector('.card-title').innerHTML = 'Cybersoft 456';

// document.querySelectorAll('.card-text')[1].innerHTML = 'ABC';

//==============BÀI TẬP 4:=================
// keyUp hoặc onchange
var valueTaiKhoan = '';
var valueMatKhau = '';

var changeValue = function (){
    valueTaiKhoan = document.querySelector('#taiKhoan').value;
    valueMatKhau = document.querySelector('#matKhau').value;

    if (valueTaiKhoan === 'cybersoft' && valueMatKhau === 'cybersoft') {
        // document.querySelector('#btnThongBao')
        document.querySelector('#btnThongBao').innerHTML = 'Đăng nhập thành công';
        // document.querySelector('#btnThongBao').style.backgroundColor = 'green';
        document.querySelector('#btnThongBao').className = 'btn btn-success';

    } else {
        document.querySelector('#btnThongBao').innerHTML = 'Đăng nhập thất bại';
        // document.querySelector('#btnThongBao').style.backgroundColor = 'red';
        document.querySelector('#btnThongBao').className = 'btn btn-danger';
        document.querySelector('#taiKhoan').focus();
    }
}

//Bài 5:
var getEle = function (id) {
    return document.getElementById(id);
}

//Định nghịa khi người dùng click vào nút tính querySelector
document.querySelector('.btnTinhTien').onclick = function () {
    var tongTien = document.querySelector('#tongTienThanhToan').value;
    var phanTramTip = document.querySelector('#phanTramTip').value;
    var soNguoiShare = document.querySelector('#soNguoiShare').value;
    if(tongTien === "" || phanTramTip ===""){
        alert('Vui lòng nhập giá trị');
        return;
    }
    soNguoiShare = parseInt(soNguoiShare);
    if(soNguoiShare <= 0){
        soNguoiShare = parseInt("1");
    }
    var tongTienTip = (tongTien * phanTramTip/100)/soNguoiShare;
    document.querySelector('.tienTipTrenNguoi').innerHTML = tongTienTip;

}


