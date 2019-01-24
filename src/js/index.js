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

    })




});
