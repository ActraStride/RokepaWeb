
window.onload = function(){
    let slideshow = document.getElementById("slideContainer")
    let slideshowImages = ["slideOne.jpg", "slideTwo.jpg", "slideThree.jpg", "slideFour.jpg"]
    let slidePosition = 0

    let intervalChange = setInterval(function(){
        if(slidePosition == slideshowImages.length - 1){
            slidePosition = 0
        }
        slidePosition += 1 
        slideshow.style.backgroundImage = "url(../../assets/img/" + slideshowImages[slidePosition] + ")"
    }, 3000)

    

}