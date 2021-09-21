let burger = document.getElementById('burger');

let list = document.querySelector('nav > ul');

burger.addEventListener('click',()=>{

    if(burger.classList.contains('close')){
        burger.classList.remove('close');
        list.classList.remove('close');
    } else{
        burger.classList.add('close');
        list.classList.add('close');
    }

})