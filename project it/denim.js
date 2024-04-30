function changestylesheet(){
    var stylesheet= document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'sets-page1-style1.css') {
        stylesheet.setAttribute('href', 'sets-page1-style2.css');
    } else {
        stylesheet.setAttribute('href', 'sets-page1-style1.css');
    }
}
function changestylesheetp2(){
    var stylesheet=document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'sets-page2-style1.css') {
        stylesheet.setAttribute('href', 'sets-page2-style2.css');
    }
    else {
        stylesheet.setAttribute('href', 'sets-page2-style1.css');
    }
}