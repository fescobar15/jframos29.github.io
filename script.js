"use strict";

function carga(){
  let jobs = ["Developer", "Comm Engineer", "Music Lover", "Writer"];
  let i=0;
  setInterval(function(){
      if(i==jobs.length){
        i=0;
      }
      document.getElementById("abilities").innerText=jobs[i];
      i++;
    }, 3000);
}

function cambiar(){
  let top=22;
  let i=1;
  setInterval(function(){
      if(i==top){
        i=1;
      }
      document.getElementById("family_photo").setAttribute("src","./images/"+i+".jpg");
      i++;
    }, 1500);
}

$(function() {
  $(window).scroll(function () {
     if ($(this).scrollTop() > 250) {
        $('body').addClass('cambio')
     }
     if ($(this).scrollTop() < 250) {
        $('body').removeClass('cambio')
     }
  });
});

$(function() {
  AOS.init();
});

