const navbar_links = document.querySelector(".navbar_links").querySelectorAll("a");

console.log(navbar_links)
navbar_links.forEach(element=>{
    element.addEventListener("click",function(){
        navbar_links.forEach(link=>link.classList.remove("active"))
        this.classList.add("active")
    })
    //this.classList.add("active")
})
