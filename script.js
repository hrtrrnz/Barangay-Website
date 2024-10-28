window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("popupForm").style.display = "flex";
    }, 3000);
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popupForm").style.display = "none";
});

window.addEventListener("click", function (event) {
    const popupForm = document.getElementById("popupForm");
    if (event.target === popupForm) {
        popupForm.style.display = "none";
    }
});
