class FillInBlank extends Question{
    constructor(id, type, content, answers){
        super(id, type, content, answers);
    }
    
    checkExact(){
        var value = document.getElementById(`fill-in-blank-${this.id}`).value;
        if(this.answers[0].content.toLowerCase() == value.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }

    
    render(){
        return  `
            <div>
            <h1>Câu hỏi 5: ${this.content}</h1>
            <input type = "text" id="fill-in-blank-${this.id}"/>
            </div>
        `;
    }
}
const newFillInBlank = new FillInBlank("1", "1", "Hôm nay là thứ mấy", [

]);
export {FillInBlank};