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
