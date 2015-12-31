$(document).ready(function() {

	$(function() {
        $.scrollify({
                section: ".panel"
            });
        
            Galleria.loadTheme('../themes/classic/galleria.classic.min.js');
            Galleria.run('.galleria');
    
    //nothing to see here >_
        
//        	  $('a[href*=#]:not([href=#])').click(function() {
//	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//	      var target = $(this.hash);
//	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//	      if (target.length) {
//	        $('html,body').animate({
//	          scrollTop: target.offset().top
//	        }, 750);
//	        return false;
//	      }
//	    }
//	  });
    //end func    
	});
   
	var homeOffset = $("#home-iface").offset().top;
	var codeOffset = $("#code-iface").offset().top;
	var artOffset = $("#art-iface").offset().top;
	var resumeOffset = $("#resume-iface").offset().top;

	var $w = $(window).scroll(function() {

		if ($w.scrollTop() >= homeOffset) {
			$("#home").css("background", "url(../images/homeColor.png) no-repeat");
			inactiveLinks("home");
		}

		if ($w.scrollTop() >= codeOffset) {
			$("#code").css("background", "url(../images/codeColor.png) no-repeat");
			inactiveLinks("code");
		}

		if ($w.scrollTop() >= artOffset) {
			$("#art").css("background", "url(../images/artColor.png) no-repeat");
			inactiveLinks("art");
		}

		if ($w.scrollTop() >= resumeOffset) {
			$("#resume").css("background", "url(../images/resumeColor.png) no-repeat");
			inactiveLinks("resume");
		}

	});
    

    
});

function inactiveLinks(exclude) {

	if (exclude != "home")
		$("#home").css("background", "url(../images/homeNoColor.png) no-repeat");

	if (exclude != "code")
		$("#code").css("background", "url(../images/codeNoColor.png) no-repeat");

	if (exclude != "art")
		$("#art").css("background", "url(../images/artNoColor.png) no-repeat");

	if (exclude != "resume")
		$("#resume").css("background", "url(../images/resumeNoColor.png) no-repeat");

}