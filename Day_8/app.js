var username = document.getElementById('name');
var email = document.getElementById('email');
var passWord = document.getElementById('pw');
var confirmPassword = document.getElementById('rpw');
var form = document.querySelector('form');

//hàm hiển thị error khi có lỗi
function showError(input, message){
    let parent = input.parentElement;
    let small = input.parentElement.querySelector('small');
    parent.classList.add('error')
    small.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = input.parentElement.querySelector('small');
    parent.classList.remove('error')
    small.innerText = '';
}

//kiểm tra xem all input có trông không?
function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value){
            isEmptyError = true;
            showError(input, 'Khong duoc de trong');
            return 
        }else{
            showSuccess(input);
        }
    });
    return isEmptyError;
}

//Kiểm tra form email có hợp lệ không -> không
function checkEmailError(input){
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //redex: biểu thức chính quy --> regexEmail: biểu thức chính quy dạng email
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    //phương thức .test(): kiểm tra xem chuỗi dữ liệu vào có tương thích với biểu thức chính quy(chuỗi mấu_regex) hay không --> trả về kiểu dữ liệu boolean
    if(regexEmail.test(input.value)){
        showSuccess(input);
    } 
    else {
        showError(input, 'Email Invalid')
    }
    return isEmailError;
}

//kiểm tra độ dài của tên
function checkLengthError(input, min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        showError(input, `Phai co it nhat ${min} ky tu`)
        return true
    }

    if(input.value.length > max){
        showError(input, `Khong duoc qua ${max} ky tu`)
        return true
    }

    // showSuccess(input)
    return false
}

//Kiểm tra cornfirm password có giống với pasword hay không
function chekMatchPasswordError(passwordInput, cfPasswordInput){
    if(passwordInput.value !== cfPasswordInput.value){
        showError(cfPasswordInput, 'Mat khau khong trung khop')
        return true
    }
    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //prevent: ngăn ngừa, ngăn cản, cản trở -> preventDefault(): ngăn không cho giá trị mặc định của thẻ được kích hoạt
    //ví dụ: ở đây, khi click vào submit --> ngăn không cho nó gửi biểu mẫu đi
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isPasswordLengthError = checkLengthError(passWord, 6 , 10)
    let isEmptyError = checkEmptyError([username, email, passWord, confirmPassword])
    let isEmailError = checkEmailError(email);
    // console.log(isPasswordLengthError)  TẠI SAO KHÔNG CHẠY ĐƯỢC HÀM NÀY?
    //CÂU HỎI: tại sao các hàm tạo ra lại là các hàm trả về để đến khi dùng đến các hàm đó ở đây, ta phải tạo ra một biến để gán với giá trị trả về của các hàm đó?
         //Trong khi trong mỗi hàm đều có các hàm hiển thị như là showError hoặc showSucess thì tại sao không dùng hàm không có giá trị trả về?
    let isMatchError = chekMatchPasswordError(passWord, confirmPassword)

})



