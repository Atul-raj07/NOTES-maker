const closebtn = document.querySelector('#close')
const overlay = document.querySelector('#overlay')
const makebtn = document.querySelector(".makebtn")
makebtn.addEventListener("click", function(){
    overlay.style.display = "inline";
})
closebtn.addEventListener( "click" ,function () {
    overlay.style.display= "none";
})
let title = document.querySelector(".title")
let text = document.querySelector(".text")
let savebtn = document.querySelector(".savebtn")
if( localStorage.getItem("Task") === null){
localStorage.setItem("Task",JSON.stringify([]))
}

savebtn.addEventListener("click", function () {
let existingData = JSON.parse(localStorage.getItem("Task"));

    let newData = {
        head: title.value,
        desc: text.value
    };
    existingData.push(newData);

    localStorage.setItem("Task", JSON.stringify(existingData));
    title.value= ""
    text.value= ""
    overlay.style.display = "none";
    showdata()
});
function showdata() {
    const savedData = JSON.parse(localStorage.getItem("Task"));

    savedData.forEach(function(elem) {
        console.log(elem);
    });
}
