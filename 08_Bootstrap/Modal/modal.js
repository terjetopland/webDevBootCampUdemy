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
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
switch (numberDay) {
    case 2:
        day = `${days[2]}. A bit better!`;
        break;
    case 3:
        day = `${days[3]}. Little-${days[6]}!`;
        break;
    case 4:
        day = `${days[4]}. Soon ${days[5]}!`;
        break;
    case 5:
        day = `${days[5]}. Finally weekend!`;
        break;
    case 6:
        day = `${days[6]}. Let's chill!`;
        break;
    case 0:
        day = `${days[0]}. Go on relax!`;
        break;
    default:
        day = `${days[1]}. Uggh!`;
}

document.getElementById('day-of-week').innerHTML = day;

// let userDataFromPrompt = '';
// if(numberDay > 4) {
//     userDataFromPrompt = prompt('It is weekend!!! Give me a word!');
//     document.getElementById('user-input-word').innerHTML = `Your word was: ${userDataFromPrompt.toUpperCase()}`;
// } 

const myModal = document.getElementById('my-modal');

const logInRegisterBtn = document.getElementById('log-in-register-btn');

const closeMyModalBtn = document.getElementById('my-modal-close-btn')

logInRegisterBtn.onclick = () => {
    myModal.style.visibility = 'visible';
}

closeMyModalBtn.onclick = () => {
    myModal.style.visibility = 'hidden';
}