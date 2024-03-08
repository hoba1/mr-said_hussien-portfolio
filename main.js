let bars = document.querySelector(".bars");
let closebtn = document.querySelector(".close");
let list = document.querySelector(".list");
bars.onclick = function(){
    list.style.display = "block";
    bars.style.display = "none";
    closebtn.style.display = "block";
};
closebtn.onclick = function(){
    list.style.display = "none";
    bars.style.display = "block";
    closebtn.style.display = "none";
};

let activeli = document.querySelectorAll(".list li");
let homesection = document.querySelector(".home-section");
let aboutsection = document.querySelector(".about-section");
let about = document.querySelector(".about");
let worksection = document.querySelector(".work-section");
let work = document.querySelector(".my-work");
let teamsection = document.querySelector(".team-section");
let team = document.querySelector(".my-team");
let contactsection = document.querySelector(".contact-section");
let contact = document.querySelector(".contact");
window.onscroll = function(){
    if(window.scrollY <= 700){
        activeli.forEach((ele)=>{
            ele.classList.remove("active");
        });
        homesection.classList.add("active")
    };
    if(window.scrollY >= about.offsetTop){
        activeli.forEach((ele)=>{
            ele.classList.remove("active");
        });
        aboutsection.classList.add("active")
    };
    if(window.scrollY >= work.offsetTop){
        activeli.forEach((ele)=>{
            ele.classList.remove("active");
        });
        worksection.classList.add("active")
    };
    if(window.scrollY >= team.offsetTop){
        activeli.forEach((ele)=>{
            ele.classList.remove("active");
        });
        teamsection.classList.add("active")
    };
    if(window.scrollY >= contact.offsetTop){
        activeli.forEach((ele)=>{
            ele.classList.remove("active");
        });
        contactsection.classList.add("active")
    };
};