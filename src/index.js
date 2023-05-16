

const btn = document.getElementById('btn');
const htmlTage = document.getElementById('html');

btn.addEventListener('click', () => {
    htmlTage.classList.toggle('dark')
    window.localStorage.setItem('colorMode','dark');
});


function setColorlocal() {
    window.localStorage.getItem('colorMode') === 'dark' ? darkMode() : whiteMode();
}


const darkMode = () => {
    htmlTage.classList.add('dark');
}
const whiteMode = () => {
    htmlTage.classList.remove('dark');
}



setColorlocal();

