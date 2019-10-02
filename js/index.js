// Your code goes here

const nav = document.querySelectorAll("a").forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.fontSize = "200px";
        el.style.color = "blue";
    });
    el.addEventListener("mouseleave", () => {
        el.style.fontSize = "30px";
        el.style.color = "red";
    });
});


const header = document.querySelector('a');

header.addEventListener("click", (event) =>{
    console.log(header);
    event.preventDefault();

})



const logo = document.querySelector(".logo-heading");

logo.addEventListener('click', () => {
    logo.style.transform = "scale(3.0)";
})

window.addEventListener("keydown", checkEnter, false);
//let NewHelp = prompt("Please Type Help");
let help =  ""
let activated = false
const scream = new Audio("Hl2_Rebel-Ragdoll485-573931361.wav");
function checkEnter(key) {
    if (key.keyCode == "13") {
        activated = true;
        alert("TYPE HELP NOW!!!!!!");
    }
    if (activated == true && key.keyCode == "72"){
    help = help + "h";
    console.log(help);
    alert("keep going!!!");
    }
    if (help == "h" && key.keyCode == "69"){
        help = help + "e";
    }
    if (help == "he" && key.keyCode == "76"){
        help = help + "l";
        console.log(help);
    }
    if (help == "hel" && key.keyCode == "80"){
        help = help + "p";
        console.log(help);
    }
    if (help == "help") {
        document.querySelectorAll("img").forEach(el => {
                el.src =  `photo-1509557551952-401ede96d8ed.jpg`;
                scream.play();
            });

    } 
}

window.addEventListener('load', () => {
    const driveBy = new Audio("BMW+DRIVEBY.mp3");
    driveBy.play();
})


function get_rand_color(){
    let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    let color2 = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    while(color.length < 6) {
        color = "0" + color;
    }
    document.body.style.color = "#" + color2;
    document.body.style.backgroundColor = "#" + color;
}
window.addEventListener('scroll', () => {
    get_rand_color();
})


const topBus = document.querySelector("img");

topBus.addEventListener("mouseover", () => {
    const stopping = new Audio("TIRE+SKID.mp3");
    const driveBy = new Audio("BMW+DRIVEBY.mp3");
console.log(topBus);
    function driveForward() {
        topBus.style.marginLeft = "2000px";
        topBus.style.transition = "all 7s";
        driveBy.play();
    }
    function driveBack() {
        setTimeout(function(){ topBus.style.marginLeft = "0px";
         topBus.style.transition = "all 3s"; }, 6000);
     }
     function stop(){
         setTimeout(function() {
             stopping.play();}, 8000);
         }

    driveForward();
    driveBack();
    stop();
})
