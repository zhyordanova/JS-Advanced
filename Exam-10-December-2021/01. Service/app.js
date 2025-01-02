window.addEventListener('load', solve);

function solve() {
    const productTypeField = document.querySelector('select'); 
    const descriptionField = document.getElementById('description');
    const clientName = document.getElementById('client-name');
    const clientPhone = document.getElementById('client-phone');
    
    const sentBtn = document.querySelector('form button');
    
    const receivedOrders = document.getElementById('received-orders');
    const completeOrders = document.getElementById('completed-orders');
    
    const clearBtn = document.querySelector('.clear-btn');

    sentBtn.addEventListener('click', onSubmit);

    function onSubmit(event) {
        event.preventDefault();

        const productValue = productTypeField.value;
        const name = clientName.value.trim();
        const phone = clientPhone.value.trim();
        const descriptionValue = descriptionField.value;

        if ( name == '' || phone == '' || descriptionValue == '') {
            return;
        }

        const divElement = e('div', '', 'container');
        const product = e('h2', `Product type for repair: ${productValue}`);
        const client = e('h3', `Client information: ${name}, ${phone}`);
        const description = e('h4', `Description of the problem: ${descriptionValue}`);
        const startBtn = e('button', `Start repair`, 'start-btn');
        const finishBtn = e('button', `Finish repair`, 'finish-btn');

        divElement.appendChild(product);
        divElement.appendChild(client);
        divElement.appendChild(description);
        divElement.appendChild(startBtn);
        divElement.appendChild(finishBtn);

        receivedOrders.appendChild(divElement);

        finishBtn.disabled = true;

        clientName.value = '';
        clientPhone.value  = '';
        descriptionField.value  = '';

        startBtn.addEventListener('click', () => {
            finishBtn.disabled = false;
            startBtn.disabled = true;
        });

        finishBtn.addEventListener('click', () => {
            const divComplete = e('div', '', 'container');
            divComplete.appendChild(product);
            divComplete.appendChild(client);
            divComplete.appendChild(description);

            completeOrders.appendChild(divComplete);
            receivedOrders.removeChild(divElement);

        });

        clearBtn.addEventListener('click', () => {
        receivedOrders.appendChild(divElement);
            clearBtn.nextElementSibling.remove(divElement);
            receivedOrders.removeChild(divElement);
        });
    }

    function e(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;

        if (className) {
            element.className = className;
        }

        return element;
    }
}