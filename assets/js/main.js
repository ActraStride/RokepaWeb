
window.onload = function(){
    let slideshow = document.getElementById("slideContainer")
    let slideshowImages = ["slideOne.jpg", "slideTwo.jpg", "slideThree.jpg"]
    let slidePosition = 0

    let intervalChange = setInterval(function(){
        if(slidePosition == slideshowImages.length ){
            slidePosition = 0
        }
        slideshow.style.backgroundImage = "url(../../assets/img/" + slideshowImages[slidePosition] + ")"
        slidePosition += 1 
    }, 3000)

    window.addEventListener("scroll",function(){
        let header = document.getElementById("header")
        let scrollPosition = window.scrollY

        if(scrollPosition > 40){
            header.style.backgroundColor = "blue"
        }
        else{
            header.style.backgroundColor = "white"
        }
       
    })

}