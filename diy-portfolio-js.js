// DIY-Portfolio-js
//
// This file is written using mostly jQuery.
// The only purpose of this code is to make the website work with mobile phones and tablets.
// You shouldn't need to change any of this code, but feel free to mess around if you are feeling adventurous.
// jQuery is powerful and it lets you do a lot of awesome things easily.
// Check out www.jQuery.com for more info.
//
/////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {

	// Functions that require the entire page to be loaded, images and all.
	$(window).bind('load', function() {

		// THANK YOU to abeautifulsite.net for the simple elegant code snippet below, used to detect mobile browsers:
		var isMobile = {
		    Android: function() {
			return navigator.userAgent.match(/Android/i);
		    },
		    BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		    },
		    iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		    },
		    Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		    },
		    Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		    },
		    any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		    }
		};

		// If the user is on a mobile device, then...
		if( isMobile.any() ) {

			$('.project').css('background-attachment', 'scroll').css('background-position', 'center bottom');
			var windowWidth = $(window).width();

			$('#site_container').children().each( function(){

				var totalHeight = 0;

				$(this).children().each( function() {

			    		 totalHeight = totalHeight + $(this).outerHeight(true); 
				});

				var img = new Image;
				img.src = $(this).css('background-image').replace(/url\(|\)$/ig, "");
				var bgImgWidth = img.width;
				var bgImgHeight = img.height;

				var bgScaleRatio = windowWidth / bgImgWidth;

				var scaledHeight = bgScaleRatio * bgImgHeight
				totalHeight = totalHeight + scaledHeight;


				$(this).css('height', totalHeight + 'px');
				

			});
		
		}

	});

});
