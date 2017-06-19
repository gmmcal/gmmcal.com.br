// = require jquery
// = require rails-ujs
// = require turbolinks/dist/turbolinks
// = require bootstrap/dist/js/bootstrap
// = require jquery.gridrotator
// = require jquery.placeholder
// = require waypoints/lib/jquery.waypoints
// = require isotope-layout/dist/isotope.pkgd
// = require ekko-lightbox/dist/ekko-lightbox
// = require jquery.easing/jquery.easing
// = require easy-pie-chart/dist/jquery.easypiechart

jQuery(function($) {
  var $bg = $(".bannerImg");

  $(window).resize(function() {
    // for banner height js
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
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

  var $container = $(".portfolioContainer");
  $container.isotope({
    filter: "*",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false,
    },
  });

  $(".portfolioFilter a").click(function() {
    $(".portfolioFilter .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
     });
     return false;
  });

  // run rlightbox
  $(document).on("click", ".lb", function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  var index=0;
  $(document).on("scroll", function() {
    var top = $(".technical").height()-$(window).scrollTop();
    if (top<-300) {
      if (index==0) {
        $(".chart").easyPieChart({
          barColor: "#ff675f",
          trackColor: "#e1e1e3",
          scaleColor: "#e1e1e3",
          scaleLength: 0,
          lineWidth: 15,
          size: 152,
          onStep: function(from, to) {
            $(this.el).find(".percent").text(Math.round(to));
          },
        });
      }
      index++;
    }
  });

  $(".navbar-wrapper").waypoint({
    handler: function(direction) {
      if (direction === "down") {
        $(".navbar-wrapper").addClass("isStuck");
      } else {
        $(".navbar-wrapper").removeClass("isStuck");
      }
    },
    offset: 0,
  });

  $("#home, #aboutme, #technical, #experience, #education, #portfolio, #contact, #footer").waypoint({
    handler: function(direction) {
      $(".navbar-wrapper li").removeClass("active");
      var link = $("a[href='#"+ $(this.element).attr("id") +"'");
      link.parent().addClass("active");
      ga("send", "pageview", {
        "page": $(link).attr("href"),
        "title": $(link).text(),
      });
    },
    offset: $(".navbar-wrapper").height(),
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    $( ".navbar-collapse" ).addClass( "hideClass" );
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    $( ".navbar-collapse" ).addClass( "collapse" );
  });

  $( ".navbar.navbar-inverse.navbar-static-top a" ).click(function() {
    $( ".navbar-collapse" ).removeClass( "in" );
  });

  $( ".navbar-toggle" ).click(function() {
    $( ".navbar-collapse" ).removeClass( "hideClass" );
  });
});
