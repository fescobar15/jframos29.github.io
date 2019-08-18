"use strict";


//Change abilities in welcome div
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

//Change family pictures

function cambiar(){
  let top=24;
  let i=1;
  setInterval(function(){
      if(i==top){
        i=1;
      }
      document.getElementById('family_photo').setAttribute('src','./images/'+i+'.jpg');
      i++;
    }, 1500);
}

//Change background color
function fondo() {
  $(window).scroll(function () {
     if ($(this).scrollTop() > 350) {
        $('body').addClass('cambio')
     }
     if ($(this).scrollTop() < 350) {
        $('body').removeClass('cambio')
     }
  });
}

//Enable AOS

$(function() {
  AOS.init();
});

