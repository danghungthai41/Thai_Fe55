class Validation {
    kiemTraGiaTri = (value, name, selectorError, minValue, maxValue) => {
        if (Number(value) < minValue || Number(value) > maxValue) {
            // document.querySelector(selectorError).innerHTML = '*' + name + ' phải trong khoản từ ' + minValue + ' đến ' + maxValue + '*';
            // document.querySelector(selectorError).className = 'text-danger';
            
            alert('*' + name + ' phải trong khoản từ ' + minValue + ' đến ' + maxValue + '*');
            return false;
        }
        document.querySelector(selectorError).innerHTML = "";
        return true;
    }
    kiemTraRong = (value, name, selectorError) => {
        if(value.trim() === ''){
            document.querySelector(selectorError).innerHTML = '*' + name +   ' không được bỏ trống *';
            document.querySelector(selectorError).className = 'text-danger';            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    kiemTraLaSo = (value, name, selectorError) => {
        const regexNumber = /^[0-9.]+$/;
        if(!regexNumber.test(value)){
            document.querySelector(selectorError).innerHTML = '*' + name + ' phải là số' + '*';
            document.querySelector(selectorError).className = 'text-danger';
            return false;
        }
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
   

}

