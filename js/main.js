// typd script
(function ($){
    "use strict"
  
  
    ///typed script
    if($('.typed-text-outline').length == 1){
      var typed_strings =$('.typed-text').text();
      var typed =new Typed('.typed-text-outline',{
      strings:typed_strings.split('|'),
      typeSpeed:100,
      backSpeed:20,
      smartBackspace:false,
      loop:true,
      });



      // portfolio section


      $(document).ready(function(){
        $(".button").click(function(){
        var name = $(this).attr('data-filter');
        if(name == "all"){
        $(".shot-thumbnail").show('2000');
        }else{
        $(".shot-thumbnail").not("."+name).hide('2000');
        $(".shot-thumbnail").filter("."+name).show('2000');
        }
        })
        $(".navigate a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        })
        })

// testimonial section

//back to top

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
  } else {
      $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function () {
  $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  return false;
});


}
  })(jQuery);


  
// date and time

function display_ct() {
  var x = new Date()
  var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
  hours = x.getHours( ) % 12;
  hours = hours ? hours : 12;
  var x1= + x.getDate() + "/" + (x.getMonth()+1) + "/"+ x.getFullYear(); 
  x1 = x1 + " - " +  hours + ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
  document.getElementById('ct').innerHTML = x1;
  display_c();
   }
   function display_c(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct()',refresh)
  }
  display_c()
  
// contact form

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// footer time
var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById("currentDate").value = date;

// right click disable link
window.oncontextmenu = function () {
  return false;
}
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
    return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
    return false;
  }
});

document.addEventListener("contextmenu",event=>event.preventDefault());


// download link:https://drive.google.com/uc?id=1U7DPlnGe6udxF0VhTbalmC0nGPQqD5h7&export=download

//sidebar form
$(document).ready(function(){
$(".sidebar-form .call-action").click(function(){
$(this).parents(".sidebar-form").toggleClass("show");
});
});
