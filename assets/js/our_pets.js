//-------------------------Плавный скролл для якорной ссылки-----------------------
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

//------------------------------Arrows---------------------------------------------

document.getElementById("button_double-arrow-left").setAttribute("disabled", "disabled");
document.getElementById("button_arrow_left").setAttribute("disabled","disabled");


var arrowRight = document.getElementById("button_arrow_right");
arrowRight.onclick = function (){
    var container_position_1 = document.getElementById("container-pets_wrapper-1");
    container_position_1.classList.add("arrow_right-active");

    var nav_buttons_left = document.getElementById("nav_buttons");
    nav_buttons_left.classList.remove("disable-buttons-left");
    nav_buttons_left.classList.add("disable-buttons-right");

    var slideNum = document.getElementById("slide_num");
    slideNum.innerHTML = "2";

    document.getElementById("button_double-arrow-left").removeAttribute("disabled");
    document.getElementById("button_arrow_left").removeAttribute("disabled");

    arrowRight.setAttribute("disabled", "disabled")
    document.getElementById("button_double-arrow-right").setAttribute("disabled","disabled");

    var petsContainer2 = document.getElementById("pets_container-2");
    petsContainer2.classList.add("container_wrapper2-active");
}

var arrowLeft = document.getElementById("button_arrow_left");
arrowLeft.onclick = function (){
    var container_position_0 = document.getElementById("container-pets_wrapper-1");
    container_position_0.classList.remove("arrow_right-active");

    var nav_buttons_left = document.getElementById("nav_buttons");
    nav_buttons_left.classList.add("disable-buttons-left");
    nav_buttons_left.classList.remove("disable-buttons-right");

    var slideNum = document.getElementById("slide_num");
    slideNum.innerHTML = "1";

    document.getElementById("button_arrow_right").removeAttribute("disabled");
    document.getElementById("button_double-arrow-right").removeAttribute("disabled");

    document.getElementById("button_double-arrow-left").setAttribute("disabled","disabled");
    document.getElementById("button_arrow_left").setAttribute("disabled", "disabled");

    var petsContainer2 = document.getElementById("pets_container-2");
    petsContainer2.classList.remove("container_wrapper2-active");
}

//-------------------------------Double Arrows---------------------------------------
var arrowDoubleRight = document.getElementById("button_double-arrow-right");
arrowDoubleRight.onclick = function (){
    var container_position_1 = document.getElementById("container-pets_wrapper-1");
    container_position_1.classList.add("arrow_right-active");

    var nav_buttons_left = document.getElementById("nav_buttons");
    nav_buttons_left.classList.remove("disable-buttons-left");
    nav_buttons_left.classList.add("disable-buttons-right");

    var slideNum = document.getElementById("slide_num");
    slideNum.innerHTML = "2";

    document.getElementById("button_double-arrow-left").removeAttribute("disabled");
    document.getElementById("button_arrow_left").removeAttribute("disabled");

    arrowRight.setAttribute("disabled", "disabled")
    document.getElementById("button_double-arrow-right").setAttribute("disabled","disabled");

    var petsContainer2 = document.getElementById("pets_container-2");
    petsContainer2.classList.add("container_wrapper2-active");
}
var doubleArrowsLeft = document.getElementById("button_double-arrow-left");
doubleArrowsLeft.onclick = function (){
    var container_position_0 = document.getElementById("container-pets_wrapper-1");
    container_position_0.classList.remove("arrow_right-active");

    var nav_buttons_left = document.getElementById("nav_buttons");
    nav_buttons_left.classList.add("disable-buttons-left");
    nav_buttons_left.classList.remove("disable-buttons-right");

    var slideNum = document.getElementById("slide_num");
    slideNum.innerHTML = "1";

    document.getElementById("button_arrow_right").removeAttribute("disabled");
    document.getElementById("button_double-arrow-right").removeAttribute("disabled");

    document.getElementById("button_double-arrow-left").setAttribute("disabled","disabled");
    document.getElementById("button_arrow_left").setAttribute("disabled", "disabled");

    var petsContainer2 = document.getElementById("pets_container-2");
    petsContainer2.classList.remove("container_wrapper2-active");
}

//--------------------------------Якорная сылка Contact Us-----------------------------------------

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

