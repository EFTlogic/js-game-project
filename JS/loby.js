const greet = document.querySelector("h1")
const pic2 = document.querySelector(".pic2")

greet.textContent = `?הי ${localStorage.getItem("activeUser")}, מוכנה לשבור שיא חדש`

pic2.addEventListener("click", (e)=>{
    window.location.href = "../HTML/game.html"
})