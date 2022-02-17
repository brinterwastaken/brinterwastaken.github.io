let dark = localStorage.getItem('darkmode');
const themebtn = document.getElementById('themeswitcher');
const themebtn2 = document.getElementById('themeswitcher2');
let menu = 0;
if (dark == "enabled") {
    setDarkMode();
} else {
    unsetDarkMode();
}
function toggledark() {
    if (dark == "enabled") {
        unsetDarkMode();
    } else {
        setDarkMode();
    }
}
function setDarkMode() {
    document.querySelector("HTML").classList.add("dark");
    localStorage.setItem('darkmode', "enabled");
    dark = localStorage.getItem('darkmode');
    themebtn.innerText = "\uF495"
    themebtn2.innerText = "\uF495"
}
function unsetDarkMode() {
    document.querySelector("HTML").classList.remove("dark");
    localStorage.setItem('darkmode', "disabled");
    dark = localStorage.getItem('darkmode');
    themebtn.innerText = "\uF1D1"
    themebtn2.innerText = "\uF1D1"
}
themebtn.addEventListener('click', toggledark);
themebtn2.addEventListener('click', toggledark)
function toggleMenu() {
    if (menu == 0) {
        document.getElementById('menu').style.display = 'block';
        menu = 1;
    } else if (menu == 1) {
        document.getElementById('menu').style.display = 'none';
        menu = 0;
    }
}
function goToSection(arg) {
    document.getElementById(arg).scrollIntoView(); 
    document.getElementById('menu').style.display = 'none'; 
    menu=0;
}