$(document).ready(function () {
    //init swiper
    var swiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        sildesPerView: 1,
        spaceBetween: 30,
        loop: true
    })
});

$(document).ready(function() {

  $(function() {
        $.scrollify({
                section: ".panel"
            });
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

