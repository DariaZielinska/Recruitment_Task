document.addEventListener("DOMContentLoaded", function () {

    const welcomeButton = document.querySelector("#show-popup-form");
    const form = document.querySelector("#form");
    const close = document.querySelector("i");

    welcomeButton.addEventListener("click", function () {

        welcomeButton.classList.add("hidden");
        form.classList.remove("hidden");

        close.addEventListener("click", function() {
            form.classList.add("hidden");
            welcomeButton.classList.remove("hidden");
        })

    });

    form.addEventListener("submit", function (e) {

        const email = document.querySelector("input[type='email']").value;
        const password = document.querySelector("input[type='password']").value;
        const agree = document.querySelector("input[type='checkbox']").checked;
        let error = false;
        let errorMessages = [];
        const errorMessageContainer = document.querySelector("#error-container");
        const endButton = document.querySelector("#end-popup-form");

        if (email.indexOf("@") === -1){
            error = true;
            errorMessages.push("Please enter a valid e-mail address");
        }

        if(password.length === 0){
            error = true;
            errorMessages.push("Field password is required");
        }

        if(!agree){
            error = true;
            errorMessages.push("You need to agree terms");
        }

        if(error === true){
            e.preventDefault();
            errorMessageContainer.innerHTML = null;

            errorMessages.forEach(function (message) {
                const p = document.createElement("p");
                p.innerText = message;
                errorMessageContainer.appendChild(p);
            })
        }else{
            e.preventDefault();
            errorMessageContainer.innerHTML = "Loading...";
            setTimeout(function(){
                form.classList.add("hidden");
                endButton.classList.remove("hidden")
            }, 3000);
        }



    })


});
