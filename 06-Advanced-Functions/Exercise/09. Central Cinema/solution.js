function solve() {
    document.querySelector('#add-new button').addEventListener('click', onClickScreen);
    const inputsFields = Array.from(document.querySelectorAll('#container input'));
    const onScreen = document.querySelector('#movies ul');
    const archived = document.querySelector('#archive ul');

    // add movies to on screen section
    function onClickScreen(ev) {
        ev.preventDefault();

        //set value of the input fields
        const movieName = inputsFields[0].value;
        const hall = inputsFields[1].value;
        const ticketPrice = Number(inputsFields[2].value);

        if (!movieName || !hall || !ticketPrice) {
            return;
        }

        function createMovie() {
            const ticketSold = document.createElement('input');
            ticketSold.placeholder = 'Tickets Sold'
            const button = createElement('button', 'Archive');
            button.addEventListener(
                'click',
                e => onClickArchive(e, movieName, ticketPrice, ticketSold)
            );

            return createElement(
                'li',
                createElement('span', movieName),
                createElement('strong', 'Hall: ' + hall),
                createElement('div',
                    createElement('strong',
                        ticketPrice.toFixed(2)),
                    ticketSold,
                    button
                )
            );
        }

        onScreen.appendChild(createMovie());
        inputsFields.forEach(e => e.value = '');
    }

    // archive movie and calculate incomes
    function onClickArchive(ev, name, price, ticketSold) {
        const sold = Number(ticketSold.value);

        if (!sold) {
            return;
        }

        function createArchive() {
            const button = createElement('button', 'Delete');
            const liElement = createElement(
                'li',
                createElement('span', name),
                createElement('strong', 'Total amount: ' + (sold * price).toFixed(2)),
                button
            );

            button.addEventListener(
                'click',
                () => {
                    liElement.remove();
                })

            return liElement;
        }

        archived.appendChild(createArchive());
        ev.target.parentElement.parentElement.remove();
    }

    // clear archive
    document.querySelector('#archive button').addEventListener(
        'click',
        (ev) => {
            const archiveSection = ev.target.parentNode;
            Array.from(archiveSection.querySelectorAll('li')).forEach(
                e => e.remove()
            );
        }
    )

    //create DOM elements with any type and values
    function createElement(type, ...values) {
        const newElement = document.createElement(type);

        if (typeof values[0] === 'string') {
            newElement.textContent = values[0];
        } else {
            values.forEach(
                e => newElement.appendChild(e)
            );
        }

        return newElement;
    }
}

