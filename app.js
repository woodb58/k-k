const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    nav.classList.toggle('active')
})

document.querySelectorAll(".nav-link").forEach(e => e.addEventListener('click', ()=> {
    hamburger.classList.remove('active')
    nav.classList.remove('active')
}))