$(document).ready(function() {

	$(function() {
        $.scrollify({
                section: ".panel"
            });
        
            Galleria.loadTheme('../themes/classic/galleria.classic.min.js');
            Galleria.run('.galleria');
    
    })
});



function up() {
    $.scrollify.previous();
}

function down() {
    $.scrollify.next();
}

function twitterLink () {
    window.open("https://twitter.com/maxokay");
}

function tumblrLink() {
    window.open("http://whatmax.tumblr.com/");
}

function instaLink() {
    window.open("https://www.instagram.com/max.exe/");
}

