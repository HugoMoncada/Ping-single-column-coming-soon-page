let regex = /\S+@\S+\.\S+/; 
let message = document.querySelector(".message");

document.querySelector("button").addEventListener("click", function() {
    let input = document.querySelector("input").value;
    if(input.trim() === ""){
       message.innerHTML = "Whoops! It looks like you forgot to add your email";
       message.style.color = "var(--Light-Red)";
       message.style.display = "block";
       return;
    }
    if(!regex.test(input)){
        message.innerHTML = "Please provide a valid email address";
        message.style.color = "var(--Light-Red)";
        message.style.display = "block";
        return;
    }
    else{
        message.style.display = "block";    
        message.innerHTML = "Thank you! we'll be in touch soon!"
        message.style.color = "green"
    }
    
});