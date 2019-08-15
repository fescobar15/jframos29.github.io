function carga(){
  var jobs = ["Developer", "Communications Engineer", "Music Lover", "Writer", ""];
  var i=0;
  setInterval(function(){
      if(i==jobs.length){
        i=0;
      }
      document.getElementById("abilities").innerText=jobs[i];
      i++;
    }, 3000);
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
