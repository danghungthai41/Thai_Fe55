
let validate = new Validation();
let guessNumber = Math.round(Math.random() * 1000)
let valid = true;
let soLanChon = 1;
let mangKetQua = [];
let getSection = (id) => {
    return document.querySelector(id);
}

getSection('#btnDuDoan').onclick = () => {
    getSection('#btnNhapLai').disabled = false;
    getSection('#btnChoiLai').disabled = false;
    let valid = true;
    let playerChoiceNumber = getSection('#playerChoice').value;
    console.log(mangKetQua);
    // console.log(guessNumber);
    // console.log(playerChoiceNumber);
    valid &= validate.kiemTraRong(playerChoiceNumber, 'Số nhập', '#kiemTraRong');
    valid &= validate.kiemTraLaSo(playerChoiceNumber, 'Giá trị nhập ', '#kiemTraLaSo');
    valid &= validate.kiemTraGiaTri(playerChoiceNumber, 'Số nhập', '#kiemTraKetQua', 0, 1000);
    if (!valid) {
        return;
    }
    if (playerChoiceNumber < guessNumber) {
        getSection('#thongBaoKetQua').innerHTML = 'Số nhập phải lớn hơn ' + playerChoiceNumber;
        getSection('#thongBaoKetQua').className = 'btn btn-danger';
        soLanChon++;
    } else if (playerChoiceNumber > guessNumber) {
        getSection('#thongBaoKetQua').innerHTML = 'Số nhập phải nhỏ hơn ' + playerChoiceNumber;
        getSection('#thongBaoKetQua').className = 'btn btn-danger';
        soLanChon++;
    } else {
        alert('Chúc mừng bạn đã chọn chính xác, số máy chọn là ' + guessNumber + ', số lần chọn là ' + soLanChon + ' lần');
        soLanChon++;
    }
    renderHistoryGuess(playerChoiceNumber);

}

renderHistoryGuess = (playerChoiceNumber) => {
    mangKetQua.push(playerChoiceNumber);
    let noiDungTable = '';
    for (let index = 0; index < mangKetQua.length; index++) {
        noiDungTable += `
            <tr>
                <td>Lần ${index + 1}: ${mangKetQua[index]}</td>
            </tr>
        `       
    }
    getSection('#addHistory').innerHTML = noiDungTable;
}
getSection('#btnChoiLai').onclick = () => {
    alert('Số máy chọn là ' + guessNumber);
    location.reload();
}

getSection('#btnNhapLai').disabled = true;
getSection('#btnChoiLai').disabled = true;

getSection('#btnNhapLai').onclick = () => getSection('#playerChoice').value = "";


