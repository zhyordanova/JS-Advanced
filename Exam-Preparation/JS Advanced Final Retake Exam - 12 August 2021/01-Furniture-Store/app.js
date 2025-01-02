window.addEventListener('load', solve);

function solve() {
    // select elements
    const modelInput = document.getElementById('model');
    const yearInput = document.getElementById('year');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');

    // select add button
    const addBtn = document.getElementById('add');

    // select furniture list from tableRows
    const furnitureList = document.getElementById('furniture-list');

    // select total price from tableFoot
    const totalPrice = document.querySelector('.total-price')

    // add event listener on addBtn
    addBtn.addEventListener('click', addFurniture);

    function addFurniture(event) {
        event.preventDefault();

        const yearValue = Number(yearInput.value);
        const priceValue = Number(priceInput.value);

        if (modelInput.value != '' && descriptionInput.value != '' && yearValue > 0 && priceValue > 0) {
            const tr = document.createElement('tr');
            tr.classList.add('info');
            tr.innerHTML = `<td>${modelInput.value}</td>
                            <td>${priceValue.toFixed(2)}</td>
                            <td><button class="moreBtn">More Info</button>
                                <button class="buyBtn">Buy it</button>
                            </td>`;

            const hideTr = document.createElement('tr');
            hideTr.classList.add('hide');
            hideTr.innerHTML = `<td>Year: ${yearValue}</td>
                                <td colspan="3">Description: ${descriptionInput.value}</td>`;

            furnitureList.appendChild(tr);
            furnitureList.appendChild(hideTr);

            const moreInfoButtons = tr.querySelectorAll('button');
            moreInfoButtons[0].addEventListener('click', showMoreInfo);
            moreInfoButtons[1].addEventListener('click', byuFurniture);
        }

        modelInput.value = '';
        yearInput.value = '';
        descriptionInput.value = '';
        priceInput.value = '';
    }

    function showMoreInfo(event) {
        const infoBtn = event.target;
        const moreInfoTr = event.target.parentElement.parentElement.nextElementSibling;

        // infoBtn.textContent = infoBtn.textContent == "More Info" ? "Less Info" : "More Info";
        // moreInfoTr.style.display = moreInfoTr.style.display == "none" ? moreInfoTr.style.display == "contents" : moreInfoTr.style.display == "none"

        if (event.target.textContent == "More Info") {
            event.target.textContent = "Less Info";
            moreInfoTr.style.display = "contents";
        } else {
            event.target.textContent = "More Info"
            moreInfoTr.style.display = "none";
        };
    }

    function byuFurniture(event) {
        const tr = event.target.parentElement.parentElement;
        const hideTr = tr.nextElementSibling;

        hideTr.parentElement.removeChild(hideTr);

        const price = Number(tr.querySelectorAll('td')[1].textContent);
        totalPrice.textContent = (Number(totalPrice.textContent) + price).toFixed(2);

        tr.parentElement.removeChild(tr);
    }
}
