const butInstall = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    textHeader.textContent = "Click me! I'm a but!"
});

butInstall.addEventListener('click', async () => {
    butInstall.setAttribute('disabled', true);
    butInstall.textContent = "Installed!";
});

window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = "But is installed!";
    console.log('appinstalled', event);
});