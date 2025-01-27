document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector("#theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    // Apply the saved theme on page load
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    // Toggle theme on button click
    toggleButton.addEventListener("click", () => {
        const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
});
