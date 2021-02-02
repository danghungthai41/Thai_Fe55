console.log("Hellllllo world");

/*
var: hoisting, function scope
let, !hoisting, const: clock scope

IIFE Function: Function đc chạy ngay lúc khởi tạo

*/

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}

//Khai báo KDL
let username: string = "Tèo";
username = "10";

let score: number = 10; //...

//Array
let arr1: Array<number> = [1, 2, 3, 4, 5]; // => Để khác KDL sẽ báo lỗi
let arr2: string[] = ["1", "2", "3", "4"]; // => Để khác KDL sẽ báo lỗi

let obj1: object = { hoTen: "thái", age: 11 };

//tuple: KDL array với SL phần tử cố định, có thể khác KDL
let tuple: [string, number, boolean] = ["123124", 123123, false];

//enum: Khai báo constance
enum Colors {
  black = "#000",
  white = "fff",
  red = "fb4226",
}
console.log(Colors.red);

//Khai báo kdl null, undefined
let n: null = null;
let u: undefined = undefined;

//KDL any: Có thể gán đc mọi KDL
let demo: any = "Hello";
demo = 10;
demo = false;

//Function: có return value;

function getPrice(): number {
  return 1000;
}
function xuatThongTin(): void {
  console.log("Ho va ten: dang hung thai");
}

//2 kdl khác nhau
let res: string | number = "thai";
res = 18;

//Làm với API
let result2: number[] | null = null;
result2 = [1, 2, 3, 4];

//Define interface phải có đúng số lượng KDL, properties,...
interface SinhVien {
  hoTen: string;
  tuoi: number;
  //optional chaning: giúp properties này có hay ko cũng đc
  lop?: string;
}
const sinhVien: SinhVien = {
  hoTen: "Thái",
  tuoi: 18,
  lop: "FE55",
};

type SinhVien2 = {
  hoTen: string;
  tuoi: number;
  //optional chaning: giúp properties này có hay ko cũng đc
  lop?: string;
};

//***Generic
function getRuslt<T>(value: T): T {
  return value;
}
console.log(getRuslt<string>("hello"));

//falsy value: 0, "", null, false, undefined
//fetch API lấy điểm toán
let diemToan = 0;
let res1: number | string = diemToan || "N/A";
console.log(res1);
//Null coalescing
// ?? : sẽ chỉ kiểm tra null và undefined

let res2: number | string = diemToan ?? "N/A";
console.log(res2);

//Class
class NhanVien {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  tinhLuong(): number {
    return 1000;
  }
}
//Private không thể truy cập ngoài class NhanVien vì hoTen khai báo private
const nhanVien = new NhanVien("Thái", 18);
nhanVien.setName("Hùng");
class GiamDoc extends NhanVien {
  private heSoLuong: number;
  constructor(name: string, age: number, heSoLuong: number) {
    super(name, age);
    this.heSoLuong = heSoLuong;
  }
  //override lại phương thức từ class NhanVien
  tinhLuong(): number {
    return super.tinhLuong() * this.heSoLuong;
  }
}
const giamDoc = new GiamDoc("Đặng", 25, 4);
console.log(giamDoc.tinhLuong());

//Interface
interface INhanVien {
  name: string;
  age: number;
  tinhLuong(): number;
}

interface IChucVu {
    //Chỉ đọc không đc sửa
    readonly chucVu: string;
}

class NhanVienThietKe implements INhanVien, IChucVu {
  name: string;
  age: number;
  chucVu : string;
  constructor(name: string, age: number, chucVu: string) {
    this.name = name;
    this.age = age;
    this.chucVu = chucVu;
  }
  tinhLuong(): number {
    return 3000;
  }
}

//DOM
let txtName = <HTMLInputElement>document.querySelector("#txtName");
txtName.value;
 let btnSubmit = <HTMLButtonElement>document.querySelector("btnSubmit");

 //npm i @angular/cli -g ~ create-react-app -g
// ng new angualar fe55-angular
// ng serve -o: để chạy

