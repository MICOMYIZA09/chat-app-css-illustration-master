document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input-area input');
    const sendButton = document.querySelector('.send-button');
    const chatContainer = document.querySelector('.chat-container');

    sendButton.addEventListener('click', () => {
        const message = inputField.value.trim();
        if (message) {
            // Create a new message element
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'right');
            messageElement.textContent = message;

            // Append the message to the chat container
            chatContainer.appendChild(messageElement);

            // Clear the input field
            inputField.value = '';

            // Scroll to the bottom of the chat container
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    });

    // Allow sending messages with the Enter key
    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
