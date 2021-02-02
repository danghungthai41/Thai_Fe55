/* 
Ex: Testing online (Trắc nghiệm trực tuyến)
Tasks: 
    1. Call API lấy ds câu hỏi
    2. Render ds câu hỏi ra màng hình
    3. Tính điểm và show kết quả

*/

var questionList;
var fetchQuestions = function () {
    axios({
        url: 'https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions',
        method: 'GET',
    })
        .then(function (res) {
            console.log(res);
            questionList = mapData(res.data);
            renderQuestions(questionList);
        })
        .catch(function (err) {
            console.log(err);
        });
    // promise => pending, fullfill, reject
    //=> promise => .then, .catch
};
var renderQuestions = function (questionList) {
    var questionsHTML = '';
    for (var index = 0; index < questionList.length; index++) {
        questionsHTML += questionList[index].render();
    }
    document.querySelector('#questionList').innerHTML = questionsHTML;
};

var mapData = function (dataFromDB) {
    var mappedData =[];
    for (var index = 0; index < dataFromDB.length; index++) {
        var currentQuestion = dataFromDB[index];

        // var answers = dataFromDB[index].answers;
        // var content = dataFromDB[index].content;
        // var id = dataFromDB[index].id;
        // var questionType = questionList[index].questionType;
        if (currentQuestion.questionType === 1) {
            // var multiChoice = new MultipleChoice(currentQuestion.id, currentQuestion.type, currentQuestion.content, currentQuestion.answers);
            //  mappedData.push(multiChoice);
            mappedData.push(new MultipleChoice(currentQuestion.id, currentQuestion.type, currentQuestion.content, currentQuestion.answers));
        } else {
            // var fillInBlank = new FillInBlank(currentQuestion.id, currentQuestion.type, currentQuestion.content, currentQuestion.answers);
             mappedData.push(new FillInBlank(currentQuestion.id, currentQuestion.type, currentQuestion.content, currentQuestion.answers));
        }
    }
    return mappedData;
}
fetchQuestions();

var handleResult = function(){
    // console.log("ABC");
    var result = 0;

    //Duyệt qua từng câu hỏi và kiểm tra kết quả. If đúng result++, sai thì bỏ qua.
    
    questionList.forEach(function(question){
        // console.log('question ', question);
        if(question.checkExact()){
            result++;
        }
    });
    //Thông báo kết quả
    alert(`Số câu đúng là: ${result}`);

}