function solve() {
    //get reference to elements of interest
    // configure event listeners

    const fields = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    const petList = document.querySelector('#adoption ul');
    const adoptedList = document.querySelector('#adopted ul');

    /*
    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    }
    */

    addBtn.addEventListener('click', addPet);

    // # Add new pet
    // Read input fields
    // Validate values
    // Create new list item
    // Configure event listner for newly created element

    function addPet(event) {
        event.preventDefault();

        const [name, age, kind, owner] = fields.map(f => f.value.trim());

        /*
        const name = input.name.value.trim();
        const age = Number(input.age.value.trim());
        const kind = input.kind.value.trim();
        const owner = input.owner.value.trim();
        

        if (name == '' || input.age.value.trim() == '' || Number.isNaN(age) || kind == '' | owner == '') {
            return;
        }
        */

        if (fields.map(f => f.value.trim()).some(v => v == '' || Number.isNaN(Number(age)))) {
            return;
        }

        const contactBtn = e('button', {}, 'Contact with owner');

        const pet = e('li', {},
            e('p', {},
                e('strong', {}, name),
                ' is a ',
                e('strong', {}, age),
                ' year old ',
                e('strong', {}, kind)
            ),
            e('span', {}, `Owner: ${owner}`),
            contactBtn
        );

        contactBtn.addEventListener('click', contact);

        petList.appendChild(pet);

        /* 
        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.owner.value = '';
        */

        fields.forEach(f => f.value = '');



        // # Contact owner
        // create configuration div
        // Configure event listner for new button
        // Replace existing button with new configuration div

        function contact() {
            const confirmInput = e('input', { placeholder: 'Enter your names' });
            const confirmBtn = e('button', {}, 'Yes! I take it!');
            const confirmDiv = e('div', {},
                confirmInput,
                confirmBtn
            );

            confirmBtn.addEventListener('click', adopt.bind(null, confirmInput, pet));

            contactBtn.remove();
            pet.appendChild(confirmDiv);
        }
    }

    // # Add a pet 
    // Read and validate input 
    // Create new button for checking
    // Configure event listner for new button
    // Replace configuration div with new button
    // Change text content of Owner span
    // Move element to other list 

    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner == '') {
            return;
        }

        const checkBtn = e('button', {}, 'Checked');
        checkBtn.addEventListener('click', check.bind(null, pet));

        pet.querySelector('div').remove();
        pet.appendChild(checkBtn);

        pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

        adoptedList.appendChild(pet);
    }

    // # Checking of adopted pet
    // Remove element from DOM 

    function check(pet) {
        pet.remove();
    }

    function e(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }

        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }

            element.appendChild(item);
        }

        return element;
    }

}

