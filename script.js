const text = [
"Full Stack Developer",
"PHP Developer",
"JavaScript Developer",
"Cloud Learner",
"Power BI Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){

count = 0;

}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,120);

}

})();

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML="☀️";

}else{

themeBtn.innerHTML="🌙";

}

};
AOS.init({

duration:1200,

once:true

});

particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#00e5ff"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3},

line_linked:{

enable:true,

distance:150,

color:"#00e5ff",

opacity:0.4,

width:1

},

move:{

enable:true,

speed:3

}

},

interactivity:{

events:{

onhover:{

enable:true,

mode:"repulse"

},

onclick:{

enable:true,

mode:"push"

}

},

modes:{

repulse:{distance:120},

push:{particles_nb:4}

}

},

retina_detect:true

});
window.addEventListener("load",()=>{

document.querySelectorAll(".progress-bar").forEach(bar=>{

bar.style.width=bar.classList.contains("html")?"95%":
bar.classList.contains("css")?"90%":
bar.classList.contains("js")?"85%":
bar.classList.contains("php")?"88%":"85%";

});

});

// Counter Animation

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = Math.ceil(target / 100);

if(current < target){

counter.innerText = current + increment;

setTimeout(update,25);

}else{

counter.innerText = target;

}

};

update();

});

/* ===========================
Preloader
=========================== */

window.addEventListener("load",()=>{

document.getElementById("preloader").style.display="none";

});

/* ===========================
Scroll Button
=========================== */

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ===========================
Custom Cursor
=========================== */

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});