class MultipleChoice extends Question{
    constructor(id, type, content, answers){
        super(id, type, content, answers);
    }
    checkExact(){
        //Lấy danh sách câu trả lời
        var isExact = false;
        var answerList = document.getElementsByName(`multiple-choice-${this.id}`);
        console.log(answerList);
        answerList.forEach(function(answers){
            if(answers.checked){
                isExact = (answers.value === 'true');
                // if(answers.value === "true"){
                //     isExact = true;
                // } else{
                //     isExact = false;
                // }
            }
        });
        return isExact;

    }

    //Return đoạn mã HTML tương ứng với câu hỏi MultipleChoice
    render(){
        var answersHTML = '';
        for (var index = 0; index < this.answers.length; index++) {
            answersHTML += `
                <div>
                    <input type = "radio" name ="multiple-choice-${this.id}" value = "${this.answers[index].exact}"/>
                    <label>${this.answers[index].content}</label>
                </div>
            `
        }
        console.log(answersHTML);
        return `
            <div>
                <h1>Câu hỏi 1: ${this.content}</h1>
                ${answersHTML}
            </div>
        `
    }
}
const newMultipleChoice = new MultipleChoice("1", "1", "Hôm nay là thứ mấy", [
    {content: "Thứ 2"},
    {content: "Thứ 3"},
    {content: "Thứ 4"},
    {content: "Thứ 5"},
    {content: "Thứ 6"},
]);
console.log(newMultipleChoice.render());
