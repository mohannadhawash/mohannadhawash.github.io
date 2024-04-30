function changestylesheet(){
    var stylesheet= document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'style.css') {
        stylesheet.setAttribute('href', 'style2.css');
    } else {
        stylesheet.setAttribute('href', 'style.css');
    }
}
function changestylesheetp2(){
    var stylesheet=document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'style.css') {
        stylesheet.setAttribute('href', 'style2.css');
    }
    else {
        stylesheet.setAttribute('href', 'style.css');
    }
}