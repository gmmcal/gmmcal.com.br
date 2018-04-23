/**
 * jquery.gridrotator.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( jQuery, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var jQueryevent = jQuery.event,
	jQueryspecial,
	resizeTimeout;

	jQueryspecial = jQueryevent.special.debouncedresize = {
		setup: function() {
			jQuery( this ).on( "resize", jQueryspecial.handler );
		},
		teardown: function() {
			jQuery( this ).off( "resize", jQueryspecial.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					jQueryevent.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, jQueryspecial.threshold );
		},
		threshold: 100
	};

	// http://www.hardcode.nl/subcategory_1/article_317-array-shuffle-function
	Array.prototype.shuffle = function() {
		var i=this.length,p,t;
		while (i--) {
			p = Math.floor(Math.random()*i);
			t = this[i];
			this[i]=this[p];
			this[p]=t;
		}
		return this;
	};

	// HTML5 PageVisibility API
	// http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
	// by Joe Marini (@joemarini)
	function getHiddenProp(){
		var prefixes = ['webkit','moz','ms','o'];

		// if 'hidden' is natively supported just return it
		if ('hidden' in document) return 'hidden';

		// otherwise loop over all the known prefixes until we find one
		for (var i = 0; i < prefixes.length; i++){
			if ((prefixes[i] + 'Hidden') in document) 
				return prefixes[i] + 'Hidden';
		}

		// otherwise it's not supported
		return null;
	}
	function isHidden() {
		var prop = getHiddenProp();
		if (!prop) return false;

		return document[prop];
	}

	function isEmpty( obj ) {
		return Object.keys(obj).length === 0;
	}

	// global
	var jQuerywindow = jQuery( window ),
		Modernizr = window.Modernizr;

	jQuery.GridRotator = function( options, element ) {
		
		this.jQueryel = jQuery( element );
		if( Modernizr.backgroundsize ) {

			var self = this;
			this.jQueryel.addClass( 'ri-grid-loading' );
			this._init( options );

		}
		
	};

	// the options
	jQuery.GridRotator.defaults = {
		// number of rows
		rows : 2,
		// number of columns 
		columns : 4,
		w1024 : { rows : 3, columns : 8 },
		w768 : {rows : 3,columns : 7 },
		w480 : {rows : 3,columns : 5 },
		w320 : {rows : 2,columns : 4 },
		w240 : {rows : 2,columns : 3 },
		// step: number of items that are replaced at the same time
		// random || [some number]
		// note: for performance issues, the number "can't" be > options.maxStep
		step : 'random',
		// change it as you wish..
		maxStep : 3,
		// prevent user to click the items
		preventClick : true,
		// animation type
		// showHide || fadeInOut || 
		// slideLeft || slideRight || slideTop || slideBottom || 
		// rotateBottom || rotateLeft || rotateRight || rotateTop || 
		// scale ||
		// rotate3d ||
		// rotateLeftScale || rotateRightScale || rotateTopScale || rotateBottomScale || 
		// random
		animType : 'random',
		// animation speed
		animSpeed : 800,
		// animation easings
		animEasingOut : 'linear',
		animEasingIn: 'linear',
		// the item(s) will be replaced every 3 seconds
		// note: for performance issues, the time "can't" be < 300 ms
		interval : 3000,
		// if false the animations will not start
		// use false if onhover is true for example
		slideshow : true,
		// if true the items will switch when hovered
		onhover : false,
		// ids of elements that shouldn't change
		nochange : []
	};

	jQuery.GridRotator.prototype = {

		_init : function( options ) {
			
			// options
			this.options = jQuery.extend( true, {}, jQuery.GridRotator.defaults, options );
			// cache some elements + variables
			this._config();

		},
		_config : function() {

			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};

			// support CSS transitions and 3d transforms
			this.supportTransitions = Modernizr.csstransitions;
			this.supportTransforms3D = Modernizr.csstransforms3d;

			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.gridrotator';

			// all animation types for the random option
			this.animTypes = this.supportTransforms3D ? [
				'fadeInOut',
				'slideLeft', 
				'slideRight', 
				'slideTop', 
				'slideBottom', 
				'rotateLeft', 
				'rotateRight', 
				'rotateTop', 
				'rotateBottom', 
				'scale', 
				'rotate3d', 
				'rotateLeftScale', 
				'rotateRightScale', 
				'rotateTopScale', 
				'rotateBottomScale' ] :
				[ 'fadeInOut', 'slideLeft', 'slideRight', 'slideTop', 'slideBottom' ];

			this.animType = this.options.animType;

			if( this.animType !== 'random' && !this.supportTransforms3D && jQuery.inArray( this.animType, this.animTypes ) === -1 && this.animType !== 'showHide' ) {

				// fallback to 'fadeInOut' if user sets a type which is not supported
				this.animType = 'fadeInOut';

			}

			this.animTypesTotal	= this.animTypes.length;

			// the <ul> where the items are placed
			this.jQuerylist = this.jQueryel.children( 'ul' );
			// remove images and add background-image to anchors
			// preload the images before
			var loaded = 0,
				jQueryimgs = this.jQuerylist.find( 'img' ),
				count = jQueryimgs.length;

			jQueryimgs.each( function() {

				var jQueryimg = jQuery( this ), src = jQueryimg.attr( 'src' );

				jQuery( '<img/>' ).load( function() {

					++loaded;
					jQueryimg.parent().css( 'background-image', 'url(' + src + ')' );

					if( loaded === count ) {

						jQueryimgs.remove();
						self.jQueryel.removeClass( 'ri-grid-loading' );
						// the items
						self.jQueryitems = self.jQuerylist.children( 'li' );
						// make a copy of the items
						self.jQueryitemsCache = self.jQueryitems.clone();
						// total number of items
						self.itemsTotal = self.jQueryitems.length;
						// the items that will be out of the grid
						// actually the item's child (anchor element)
						self.outItems= [];
						self._layout( function() {
							self._initEvents();
						} );
						// replace [options.step] items after [options.interval] time
						// the items that go out are randomly chosen, while the ones that get in
						// follow a "First In First Out" logic
						self._start();

					}

				} ).attr( 'src', src )
				 
			} );

		},
		_layout : function( callback ) {

			var self = this;

			// sets the grid dimentions based on the container's width
			this._setGridDim();

			// reset
			this.jQuerylist.empty();
			this.jQueryitems = this.jQueryitemsCache.clone().appendTo( this.jQuerylist );
			
			var jQueryoutItems = this.jQueryitems.filter( ':gt(' + ( this.showTotal - 1 ) + ')' ),
				jQueryoutAItems = jQueryoutItems.children( 'a' );

			this.outItems.length = 0;

			jQueryoutAItems.each( function( i ) {
				self.outItems.push( jQuery( this ) );
			} );

			jQueryoutItems.remove();

				// container's width
			var containerWidth = ( document.defaultView ) ? parseInt( document.defaultView.getComputedStyle( this.jQueryel.get( 0 ), null ).width ) : this.jQueryel.width(),
				// item's width
				itemWidth = Math.floor( containerWidth / this.columns ),
				// calculate gap
				gapWidth = containerWidth - ( this.columns * Math.floor( itemWidth ) );

			for( var i = 0; i < this.rows; ++i ) {

				for( var j = 0; j < this.columns; ++j ) {

					var idx = this.columns * i + j,
						jQueryitem = this.jQueryitems.eq( idx );

					jQueryitem.css( {
						width : j < Math.floor( gapWidth ) ? itemWidth + 1 : itemWidth,
						height : itemWidth
					} );

					if( jQuery.inArray( idx, this.options.nochange ) !== -1 ) {
						jQueryitem.addClass( 'ri-nochange' ).data( 'nochange', true );
					}

				}

			}

			if( this.options.preventClick ) {

				this.jQueryitems.children().css( 'cursor', 'default' ).on( 'click.gridrotator', false );

			}

			if( callback ) {
				callback.call();
			}

		},
		// set the grid rows and columns
		_setGridDim	 : function() {

			// container's width
			var c_w = this.jQueryel.width();

			// we will choose the number of rows/columns according to the container's width and the values set in the plugin options 
			switch( true ) {
				case ( c_w < 240 ) : this.rows = this.options.w240.rows; this.columns = this.options.w240.columns; break;
				case ( c_w < 320 ) : this.rows = this.options.w320.rows; this.columns = this.options.w320.columns; break;
				case ( c_w < 480 ) : this.rows = this.options.w480.rows; this.columns = this.options.w480.columns; break;
				case ( c_w < 768 ) : this.rows = this.options.w768.rows; this.columns = this.options.w768.columns; break;
				case ( c_w < 1024 ) : this.rows = this.options.w1024.rows; this.columns = this.options.w1024.columns; break;
				default : this.rows = this.options.rows; this.columns = this.options.columns; break;
			}

			this.showTotal = this.rows * this.columns;

		},
		// init window resize event
		_initEvents : function() {

			var self = this;

			jQuerywindow.on( 'debouncedresize.gridrotator', function() {
				self._layout();
			} );

			// use the property name to generate the prefixed event name
			var visProp = getHiddenProp();
			
			// HTML5 PageVisibility API
			// http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
			// by Joe Marini (@joemarini)
			if (visProp) {

				var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
				document.addEventListener(evtname, function() { self._visChange(); } );

			}

			if( !Modernizr.touch && this.options.onhover ) {
				
				self.jQueryitems.on( 'mouseenter.gridrotator', function() {

					var jQueryitem = jQuery( this );
					if( !jQueryitem.data( 'active' ) && !jQueryitem.data( 'hovered' ) && !jQueryitem.data( 'nochange' ) ) {
						jQueryitem.data( 'hovered', true );
						self._replace( jQueryitem );
					}

				} ).on( 'mouseleave.gridrotator', function() {

					jQuery( this ).data( 'hovered', false );

				} );

			}

		},
		_visChange : function() {

			isHidden() ? clearTimeout( this.playtimeout ) : this._start();

		},
		// start rotating elements
		_start : function() {

			if( this.showTotal < this.itemsTotal && this.options.slideshow ) {
				this._showNext();
			}

		},
		// get which type of animation
		_getAnimType : function() {

			return this.animType === 'random' ? this.animTypes[ Math.floor( Math.random() * this.animTypesTotal ) ] : this.animType;

		},
		// get css properties for the transition effect
		_getAnimProperties : function( jQueryout ) {

			var startInProp = {}, startOutProp = {}, endInProp = {}, endOutProp = {},
				animType = this._getAnimType(), speed, delay = 0;

			switch( animType ) {

				case 'showHide' :
					
					speed = 0;
					endOutProp.opacity = 0;
					break;

				case 'fadeInOut' :

					endOutProp.opacity = 0;
					break;

				case 'slideLeft' :
					
					startInProp.left = jQueryout.width();
					endInProp.left = 0;
					endOutProp.left = -jQueryout.width();
					break;

				case 'slideRight' :
					
					startInProp.left = -jQueryout.width();
					endInProp.left = 0;
					endOutProp.left = jQueryout.width();
					break;

				case 'slideTop' :
					
					startInProp.top = jQueryout.height();
					endInProp.top = 0;
					endOutProp.top = -jQueryout.height();
					break;

				case 'slideBottom' :
					
					startInProp.top = -jQueryout.height();
					endInProp.top = 0;
					endOutProp.top = jQueryout.height();
					break;

				case 'rotateLeft' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotateY(90deg)';
					endInProp.transform = 'rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateY(-90deg)';
					break;

				case 'rotateRight' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotateY(-90deg)';
					endInProp.transform = 'rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateY(90deg)';
					break;

				case 'rotateTop' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform= 'rotateX(90deg)';
					endInProp.transform = 'rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateX(-90deg)';
					break;

				case 'rotateBottom' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotateX(-90deg)';
					endInProp.transform = 'rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateX(90deg)';
					break;

				case 'scale' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0)';
					startOutProp.transform = 'scale(1)';
					endInProp.transform = 'scale(1)';
					delay = speed;
					endOutProp.transform = 'scale(0)';
					break;

				case 'rotateLeftScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;	
					startInProp.transform = 'scale(0.3) rotateY(90deg)';
					endInProp.transform = 'scale(1) rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateY(-90deg)';
					break;

				case 'rotateRightScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0.3) rotateY(-90deg)';
					endInProp.transform = 'scale(1) rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateY(90deg)';
					break;

				case 'rotateTopScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0.3) rotateX(90deg)';
					endInProp.transform = 'scale(1) rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateX(-90deg)';
					break;

				case 'rotateBottomScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0.3) rotateX(-90deg)';
					endInProp.transform = 'scale(1) rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateX(90deg)';
					break;

				case 'rotate3d' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotate3d( 1, 1, 0, 90deg )';
					endInProp.transform = 'rotate3d( 1, 1, 0, 0deg )';
					delay = speed;
					endOutProp.transform = 'rotate3d( 1, 1, 0, -90deg )';
					break;

			}

			return {
				startInProp : startInProp,
				startOutProp : startOutProp,
				endInProp : endInProp,
				endOutProp : endOutProp,				
				delay : delay,
				animSpeed : speed != undefined ? speed : this.options.animSpeed
			};

		},
		// show next [option.step] elements
		_showNext : function( time ) {

			var self = this;

			clearTimeout( this.playtimeout );

			this.playtimeout = setTimeout( function() {

				var step = self.options.step, max= self.options.maxStep, min = 1;
				
				if( max > self.showTotal ) {
					max = self.showTotal;
				}

					// number of items to swith at this point of time
				var nmbOut	= step === 'random' ? Math.floor( Math.random() * max + min ) : Math.min( Math.abs( step ) , max ) ,
					// array with random indexes. These will be the indexes of the items we will replace
					randArr	= self._getRandom( nmbOut, self.showTotal );

				for( var i = 0; i < nmbOut; ++i ) {

					// element to go out
					var jQueryout = self.jQueryitems.eq( randArr[ i ] );

					// if element is active, which means it is currently animating,
					// then we need to get different positions.. 
					if( jQueryout.data( 'active' ) || jQueryout.data( 'nochange' ) ) {

						// one of the items is active, call again..
						self._showNext( 1 );
						return false;

					}

					self._replace( jQueryout );

				}

				// again and again..
				self._showNext();

			}, time || Math.max( Math.abs( this.options.interval ) , 300 ) );

		},
		_replace : function( jQueryout ) {

			jQueryout.data( 'active', true );

			var self = this,
				jQueryoutA = jQueryout.children( 'a:last' ),
				newElProp = {
					width : jQueryoutA.width(),
					height : jQueryoutA.height()
				};

			// element stays active
			jQueryout.data( 'active', true );

			// get the element (anchor) that will go in (first one inserted in this.outItems)
			var jQueryinA = this.outItems.shift();

			// save element that went out
			this.outItems.push( jQueryoutA.clone().css( 'transition', 'none' ) );
			
			// prepend in element
			jQueryinA.css( newElProp ).prependTo( jQueryout );

			var animProp = this._getAnimProperties( jQueryoutA );

			jQueryinA.css( animProp.startInProp );
			jQueryoutA.css( animProp.startOutProp );
			
			this._setTransition( jQueryinA, 'all', animProp.animSpeed, animProp.delay, this.options.animEasingIn );
			this._setTransition( jQueryoutA, 'all', animProp.animSpeed, 0, this.options.animEasingOut );

			this._applyTransition( jQueryinA, animProp.endInProp, animProp.animSpeed, function() {

				var jQueryel = jQuery( this ),
					t = animProp.animSpeed === self.options.animSpeed && isEmpty( animProp.endInProp ) ? animProp.animSpeed : 0;
					
				setTimeout( function() {
					
					if( self.supportTransitions ) {
						jQueryel.off( self.transEndEventName );
					}
					
					jQueryel.next().remove();
					jQueryel.parent().data( 'active', false );

				}, t );

			}, animProp.animSpeed === 0 || isEmpty( animProp.endInProp ) );
			this._applyTransition( jQueryoutA, animProp.endOutProp, animProp.animSpeed );

		},
		_getRandom : function( cnt, limit ) {

			var randArray = [];

			for( var i = 0; i < limit; ++i ) {
				randArray.push( i )
			}
			
			return randArray.shuffle().slice( 0, cnt );

		},
		_setTransition : function( el, prop, speed, delay, easing ) {

			setTimeout( function() {
				el.css( 'transition', prop + ' ' + speed + 'ms ' + delay + 'ms ' + easing );
			}, 25 );

		},
		_applyTransition : function( el, styleCSS, speed, fncomplete, force ) {

			var self = this;
			setTimeout( function() {
				jQuery.fn.applyStyle = self.supportTransitions ? jQuery.fn.css : jQuery.fn.animate;

				if( fncomplete && self.supportTransitions ) {

					el.on( self.transEndEventName, fncomplete );

					if( force ) {
						fncomplete.call( el );					
					}

				}

				fncomplete = fncomplete || function() { return false; };

				el.stop().applyStyle( styleCSS, jQuery.extend( true, [], { duration : speed + 'ms', complete : fncomplete } ) );
			}, 25 );

		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	jQuery.fn.gridrotator = function( options ) {

		var instance = jQuery.data( this, 'gridrotator' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on gridrotator prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !jQuery.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for gridrotator instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = jQuery.data( this, 'gridrotator', new jQuery.GridRotator( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );
