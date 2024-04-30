
function changestylesheet() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'css/Hoodies-master.css') {
        stylesheet.setAttribute('href', 'css/Hoodies-master2.css');
    } else {
        stylesheet.setAttribute('href', 'css/Hoodies-master.css');
    }
}
function changestylesheetp2() {
    var stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'css/Hoodies2-style.css') {
        stylesheet.setAttribute('href', 'css/Hoodies2-style2.css');
    }
    else {
        stylesheet.setAttribute('href', 'css/Hoodies2-style.css');
    }
}

let bigImg = document.querySelector('.big-img img');
function showImg(pic) {
    bigImg.src = pic;
}
