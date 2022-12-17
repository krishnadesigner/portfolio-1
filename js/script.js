//typping
var typping = new Typed(".typping",{
    strings: ["", "Web Developer", "Youtuber", "Grafic Designer"],
    typeSpeed:100,
    Backspeed:60,
    loop:true
})

//window scroll
$(window).scroll(function(){
    $(".header-part").toggleClass('scrolled', $(this).scrollTop()>100)
  
});

//menu bar
$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
});


var searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    codeForm.classList.remove("active");
}

var codeForm = document.querySelector(".code-form");
document.querySelector("#code-btn").onclick = () =>{
    codeForm.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
}

var loginForm = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = () =>{
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    codeForm.classList.remove("active");
}

var navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () =>{
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    navbar.classList.toggle("active");
    codeForm.classList.remove("active");
}



window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    loginForm.classList.remove("active");
    codeForm.classList.remove("active");
}

$(".counter").counterUp({
    delay:10,
    time:2000
});


new WOW().init();


//loader
var loader = document.getElementById("loading");

window.addEventListener("load", function() {
    loader.style.display = "none";
})