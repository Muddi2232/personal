
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