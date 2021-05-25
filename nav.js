const navbar_links = document.querySelector(".navbar_links").querySelectorAll("a");
console.log(navbar_links)
navbar_links.forEach(element=>{
    element.addEventListener("click",function(){
        navbar_links.forEach(link=>link.classList.remove("active"))
        this.classList.add("active")
        document.getElementById("check").checked = false;
    })
    //this.classList.add("active")
})
var widthOfScreen = window.innerWidth;
var con = document.querySelector('.cont');
var con1 = document.querySelector('.cont1');
con.classList.toggle("reveal", widthOfScreen > 858);
con1.classList.toggle("reveal", widthOfScreen > 858);
window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(let val of reveals){
        var windowheight = window.innerHeight;
        var revealtop = val.getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight-revealpoint){
            val.classList.add('act');
        }
        else{
            val.classList.remove('act');
        }
    }
    var topHeading = document.querySelector('.h1');
    topHeading.classList.toggle("topHead", window.scrollY > 150);
    var topHeading2 = document.querySelector('.middle');
    var windowheight2 = window.innerHeight;
    var revealtop2 = topHeading2.getBoundingClientRect().top;
    var revealpoint2 = 150;
    if(revealtop2 < windowheight2-revealpoint2){
        topHeading2.classList.add('gottam');
    }
    else{
        topHeading2.classList.remove('gottam');
    }
    var on1 = document.querySelector('.js1');
    var on2 = document.querySelector('.tx');
    var on3 = document.querySelector('.box');
    var on4 = on1.getBoundingClientRect().top;
    
    if(on4 < windowheight2){
        on3.classList.add('gottam1');
        on2.classList.add('gottam2');
    }
    else{
        on3.classList.remove('gottam1');
        on2.classList.remove('gottam2');
    }
    var on11 = document.querySelector('.js2');
    var on12 = document.querySelector('.tx1');
    var on13 = document.querySelector('.box1');
    var on14 = on11.getBoundingClientRect().top;
    
    if(on14 < windowheight2){
        on13.classList.add('pipe');
        on12.classList.add('pipe2');
    }
    else{
        on13.classList.remove('pipe');
        on12.classList.remove('pipe2');
    }
}
