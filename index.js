window.addEventListener("load", function () {
    var logo = document.getElementsByClassName("logo")[0];
    logo.addEventListener("click", function () {
        if (logo.innerHTML === "Sergio Monteiro") {
            logo.innerHTML = "Facebook";
        } else {
            logo.innerHTML = "Sergio Monteiro";
        }
    })
})