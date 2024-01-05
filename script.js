const closebtn = document.querySelector("#close");
const overlay = document.querySelector("#overlay");
const makebtn = document.querySelector(".makebtn");
makebtn.addEventListener("click", function () {
    overlay.style.display = "inline";
});
closebtn.addEventListener("click", function () {
    overlay.style.display = "none";
});
let title = document.querySelector(".title");
let text = document.querySelector(".text");
let savebtn = document.querySelector(".savebtn");
let nofiles = document.querySelector(".nofiles");
if (localStorage.getItem("task") === null) {
    localStorage.setItem("task", JSON.stringify([]));
}

savebtn.addEventListener("click", function () {
    let existingData = JSON.parse(localStorage.getItem("task"));

    let currentDate = new Date();
    let newData = {
        head: title.value,
        desc: text.value,
        dayOfMonth: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
    };
    if (title.value.trim() !== "") {
        existingData.push(newData);
        localStorage.setItem("task", JSON.stringify(existingData));
        title.value = "";
        text.value = "";
        overlay.style.display = "none";
        showdata();
    } else {
        alert("Please provide a heading.");
    }
});
let cards = document.querySelector(".cards");
function showdata() {
    let savedData = JSON.parse(localStorage.getItem("task"));
    var clutter = "";

    savedData.forEach(function (elem) {
    clutter += `<div class="card h-60 w-52 bg-zinc-600 p-4 rounded-md text-zinc-100 flex flex-col justify-between ">
    <div>
        <h1 class="text-2xl capitalize leading-6 font-bold overflow-hidden whitespace-wrap">${elem.head}</h1>
        <p class="leading-snug mt-3 overflow-hidden whitespace-wrap ">${elem.desc}</p></div>
        <div class = "flex items-center justify-between text-xs font-normal" ><p class="leading-snug">${elem.hours}:${elem.minutes}:${elem.seconds}</p>
        <p class="leading-snug  ">${elem.dayOfMonth}/${elem.month}/${elem.year}</p></div>
    </div>`;
    });
    cards.innerHTML = clutter;
    if (savedData.length !== 0) {
        nofiles.style.display = "none";
    }
}

showdata();
