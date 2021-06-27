// theme
const icons = [...document.querySelectorAll('.theme-icon i')];

icons.forEach(icon=> {
  if(icon){
    icon.addEventListener('click', ()=>{
document.body.classList.toggle('dark');


  if(document.body.classList.contains('dark')){
    icon.classList.remove('fas', 'fa-moon');
    icon.classList.add('far', 'fa-sun');
    icon.style.color = 'white';
  }else{
    icon.classList.add('fas', 'fa-moon');
    icon.classList.remove('far', 'fa-sun');
        icon.style.color = '#222'
  }
})
  }
})



// navigation
const hamburger=document.querySelector('.hamburger');
const menu =document.querySelector('.nav-list');

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('open');
})


// header -fixed on scoll

window.onscroll = function() {myFunction()};

var header = document.getElementById("mheader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// $(window).scroll(function(){
//   if($(this).scrollTop()>200){
//     $('.navigation').fadeIn('slow').css('display','flex');
//   }else{
//     $('.navigation').fadeOut('slow').css('display','none')
//   }
// })

// colors

const colors =[...document.querySelectorAll('.colors span')]
const widget =document.querySelector('.widget');
const control=document.querySelector('.control');
document.querySelector(':root').style.setProperty('--customColor','#4642ff')


widget.addEventListener('click',()=>{
    control.classList.toggle('open');
})



colors.forEach(color=>{
    color.addEventListener('click',()=>{
        const currentColor=color.dataset.id;
        document.querySelector(':root').style.setProperty('--customColor',currentColor)

    })
})

window.addEventListener('scroll',()=>{
    control.classList.remove('open')
})






