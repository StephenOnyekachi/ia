

// let menu = document.querySelector(".explore")
// let drop = document.querySelector(".drop")
// let menu1 = document.querySelector(".menu")
// let bar = document.querySelector(".bar")


// for displaying and hidding mune bar on media screen
let bars = document.querySelector('.bars')
let menus = document.querySelector('.menus')

bars.style.display = 'block';
bars.addEventListener("click", e =>{
    console.log("me")

    if(menus.style.display === "none"){
        menus.style.display = "block";
        console.log("me")
    }
    else{
        menus.style.display = "none";
    }
})


// for the typing
const texts = ['Delivers on time', 'Reliable','100% Security']
let count = 0;
let indext = 0; 
let currentText = ''; 
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++ indext);
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count ++;
        indext = 0;
    }
    setTimeout(type, 400);
}());


// for background changing
var sliding = document.querySelector('.bgimg');
var images = new Array('Images/009.jpg', 'Images/010.jpg', 'Images/008.webp', 'Images/007.jpg');
var len = images.length;
var i = 0;

function slider(){
    if(i > len - 1){
        i = 0;
    }
    sliding.src = images[i];
    i ++;
    setTimeout('slider()', 3000);
}














