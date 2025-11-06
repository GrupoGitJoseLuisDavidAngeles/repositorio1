document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showMessageBtn');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Somos el grupo de José Luis, Ángeles y David';
    });
});