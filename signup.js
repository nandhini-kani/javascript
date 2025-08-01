window.addEventListener("DOMContentLoaded",()=>{
const form=document.getElementById('form');
const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const usernameError=document.getElementById("usernameError");
const emailError=document.getElementById("emailError");

let usernameValue=username.value;
username.addEventListener("change",function(e)
{
    console.log("username changed to:"+e.targe.value);
    usernameValue=e.target.value;
})

let emailValue=email.value;
email.addEventListener("change",function(e){
    console.log("username changed to:"+e.targe.value);
    emailValue=e.target.value;
})

})
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("form submitted");
    console.log("username :"+usernameValue);
    console.log("Email :"+emailValue);
    if(!usernameValue.trim()){
        usernameError.innerHTML+"please Enter your name";
    }
    else{
        usernameError.innerHTML +"";
    }
    if(!emailValue){
        emailError.innerHTML+"please Enter your email ";
    }
    else{
        emailError.innerHTML+""
    }
    if(usernameError || emailError){
        console.log("validation failed");
        return null;
    }
    console.log("form submitted successfuly");
})

console.log(username);
console.log("username value",usernameValue);
console.log(email);
console.log("email value",emailValue);