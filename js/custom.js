// var typed = new Typed('.blink', {
//     strings: ["I am", "I m Gneh kale", "I am Ganesh Kale"],
//     typeSpeed: 60,
//     smartBackspace: false // Default value
// });

var typed = new Typed('.sink', {
    strings: ["Full Stack","Full stak Decl", "Full Stack Developer And Competitive Coder"],
    typeSpeed:80,
    loop: true,
});



$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

});