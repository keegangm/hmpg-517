//Colors array
let colors = ['#FF543E','#F95738', '#FF5714','#BF4342','#F28482','#FE7F2D','#CE7B91','#BF6900','#5F0A87','#29339B','#446DF6','#9999FF','#BC96E6','#2589BD','#54457F','#C1EDCC','#09814A','#FDE74C','#668F80','#F0A202','#FF9F1C','#6CC551'];

//Get boxes
const boxes = document.getElementsByClassName("color-box");

//indiv boxes by column

const box1 = document.getElementById("col1");
const box2 = document.getElementById("col2");
const box3 = document.getElementById("col3");
const box4 = document.getElementById("col4");
const box5 = document.getElementById("col5");

//color changer
document.addEventListener("click", function(){
    //randomizer
    var randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor4 = colors[Math.floor(Math.random() * colors.length)];
    var randomColor5 = colors[Math.floor(Math.random() * colors.length)];

    //test script
    //console.log(randomColor1)
    
    /* def variable for class -- doesn't work to change bg color at class level...
    const colorBox = document.getElementsByClassName("color-box")
    
    colorBox.style.background = randomColor1; */

    //container style
    box1.style.background = randomColor1;
    box2.style.background = randomColor2;
    box3.style.background = randomColor3;
    box4.style.background = randomColor4;
    box5.style.background = randomColor5;
    
})

/*
//onclick = too much for now lol

//defining "logo"
//const logo = document.getElementById("km-logo");

//adding logo event listener
document.getElementById("km-logo").addEventListener("mousedown", logoDown);
document.getElementById("km-logo").addEventListener("mouseup", logoUp);
document.getElementById("km-logo").addEventListener("mouseover", logoMouseOver);
document.getElementById("km-logo").addEventListener("mouseout", logoMouseOut);

//defining logoClick function
function logoDown() {
    document.getElementById("km-logo").style.color = "green";
}

function logoUp() {
    document.getElementById("km-logo").style.color = "inherit";
}

function logoMouseOver() {
    document.getElementById("km-logo").style.color = "pink";
    document.getElementById("km-logo").style.fontSize = "105%";
}

function logoMouseOut() {
    document.getElementById("km-logo").style.color = "inherit";
    document.getElementById("km-logo").style.fontSize = "unset";
} */