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
    for(var i=0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight-revealpoint){
            reveals[i].classList.add('act');
        }
        else{
            reveals[i].classList.remove('act');
        }
    }
}
