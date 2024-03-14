console.log(`Hello modal!`);

$(document).ready(function () {
    $('#carousel-login-register').on('slid.bs.carousel', function () {
        var slideIndex = $(this).find('.carousel-item.active').index();
        if (slideIndex === 0) {
            $('#tgl-log-in').prop('checked', true);
        } else if (slideIndex === 1) {
            $('#tgl-register').prop('checked', true);
        }
    });
});


let numberDay = new Date().getDay();
let day = ``;

switch (numberDay) {
    case 2:
        day = `tuesday. A bit better!`;
        break;
    case 3:
        day = `wednesday. Little saturday!`;
        break;
    case 4:
        day = `thursday. Soon friday!`;
        break;
    case 5:
        day = `friday. Finally weekend!`;
        break;
    case 6:
        day = `saturday. Let's chill!`;
        break;
    case 0:
        day = `sunday. Go on relax!`;
        break;
    default:
        day = `monday. Uggh!`;

}

document.getElementById('day-of-week').innerHTML = day;

