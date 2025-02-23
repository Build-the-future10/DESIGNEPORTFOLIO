// Dark Mode Toggle
document.getElementById("color-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Store the user's preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Apply the saved theme on page load
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};

// Color Changer (cycles through predefined colors)
const colors = ["#8b0000", "#004d99", "#228B22", "#FF8C00", "#800080"]; // Red, Blue, Green, Orange, Purple
let colorIndex = 0;

document.getElementById("color-toggle").insertAdjacentHTML("afterend", '<button id="color-changer">Change Color</button>');

document.getElementById("color-changer").addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[colorIndex];

    // Store selected color
    localStorage.setItem("bgColor", colors[colorIndex]);
});

// Apply the saved background color on page load
window.onload = function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
};
