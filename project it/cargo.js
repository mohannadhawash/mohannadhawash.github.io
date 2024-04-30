const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})
function changestylesheet(){
    var stylesheet= document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'p1-cargo-theme1.css') {
        stylesheet.setAttribute('href', 'p1-cargo-theme2.css');
    } else {
        stylesheet.setAttribute('href', 'p1-cargo-theme1.css');
    }
}
function changestylesheetp2(){
    var stylesheet=document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'p2-cargo-theme1.css') {
        stylesheet.setAttribute('href', 'p2-cargo-theme2.css');
    }
    else {
        stylesheet.setAttribute('href', 'p2-cargo-theme1.css');
    }
}