
/*==========Show Menu===========*/

const navMenu= document.getElementById('nav-menu'),
navToggle = document.getElementById ('nav_toggle'),
navClose = document.getElementById ('nav_close')

/*Menu Show*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add(show-menu)
    })
}

/*Menu hidden*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*== Remove Menu Mobile */
const navLink = document.querySelectorAll('.nav_link')
const linkAction =()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*Add Blur Header*/
const lurHeader =()=>{
    const header = document.getElementById('header')
    this.scrollY>=50? header.classList.add('blur-header')
         :header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)