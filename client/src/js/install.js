// const butInstall = document.getElementById('buttonInstall');
// const textHeader = document.getElementById('textHeader');

// window.addEventListener('beforeinstallprompt', (event) => {
//     event.preventDefault();
//     butInstall.style.visibility = 'visible';
//     textHeader.textContent = "Click me! I'm a but!"

//     butInstall.addEventListener('click', async () => {
//     // butInstall.addEventListener('click', () => {
//         console.log('clicked')
//         event.prompt();
//         butInstall.setAttribute('disabled', true);
//         butInstall.textContent = "Installed!";
//     });
// });

// window.addEventListener('appinstalled', (event) => {
//     textHeader.textContent = "But is installed!";
//     console.log('appinstalled', event);
// });



const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
        // Store the triggered events
        window.deferredPrompt = event;

        // Remove the hidden class from the button.
        butInstall.classList.toggle('hidden', false);
      });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
      // Clear prompt
  window.deferredPrompt = null;
});