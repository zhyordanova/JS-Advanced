// Selecting DOM elements
const elemetn = document.getElementById('content');
document.querySelecto('#content');
document.querySelectorAll('ul li');

// Get/Set content;
element.textContent;
elemetn.value;

// Traversing DOM
element.parentElement;
element.children;

//Create element
const para = document.createElement('p');

// Adding to DoM
element.appendChild(para);

// Removing from DoM
para.remove();

//Eevent
element.addEventListener('click', (e) => {
    console.log('e.target');
})

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

    /// example how to retutn the DOM element in the fuction where you need using the above function
    return createElement('li',
    createElement('span', movieName),
    createElement('strong', 'Hall: ' + hall),
    createElement('div',
        createElement('strong',
            ticketPrice.toFixed(2)),
            ticketSold,
            button
        )
    );



async function request(url, options) {
    if (options && options.body != undefined) {
        Object.assign(options, {
            headers: {
                'Content-Type': 'application/json',
                // 'X-Authorization': userData.token
            },
        });
    }

    const response = await fetch(url, options);

    if (response.ok != true) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();

    return data;
}

// Clear the inputs field after the value is set after clicking the button:

Array.from(fields).forEach(f => f.value = '');

        /* 
        input.name.value = '';
        input.age.value = '';
        input.kind.value = '';
        input.owner.value = '';
        */


        const fields = Array.from(document.querySelectorAll('#container input'));
        const [name, age, kind, owner] = fields.map(f => f.value.trim());
        if (fields.map(f => f.value.trim()).some(v => v == '' || Number.isNaN(Number(age)))) {
            return;
        }