/* eslint no-console:0 */
window.$ = window.jQuery = require('jquery/dist/jquery')
require('bootstrap/dist/js/bootstrap')
require('waypoints/lib/jquery.waypoints')
require('isotope-layout/dist/isotope.pkgd')
require('ekko-lightbox/dist/ekko-lightbox')
require('jquery.easing/jquery.easing')
require('easy-pie-chart/dist/jquery.easypiechart')
require('./jquery.gridrotator')
require('./jquery.placeholder')

document.addEventListener("DOMContentLoaded", function() {
  const $bg = $(".banner-img");

  $(window).resize(() => {
    // for banner height js
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    $(".banner").css({"width": windowWidth, "height": windowHeight -"60" });
    if ( $(window).width() < $(window).height() ) {
      $bg
        .removeClass()
        .addClass("bgheight");
    } else {
      $bg
        .removeClass()
        .addClass("bgwidth");
    }
  }).trigger("resize");

  let index=0;
  $(document).on("scroll", () => {
    const top = $(".technical").height()-$(window).scrollTop();
    if (top<-300) {
      if (index===0) {
        $(".chart").easyPieChart({
          barColor: "#ff675f",
          trackColor: "#e1e1e3",
          scaleColor: "#e1e1e3",
          scaleLength: 0,
          lineWidth: 15,
          size: 152,
          onStep(from, to, percent) {
            $(this.el).find(".percent").text(Math.round(percent));
          },
        });
      }
      index++;
    }
  });

  $("#home, #aboutme, #technical, #experience, #education, #portfolio, #contact, #footer").waypoint({
    handler(direction) {
      $(".navbar-wrapper li").removeClass("active");
      const link = $(`a[href='#${$(this.element).attr("id")}'`);
      link.parent().addClass("active");
      ga("send", "pageview", {
        "page": $(link).attr("href"),
        "title": $(link).text(),
      });
    },
    offset: $(".navbar-wrapper").height(),
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(() => {
    $( ".navbar-collapse" ).addClass( "hide-class" );
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(() => {
    $( ".navbar-collapse" ).addClass( "collapse" );
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(() => {
    $( ".navbar-collapse" ).removeClass( "in" );
  });

  $( ".navbar-toggle" ).click(() => {
    $( ".navbar-collapse" ).removeClass( "hide-class" );
  });
});
