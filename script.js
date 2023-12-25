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
let nofiles = document.querySelector(".nofiles")
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
    nofiles.style.display = "none"
});
let cards = document.querySelector(".cards")
var clutter = ""
function showdata() {
    const savedData = JSON.parse(localStorage.getItem("Task"));
    
    savedData.forEach(function(elem) {
        clutter +=`<div class="card h-60 w-52 bg-zinc-600 p-3 rounded-md text-zinc-100">
<h1 class="text-3xl capitalize font-bold">${elem.head}</h1>
<p class="leading-snug mt-3">${elem.desc}</p>
</div>` 
    });
    cards.innerHTML = clutter
}
