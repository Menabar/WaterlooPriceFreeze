document.addEventListener('DOMContentLoaded', function () {
    const backToTopBtn = document.getElementById("backToTopBtn");

    backToTopBtn.addEventListener("click", () => {
        // Scroll to the top when the button is clicked
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});