var bar = document.querySelector('.header__mobile');
    var menu = document.querySelector('.menu');
    var closeMenu = document.querySelector('.menu__close');
    var overlay = document.querySelector('.overlay');
    bar.addEventListener('click', function(){
        menu.style.visibility = 'visible';
        menu.style.transform = 'translateX(0%)';
        menu.style.opacity = 1;
        overlay.style.visibility = 'visible';
    })
    closeMenu.addEventListener('click', function(){
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateX(-100%)';
        menu.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    })
    overlay.addEventListener('click', function(){
        menu.style.transform = 'translateX(-100%)';
        menu.style.opacity = 0;
        menu.style.visibility = 'hidden';
        overlay.style.visibility = 'hidden';
})

// 
var imgFix = document.querySelector('.fixed-img');
setTimeout(function(){
    imgFix.classList.add('dp-block');
}, 2000)

var closee = document.querySelector('.close');
closee.addEventListener('click', function(){
    imgFix.classList.remove('dp-block');
})