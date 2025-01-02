window.addEventListener('load', solve);

function solve() {
    const fields = Array.from(document.querySelectorAll('form input'));
    const allHits = document.querySelector('#all-hits div');
    const saveHits = document.querySelector('#saved-hits div');
    const totalLikes = document.querySelector('#total-likes div');

    const addButton = document.querySelector('form button');

    addButton.addEventListener('click', onAddHit);

    function onAddHit(event) {
        event.preventDefault();

        const [genre, name, author, date] = fields.map(f => f.value.trim());

        if (fields.map(f => f.value.trim()).some(v => v == '')) {
            return alert('All field are required!');
        }

        const divElement = e('div', '', 'hits-info');
        const imgElement = e('img', './static/img/img.png');
        const genreElement = e('h2', `Genre: ${genre}`);
        const nameElement = e('h2', `Name: ${name}`);
        const authorElement = e('h2', `Author: ${author}`);
        const dateElement = e('h3', `Date: ${date}`);
        const saveBtn = e('button', 'Save song', 'save-btn');
        const likeBtn = e('button', 'Like song', 'like-btn');
        const deleteBtn = e('button', 'Delete', 'delete-btn');

        divElement.appendChild(imgElement);
        divElement.appendChild(genreElement);
        divElement.appendChild(nameElement);
        divElement.appendChild(authorElement);
        divElement.appendChild(dateElement);
        divElement.appendChild(saveBtn);
        divElement.appendChild(likeBtn);
        divElement.appendChild(deleteBtn);

        allHits.appendChild(divElement);

        document.querySelector('form').reset();

        saveBtn.addEventListener('click', () => {
            const saveSongDiv = e('div', '', 'hits-info');
            saveSongDiv.appendChild(imgElement);
            saveSongDiv.appendChild(genreElement);
            saveSongDiv.appendChild(nameElement);
            saveSongDiv.appendChild(authorElement);
            saveSongDiv.appendChild(dateElement);
            saveSongDiv.appendChild(deleteBtn);

            saveHits.appendChild(saveSongDiv);
            allHits.removeChild(divElement);
        });

        likeBtn.addEventListener('click', () => {
            const pElement = totalLikes.querySelector('p').textContent.split(' ');
            let countLikes = Number(pElement[2]);

            countLikes++;

            totalLikes.querySelector('p').textContent = `Total Likes: ${countLikes}`;
            likeBtn.disabled = true;
        });

        deleteBtn.addEventListener('click', () => {
            let deleteDiv = deleteBtn.parentNode;
            deleteBtn.parentNode.parentNode.removeChild(deleteDiv);
        })
    }

    function e(type, content, className) {
        let element = document.createElement(type);

        if (type == 'img') {
            element.src = content;
        } else {
            element.textContent = content;
        }

        if (className) {
            element.className = className;
        }

        return element;
    }
}
