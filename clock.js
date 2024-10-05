function showClock() {
    const time = new Date();
    const divClock = document.getElementById("clock");
    const divDate = document.getElementById("date");

    divClock.textContent = time.toLocaleTimeString("tr");

    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    divDate.textContent = time.toLocaleDateString('tr-TR', options);
}

showClock();
setInterval(showClock, 1000);

const toggleButton = document.getElementById("toggle-theme");
let darkTheme = true;

toggleButton.addEventListener("click", () => {
    darkTheme = !darkTheme;
    document.body.className = darkTheme ? 'dark-theme' : 'light-theme';
});
