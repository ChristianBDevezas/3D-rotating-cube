const cubeBtn1 = document.getElementById("cube-btn-1");
const cubeBtn2 = document.getElementById("cube-btn-2");
const btnIcon1 = document.getElementById("btn-icon1");
const btnIcon2 = document.getElementById("btn-icon2");
const cubeAnimation = document.querySelector(".cube__boxes");
let isPlaying1 = true;
let isPlaying2 = false;

// Option1
function pauseCube1() {
    btnIcon1.classList.replace("fa-stop", "fa-play");
    isPlaying1 = false;
    cubeBtn1.classList.remove("active-btn");
    cubeAnimation.classList.add("stop-animation");
}

function playCube1() {
    btnIcon1.classList.replace("fa-play", "fa-stop");
    isPlaying1 = true;
    cubeBtn1.classList.add("active-btn");
    cubeAnimation.classList.remove("stop-animation");
    cubeAnimation.classList.remove("change-animation");
}

cubeBtn1.addEventListener("click", () => {
    pauseCube2();
    if(isPlaying1) pauseCube1();
    else playCube1();
});

// Option2
function pauseCube2() {
    btnIcon2.classList.replace("fa-stop", "fa-play");
    isPlaying2 = false;
    cubeBtn2.classList.remove("active-btn");
    cubeAnimation.classList.add("stop-animation");
}

function playCube2() {
    btnIcon2.classList.replace("fa-play", "fa-stop");
    isPlaying2 = true;
    cubeBtn2.classList.add("active-btn");
    cubeAnimation.classList.replace("stop-animation", "change-animation");
}

cubeBtn2.addEventListener("click", () => {
    pauseCube1();
    if(isPlaying2) pauseCube2();
    else playCube2();
});