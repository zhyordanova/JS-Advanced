window.addEventListener('load', solve);

function solve() {
    //get reference to element of interest

    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price')

    //configure event listener
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addFurniture);

    // select furniture list from the tableRows
    const furnitureList = document.getElementById('furniture-list');
    const totalPrice = document.querySelector('.total-price');

    // # Add new furniture
    // Read input fields
    // Validate value
    // Create new table of items

    function addFurniture(event) {
        event.preventDefault();

        const yearValue = Number(yearInput.value);
        const priceValue = Number(priceInput.value);

        if (modelInput.value != '' && descriptionInput.value != '', yearValue > 0 && priceValue > 0) {

            const moreInfoBut = e('button', {}, 'More Info').classList.add("moreBtn");
            const buyBtn = e('button', {}, 'Buy it').classList.add("buyBtn");

            const furniture = e('tr', {},
                e('td', {}, modelInput.value),
                e('td', {}, priceValue.toFixed(2)),
                e('td', {},
                    moreInfoBut,
                    buyBtn

                )
            );

            furnitureList.appendChild(furniture).classList.add("info");

            moreInfoBut.addEventListener('click', showMoreInfo);
            buyBtn.addEventListener('click', buy);
        }

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';

        function showMoreInfo(event) {
            // const infoBtn = event.target;

            // infoBtn.textContent = infoBtn.textContent == 'More Info' ? 'Less Info' : 'More Info';
            // infoTr.style.display = infoTr.style.display == 'none' ? infoTr.style.display == 'contents' : infoTr.style.display = 'none';

            const hideInfo = e('tr', {},
                'Year:',
                e('td', {}, yearValue),
                'Description:',
                e('td', {}, descriptionInput.value),
            );
            furnitureList.appendChild(hideInfo).classList.add("hide");

            const infoTr = event.target.parentElement.parentElement.nextElementSibling

            if (event.target.textContent == "More Info") {
                event.target.textContent = "Less Info";
                infoTr.style.display = 'contents';
            } else {
                event.target.textContent = "More Info";
                infoTr.style.display = 'none';
            }

        }

        function buy(event) {
            const tableRow = event.target.parentElement.parentElement;

            totalPrice.textContent = (Number(totalPrice.textContent) + priceValue).toFixed(2);

            tableRow.remove();
        }
    }

    // # Add functionality for more info, less info
    // # Create buy button
    // Total price of the furnitures
    // Remove the row

    function e(type, attr, ...contents) {
        const element = document.createElement(type);
        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of contents) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }
}
