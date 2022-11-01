var input = document.querySelector('.content input');
var content = document.querySelector('.content');

tags = [];

//hiển thị content
function render(){
    //reset lại content sau mỗi lần gọi hàm
    content.innerHTML = '';

    //Hiển thị từng phần tử trong mảng tags

    //Cách 1: dùng loop for thông thường
    // for(var i = 0; i < tags.length; i++) {
    //     var tag = tags[i];
    //     content.innerHTML += `<div class="item">
    //                                 ${tag}
    //                             <i class="fa-solid fa-xmark"></i>
    //                         </div>`
    // };

    //Cách 2: dùng loop forEach
    tags.forEach(function(i, j){ //i: giá trị; j: chỉ số
        var tag = tags[j];
        content.innerHTML += `<div class="item">
                                    ${tag}
                                <i class="fa-solid fa-xmark" onclick = "removeElement()"></i>
                            </div>`
    });

    //Sau khi hiển thị hết mảng tags --> ô input vẫn được hiển thị ra và có nháy chuột
    content.appendChild(input);
    input.focus();
}

render();//phải gọi hàm ra thì nó mới chạy

//thêm phần tử cho mảng tags sau mỗi lần input text và ấn enter

input.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        tags.push(input.value.trim());
        input.value = '';
        render();
    }
})

//khi click vào iconClose --> phần tử sẽ bị xóa
//Câu hỏi: có cách để dùng thuộc tính addListener click vào iconclose để xóa phần tử không? 
function removeElement(index){
    tags.splice(index, 1); //ủa tại sao nó lại lấy được cái chỉ số của phần tử đấy? :< :< 
    render();
}

//Xóa tất cả
var btn = document.querySelector('.box button');
btn.addEventListener('click', function(){
    tags = [];
    render();
})