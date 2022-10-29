var btn = document.querySelector('.search_button');
//tại sao không áp click được????
btn.addEventListener('click', function(){
    this.parentElement.classList.toggle('open'); //từ khóa This: đại diện cho element mà ta đang nhắc tới. ở đây this = btn
})