function solution() {

    const [listGifts, sentGifts, discardGifts] = document.querySelectorAll('section ul');

    document.querySelector('button').addEventListener('click', addGift);

    function addGift() {
        const giftValue = document.querySelector('input').value;
        document.querySelector('input').value = '';

        const liElement = element('li', giftValue, 'gift');
        const sendButton = element('button', 'Send', 'sendButton');
        const discardButton = element('button', 'Discard', 'discardButton');

        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);

        sendButton.addEventListener('click', () => send(giftValue, liElement));
        discardButton.addEventListener('click', () => discard(giftValue, liElement));

        listGifts.appendChild(liElement);

        sortGifts();
    }

    function send(name, gift) {
        gift.remove();

        const liElement = element('li', name, 'gift');
        sentGifts.appendChild(liElement);
    }

    function discard(name, gift) {
        gift.remove();

        const liElement = element('li', name, 'gift');
        discardGifts.appendChild(liElement);
    }

    function sortGifts() {
        Array
            .from(listGifts.children)
            .sort((a, b) => a.childNodes[0].textContent.localeCompare(b.childNodes[0].textContent))
            .forEach(g => listGifts.appendChild(g));
    }

    function element(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;

        if (className) {
            element.className = className;
        }

        return element;
    }
}