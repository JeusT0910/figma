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
        menu.style.transition = '0.8s';
        overlay.style.visibility = 'hidden';
    })
    overlay.addEventListener('click', function(){
        menu.style.visibility = 'hidden';
        menu.style.transform = 'translateX(-100%)';
        menu.style.opacity = 0;
        menu.style.transition = '0.8s';
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
function hienthi(id, name){
    $(`#${name}`).toggle('slow');
    $(`.cong${id}`).toggleClass('dp-none');
    $(`.tru${id}`).toggleClass('dp-none');
}
$('.menu__link > a i').click(function(e){
    e.preventDefault();
})

// auto slideshow
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}
// click slideshow
var leftNode = document.getElementById('left');
var rightNode = document.getElementById('right');
var itemNode = document.getElementsByClassName('incredible__item');
console.log(itemNode)
var l = 0 ;
rightNode.onclick = () => {
    console.log('cong')
    l++;
    console.log(l)
    for(var i of itemNode) {
        if(l==0) {i.style.left ="0px";}
        if(l==1) {i.style.left ="-300px";}
        if(l==2) {i.style.left ="-600px";}
        if(l==3) {i.style.left ="-900px";}
        if(l==4) {i.style.left ="-1200px";}
        if(l>4) {l=4;}
    }
}
leftNode.onclick = () => {
    console.log('tru')
    console.log(l)
    l--;
    for(var i of itemNode){
        if(l==0) {i.style.left ="0px";}
        if(l==1) {i.style.left ="-300px";}
        if(l==2) {i.style.left ="-600px";}
        if(l==3) {i.style.left ="-900px";}
        if(l<0) {l=0;}
    }
}