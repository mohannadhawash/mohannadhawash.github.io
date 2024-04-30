var mainimg = document.getElementById("main-img");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){

    mainimg.src=smallimg[0].src;
}
smallimg[1].onclick = function(){

    mainimg.src=smallimg[1].src;
}
smallimg[2].onclick = function(){

    mainimg.src=smallimg[2].src;
}
smallimg[3].onclick = function(){

    mainimg.src=smallimg[3].src;
}

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