/*!
 * Dynamic background image resize, modified from: http://css-tricks.com/perfect-full-page-background-image/
 */

$(window).load(function() {    

	var theWindow        = $(window),
	    $bg              = $(".bg"),
	    aspectRatio      = $bg.width() / $bg.height();
	    			    		
	function resizeBg() {
		
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
		    $bg
		    	.removeClass()
		    	.addClass('bgheight');
		} else {
		    $bg
		    	.removeClass()
		    	.addClass('bgwidth');
		}
					
	}
	                   			
	theWindow.resize(function() {
		resizeBg();
	}).trigger("resize");

});