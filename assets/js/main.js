
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
        let logoContainer = document.getElementById("logoContainer")
        let logo = document.getElementById("logo")
        let scrollPosition = window.scrollY
    

        if(scrollPosition > 80){
            //propiedades del heade
            header.style.height = "70px"
            header.style.position = "fixed"
            header.style.top = "0";  
            header.style.width = "100%";  
            header.style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0.96)"
            //propiedades del logo container
            logoContainer.style.height = "70px"
            logoContainer.style.height = "10%"
            //propiedades del logo
            logo.style.height = "55px"
            logo.style.width = "74px"
            logo.style.backgroundImage = "url(../../assets/img/logo1.png)"
            logo.style.backgroundSize = "contain"
        }
        else{
            //propiedades del headedr
            header.style.position = "static"
            header.style.backgroundColor = "white"
            header.style.height = "100px"
            header.style.boxShadow = "7px 9px 22px -10px rgba(0,0,0,0.96)"
            //propiedades del loco contaianer
            logoContainer.style.height = "100px"
            logoContainer.style.width = "15%"


            //propiedades del logo 
            logo.style.height = "85px"
            logo.style.width = "115px"
            logo.style.backgroundImage = "url(../../assets/img/logo.png)"

            
        }
       
    })

}