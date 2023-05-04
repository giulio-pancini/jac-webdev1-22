function errorPopup(errorMessage) {
    const newErrorPopup = document.getElementById('errorPopup');

    if (newErrorPopup.childElementCount == 0) {
        const titleElement = document.createElement('h2');
        titleElement.setAttribute('id', 'errorTitle');
        titleElement.innerText = 'ERRORE';
        newErrorPopup.appendChild(titleElement);

        const messageElement = document.createElement('p');
        messageElement.setAttribute('id', 'errorMessage');
        messageElement.innerText = errorMessage;
        newErrorPopup.appendChild(messageElement);

        const closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'closePopupButton');
        closeButton.setAttribute('onclick', 'closePopup(this)');
        newErrorPopup.appendChild(closeButton);

        const closeImage = document.createElement('img');
        closeImage.setAttribute('id', 'closeImage');
        closeImage.setAttribute('src', 'Utils/close-icon.png');
        closeButton.appendChild(closeImage);

        const closeText = document.createElement('p');
        closeText.innerText = 'Chiudi';
        closeText.setAttribute('id', 'closeText');
        closeButton.appendChild(closeText);

    } else {
        document.getElementById('errorMessage').innerText = errorMessage;
    }
    newErrorPopup.style.display = 'block';
}

function closePopup(element) {
    const popup = document.getElementById(element.parentNode.id);
    popup.style.display = 'none';
}