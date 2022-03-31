// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault() // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}


function onEntry2(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('start-animation-page1');
            let helpShelter = document.getElementById("aboutShelterHeader");
            helpShelter.classList.add('underline');
        }else {
            change.target.classList.remove('start-animation-page1');
            let helpShelter = document.getElementById("aboutShelterHeader");
            helpShelter.classList.remove('underline');
        }
    });
}

let options2 = {
    threshold: [0.5] };
let observer2 = new IntersectionObserver(onEntry2, options2);
let elements2 = document.querySelectorAll('.start_page-1-contaienr');

for (let elm of elements2) {
    observer2.observe(elm);
}


// --------- Ниже код отвечает за анимацию + underline в header --------
function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
            let helpShelter = document.getElementById("howhelp");
            helpShelter.classList.add('underline');
        }else {
            change.target.classList.remove('element-show');
            let helpShelter = document.getElementById("howhelp");
            helpShelter.classList.remove('underline');
        }
    });
}

let options = {
    threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.canHelp_container');

for (let elm of elements) {
    observer.observe(elm);
}

// ----------------------Contact Us----------------------------------------

function onEntry3(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            let helpShelter = document.getElementById("ContactUs");
            helpShelter.classList.add('underline');
        }else {
            let helpShelter = document.getElementById("ContactUs");
            helpShelter.classList.remove('underline');
        }
    });
}

let options3 = {
    threshold: [0.5] };
let observer3 = new IntersectionObserver(onEntry3, options3);
let elements3 = document.querySelectorAll('.footer');

for (let elm of elements3) {
    observer3.observe(elm);
}

//-------------------------------------------------------------------------
let disble_description = document.getElementById("pets-disble");
disble_description.onclick = function (){
    var petsActivated = document.getElementById("pets-activate");
    petsActivated.classList.toggle("pets-disabled");
    console.log("disable")
}

let katrineButton = document.getElementById("activate-description-Katrine");
katrineButton.onclick = function (){
    var petsActivated = document.getElementById("pets-activate");
    petsActivated.classList.toggle("pets-disabled");
    console.log("activate")
}

let description_Jenifer = document.getElementById("activate-description-Jenifer");
description_Jenifer.onclick = function (){
    var petsActivated = document.getElementById("pets-activate");
    petsActivated.classList.toggle("pets-disabled");
    console.log("activate")
}

let description_Woody = document.getElementById("activate-description-Woody");
description_Woody.onclick = function (){
    var petsActivated = document.getElementById("pets-activate");
    petsActivated.classList.toggle("pets-disabled");
    console.log("activate")
}
let description_Katrine2 = document.getElementById("activate-description-Katrine2");
description_Katrine2.onclick = function (){
    var petsActivated = document.getElementById("pets-activate");
    petsActivated.classList.toggle("pets-disabled");
    console.log("activate")
}