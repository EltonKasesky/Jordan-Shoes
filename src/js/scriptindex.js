const blink = document.getElementById('blink');

let visibility = true;

const interval = setInterval(function() {
    if (visibility) {
        blink.style.opacity = 0;
    } else {
        blink.style.opacity = 1;
    }
    visibility = !visibility;
}, 350);