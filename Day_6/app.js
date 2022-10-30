var alert_box = document.querySelector('.alert');
var box = document.querySelector('.box');
var number_value = document.querySelector('.number-value');
var ekey = document.querySelector('.detail .item-detail:first-child p:last-child');
var eLocation = document.querySelector('.detail .item-detail:nth-child(2) p:last-child');
var eWhich = document.querySelector('.detail .item-detail:nth-child(3) p:last-child');
var eCode = document.querySelector('.detail .item-detail:last-child p:last-child');

document.addEventListener('keydown', function(e){
    ekey.innerText = e.key; //Tên của phím nhập vào
    eLocation.innerText = e.location; // vị trí của 
    eWhich.innerText = e.which; // trả về mã ký tự Unicode trong sự kiện keyDowm
    eCode.innerText = e.code; //trả về tên của phím???? này là tên kiểu gì vậy?
    number_value.innerText = e.which;
    alert_box.classList.add('hide');
    box.classList.remove('hide');
})