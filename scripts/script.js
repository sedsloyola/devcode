const PUBLIC_KEY = "O_mz-XJPx-FHWBF-u";

let hamburger_icon = document.getElementById('hamburger_icon'),
    sidebar = document.getElementById('sidebar'),
    xmark = document.getElementById('xmark');


hamburger_icon.onclick = () => sidebar.classList.toggle('-translate-x-56');
xmark.onclick = () => sidebar.classList.toggle('-translate-x-56');


