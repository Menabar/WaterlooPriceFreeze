document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById("backToTopButton");

    backToTopButton.addEventListener("click", () => {
        // Scroll to the top when the button is clicked
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});