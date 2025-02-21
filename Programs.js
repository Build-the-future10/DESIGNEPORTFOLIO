let darkmode = localStorage.getItem('darkmode');
const darkModeToggleButton = document.getElementById('mode-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
};

if (darkmode === 'active') {
    enableDarkmode();
}

darkModeToggleButton.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});

