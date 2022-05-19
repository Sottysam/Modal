const modal = document.querySelector(".modal")
const modal2 = document.querySelector(".modal2")
const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")

openBtn.addEventListener("click", function(){
    modal.style.visibility = "hidden"
    modal2.style.visibility = "visible"
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('./banner.png')"
})

closeBtn.addEventListener("click", function(){
    modal.style.visibility = "visible"
    modal2.style.visibility = "hidden"
    document.body.style.backgroundImage = "url('./banner.png')"
})