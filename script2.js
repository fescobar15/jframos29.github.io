/* eslint-disable no-undef */
"use strict";

fondo();

//Change background color (JQuery)
function fondo() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $("body").addClass("cambio");
    }
    if ($(this).scrollTop() < 350) {
      $("body").removeClass("cambio");
    }
  });
}