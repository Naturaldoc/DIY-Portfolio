// DIY-Portfolio-js
//
// This file is written using mostly jQuery (jquery.com).
// Most of this code is here to make the website work with mobile phones and tablets.
// You shouldn't need to change anything, but feel free to mess around if you are feeling adventurous.
//
// Also, this file has a function that scrolls you back to the top if you click on the footer.
//
/////////////////////////////////////////////////////////////////////////////


$(document).ready(function() {


	// Functions that require the entire page to be loaded, images and all.
	$(window).bind('load', function() {

		// Scrolls to top if you click on the #footer div
		$('#footer').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		});
		

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
