//ES5
// var Question = function(id, type, content, answers){
//     this.id = id;
//     this.questionType = type;
//     this.content = content;
//     this.answers = answers;
//     this.checkExact = () =>{

//     }
//     this.render = () =>{

//     }
// }

//ES6
class Question {
    constructor(id, type, content, answers) {
        this.id = id;
        this.questionType = type;
        this.content = content;
        this.answers = answers;
    }
    checkExact(){
    }
    render(){

    }
}
var newQuestion = new Question("1", "1", "Hôm nay là thứ mấy", [
    {content: "Thứ 2"},
    {content: "Thứ 3"},
    {content: "Thứ 4"},
    {content: "Thứ 5"},
    {content: "Thứ 6"},
]);
console.log(newQuestion);
