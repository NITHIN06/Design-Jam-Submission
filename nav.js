const navbar_links = document.querySelector(".navbar_links").querySelectorAll("a");

console.log(navbar_links)
navbar_links.forEach(element=>{
    element.addEventListener("click",function(){
        navbar_links.forEach(link=>link.classList.remove("active"))
        this.classList.add("active")
    })
    //this.classList.add("active")
})
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
}