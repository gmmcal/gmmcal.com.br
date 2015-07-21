//= require jquery2
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require jquery.gridrotator
//= require jquery.placeholder
//= require waypoint
//= require jquery.isotope
//= require jquery.ui.widget.min
//= require jquery.ui.rlightbox
//= require jquery.easing.min
//= require jquery.easypiechart
//= require jquery.contact

(function($) {
	"use strict";

	(function($) {
		$(function() {
			jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
			jQuery('#loopedSlider').loopedSlider({
				autoHeight: 500
			});
		});
	});
}(jQuery));

jQuery(function($) {
	$(document).ready( function() {
		var theWindow = $(window), $bg = $(".bannerImg");

		theWindow.resize(function(){
			// for banner height js
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			$('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });
			if ( theWindow.width() < theWindow.height() ) {
				$bg
					.removeClass()
					.addClass('bgheight');
			} else {
				$bg
					.removeClass()
					.addClass('bgwidth');
			}
		}).trigger("resize");

		var $container = $('.portfolioContainer');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});

		$('.portfolioFilter a').click(function(){
			$('.portfolioFilter .current').removeClass('current');
			$(this).addClass('current');

			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		});

		var $chosenSheet, $stylesheets = $( "a[id^=theme-]" );

		// run rlightbox
		$( ".lb" ).rlightbox();
		$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
		var index=0;
		$(document).scroll(function(){
			var top = $('.technical').height()-$(window).scrollTop();
			if(top<-300){
				if(index==0){

					$('.chart').easyPieChart({
						easing: 'easeOutBounce',
						onStep: function(from, to, percent) {
							$(this.el).find('.percent').text(Math.round(percent));
						}
					});

				}
				index++;
			}
		})

		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top -60
					}, 1000);
					return false;
				}
			}
		});

		var chart = window.chart = $('.chart').data('easyPieChart');
		$('.js_update').on('click', function() {
			chart.update(Math.random()*100);
		});

		$('.navbar-wrapper').waypoint({
			handler: function(direction) {
				if(direction == "down"){
					$('.navbar-wrapper').addClass('isStuck');
				}else{
					$('.navbar-wrapper').removeClass('isStuck');
				}
			},
			offset: 0
		});
		$('#home, #aboutme, #technical, #experience, #education, #portfolio, #contact, #footer').waypoint({
			handler: function(direction) {
				$('.navbar-wrapper li').removeClass('active');
				var link = $('a[href="#'+ $(this.element).attr('id') +'"');
				link.parent().addClass('active');
				ga('send', 'pageview', {
					'page': $(link).attr('href'),
					'title': $(link).text()
				});
			},
			offset: $('.navbar-wrapper').height()
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
});
