"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hellllllo world");
/*
var: hoisting, function scope
let, !hoisting, const: clock scope

IIFE Function: Function đc chạy ngay lúc khởi tạo

*/
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
}
//Khai báo KDL
var username = "Tèo";
username = "10";
var score = 10; //...
//Array
var arr1 = [1, 2, 3, 4, 5]; // => Để khác KDL sẽ báo lỗi
var arr2 = ["1", "2", "3", "4"]; // => Để khác KDL sẽ báo lỗi
var obj1 = { hoTen: "thái", age: 11 };
//tuple: KDL array với SL phần tử cố định, có thể khác KDL
var tuple = ["123124", 123123, false];
//enum: Khai báo constance
var Colors;
(function (Colors) {
    Colors["black"] = "#000";
    Colors["white"] = "fff";
    Colors["red"] = "fb4226";
})(Colors || (Colors = {}));
console.log(Colors.red);
//Khai báo kdl null, undefined
var n = null;
var u = undefined;
//KDL any: Có thể gán đc mọi KDL
var demo = "Hello";
demo = 10;
demo = false;
//Function: có return value;
function getPrice() {
    return 1000;
}
function xuatThongTin() {
    console.log("Ho va ten: dang hung thai");
}
//2 kdl khác nhau
var res = "thai";
res = 18;
//Làm với API
var result2 = null;
result2 = [1, 2, 3, 4];
var sinhVien = {
    hoTen: "Thái",
    tuoi: 18,
    lop: "FE55",
};
//***Generic
function getRuslt(value) {
    return value;
}
console.log(getRuslt("hello"));
//falsy value: 0, "", null, false, undefined
//fetch API lấy điểm toán
var diemToan = 0;
var res1 = diemToan || "N/A";
console.log(res1);
//Null coalescing
// ?? : sẽ chỉ kiểm tra null và undefined
var res2 = diemToan !== null && diemToan !== void 0 ? diemToan : "N/A";
console.log(res2);
//Class
var NhanVien = /** @class */ (function () {
    function NhanVien(name, age) {
        this.name = name;
        this.age = age;
    }
    NhanVien.prototype.getName = function () {
        return this.name;
    };
    NhanVien.prototype.setName = function (name) {
        this.name = name;
    };
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
//Private không thể truy cập ngoài class NhanVien vì hoTen khai báo private
var nhanVien = new NhanVien("Thái", 18);
nhanVien.setName("Hùng");
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(name, age, heSoLuong) {
        var _this = _super.call(this, name, age) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    //override lại phương thức từ class NhanVien
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    return GiamDoc;
}(NhanVien));
var giamDoc = new GiamDoc("Đặng", 25, 4);
console.log(giamDoc.tinhLuong());
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(name, age, chucVu) {
        this.name = name;
        this.age = age;
        this.chucVu = chucVu;
    }
    NhanVienThietKe.prototype.tinhLuong = function () {
        return 3000;
    };
    return NhanVienThietKe;
}());
//DOM
var txtName = document.querySelector("#txtName");
txtName.value;
var btnSubmit = document.querySelector("btnSubmit");
//npm i @angular/cli -g ~ create-react-app -g
// ng new angualar fe55-angular
// ng serve -o: để chạy
