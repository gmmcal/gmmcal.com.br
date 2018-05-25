window.$ = window.jQuery = import('jquery/dist/jquery');
import('bootstrap/dist/js/bootstrap');
import('waypoints/lib/jquery.waypoints');
import('isotope-layout/dist/isotope.pkgd');
import('ekko-lightbox/dist/ekko-lightbox');
import('jquery.easing/jquery.easing');
import('easy-pie-chart/dist/jquery.easypiechart');
import('./jquery.gridrotator');
import('./jquery.placeholder');

document.addEventListener('DOMContentLoaded', function () {
  const $ = window.jQuery;
  const $bg = $('.banner-img');

  $(window).resize(() => {
    // for banner height js
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    $('.banner').css({
      'width': windowWidth,
      'height': windowHeight - '60'
    });
    if ($(window).width() < $(window).height()) {
      $bg
        .removeClass()
        .addClass('bgheight');
    } else {
      $bg
        .removeClass()
        .addClass('bgwidth');
    }
  }).trigger('resize');

  let index = 0;
  $(document).on('scroll', () => {
    const top = $('.technical').height() - $(window).scrollTop();
    if (top < -300) {
      if (index === 0) {
        $('.chart').easyPieChart({
          barColor: '#ff675f',
          trackColor: '#e1e1e3',
          scaleColor: '#e1e1e3',
          scaleLength: 0,
          lineWidth: 15,
          size: 152,
          onStep (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
          }
        });
      }
      index++;
    }
  });

  $('#home, #aboutme, #technical, #experience, #education, #portfolio, #contact, #footer').waypoint({
    handler (direction) {
      $('.navbar-wrapper li').removeClass('active');
      const link = $(`a[href='#${$(this.element).attr('id')}'`);
      link.parent().addClass('active');
      /* eslint-disable no-undef */
      ga('send', 'pageview', {
        'page': $(link).attr('href'),
        'title': $(link).text()
      });
      /* eslint-enable no-undef */
    },
    offset: $('.navbar-wrapper').height()
  });

  $('.navbar.navbar-inverse.navbar-static-top a').click(() => {
    $('.navbar-collapse').addClass('hide-class');
  });

  $('.navbar.navbar-inverse.navbar-static-top a').click(() => {
    $('.navbar-collapse').addClass('collapse');
  });

  $('.navbar.navbar-inverse.navbar-static-top a').click(() => {
    $('.navbar-collapse').removeClass('in');
  });

  $('.navbar-toggle').click(() => {
    $('.navbar-collapse').removeClass('hide-class');
  });
});
