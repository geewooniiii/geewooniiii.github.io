document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons and add event listeners
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Navigate to the page based on data-link attribute
            window.location.href = this.getAttribute("data-link");
        });
    });
});
