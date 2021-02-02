//1. Let & Const
// JS có 2 kiểu dữ liệu
//Tham trị (Number, String, Boolean) và 3 tham chiếu (array, object, function)

//Declaration function
// function a(){
// }
//Expresstion function
// const a = function (){

// }
//Arrow function
// cost a = ()=>{

// }
// const es5Return = function (a, b) {
//     return a + b;
// }
// es5Return();
// const es6 = (a, b) => {
//     console.log(a);
// }
import { test } from "./test.js";

test("thông báo nè");
const es6Return = (a, b) => a + b;

// rest Params
// const sum = (a,b,c,d) => a+b+c+d;
const sum = (...numberList) => {
    console.log(numberList);
}
sum(1, 2, 3, 4, 5);

//Spread Operator

let khoA = ["Táo", "Xoài", "Bưởi"];
// let khoB = khoA; //Bị tham chiếu
// let khoB = [...khoA] //Không bị tham chiếu
let khoB = [...khoA];
khoB.push("Dâu");
khoB = [...khoB, "Chuối"];

console.log(khoA);
console.log(khoB);

//Default Params
const defaultParams = (a) => console.log(a);
defaultParams(2);

//Detructuring

//Lấy giá trị trong mảng
// const danhSachKhoaHoc = ["JS", "ReactJS"];
// let [js, reactJS] = danhSachKhoaHoc;

// const hv = {
//     name: "Nguyễn Văn Tèo",
//     age: 11,
// };
// let ten = hv.name;
// let age = hv.age;

// // let {name: ten, age: tuoi} = hv;
// let {ten, tuoi} = hv;
// console.log(ten, tuoi);

// //Object Interal
// const nha ={
//     ["cua" + "nha"]: "cửa nhà",
// }

