function solution() {
    let inputField = document.querySelector('.card div input');
    let addGiftBtn = document.querySelector('div button');
    let liElementsArr = [];
    addGiftBtn.addEventListener('click', (e) => {
        let parrentSection = document.querySelectorAll('.card')[1];
        let ulElement = parrentSection.querySelector('ul');
        if(inputField.value == ''){
            return;
        }
        let firstChild = ulElement.firstChild;
        while(firstChild){
            ulElement.removeChild(firstChild);
            firstChild = ulElement.firstChild;
        }
        let liElement = document.createElement('li');
        liElement.classList.add('gift');
        liElement.textContent = inputField.value;
        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send'
        sendBtn.addEventListener('click', (ev) => {
            let currentLiElement = ev.currentTarget.parentNode;
            let sendParrentSection = document.querySelectorAll('.card')[2];
            let sendUlElement = sendParrentSection.querySelector('ul');
            let sendLiElement = document.createElement('li');
            sendLiElement.classList.add('gift');
            sendLiElement.textContent = currentLiElement.textContent.replace('SendDiscard', '');
            ev.currentTarget.parentNode.remove();
            sendUlElement.appendChild(sendLiElement);
            let index = liElementsArr.indexOf(currentLiElement);
            liElementsArr.splice(index, 1);
        });
        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        discardBtn.addEventListener('click', (ev) => {
            let currentLiElement = ev.currentTarget.parentNode;
            let discardParrentSection = document.querySelectorAll('.card')[3];
            let discardUlElement = discardParrentSection.querySelector('ul');
            let discardLiElement = document.createElement('li');
            discardLiElement.classList.add('gift');
            discardLiElement.textContent = currentLiElement.textContent.replace('SendDiscard', '');
            ev.currentTarget.parentNode.remove();
            discardUlElement.appendChild(discardLiElement);
            let index = liElementsArr.indexOf(currentLiElement);
            liElementsArr.splice(index, 1);
        });
        liElement.appendChild(sendBtn);
        liElement.appendChild(discardBtn);
        liElementsArr.push(liElement);
        liElementsArr.sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(el => ulElement.appendChild(el));
        inputField.value = '';
    });




}