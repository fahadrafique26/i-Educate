burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.nav-list')
navList = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-class-resp')


})
 