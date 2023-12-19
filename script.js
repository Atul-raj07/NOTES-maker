const closebtn = document.querySelector('#close')
const overlay = document.querySelector('#overlay')
closebtn.addEventListener( "click" ,function () {
    overlay.style.opacity= 0;
})