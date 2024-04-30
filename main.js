var email=document.forms['form']['email'];
var password=document.forms['form']['password'];



var email_error =document.getElementById('email_error');
var password_error =document.getElementById('password_error');


email.addEventListener('textInput',email_Verify);
password.addEventListener('textInput',password_Verify);


function validated(){
    
    if (email.value.length< 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    


    if (password.value.length < 6){
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }

    if(email.value=='momen123@gmail.com'){
        email.style.border = "1px solid silver";
        email_error.style.display="none";
        return true;
    }else{
        email_error.style.display = "block";
        return false;
    }


    
    
}

function valid(){
    if(password.value=='1234567890'){
        password.style.border = "1px solid silver";
        password_error.style.display="none";
        return true;
    }else{
        password_error.style.display = "block";
        return false;
    }

 }


    

    



function email_Verify(){
    if (email.value.length >=8 ){
        email.style.border = "1px solid silver";
        email_error.style.display="none";
        return true;
    }
    

}
function password_Verify(){
    if (password.value.length >= 7){
        password.style.border ="1px solid silver";
        password_error.style.display="none";
        return true;
    }




   

}
function changestylesheet(){
    var stylesheet= document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') === 'css/style-acc.css') {
        stylesheet.setAttribute('href', 'css/master.css');
    } else {
        stylesheet.setAttribute('href', 'css/style-acc.css');
    }
}