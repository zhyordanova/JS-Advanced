window.addEventListener('load', solve);

function solve() {
    const fields = document.querySelectorAll('.container-text input');
    const addButton = document.querySelector('.container-text button');
    const allHits = document.querySelector('#all-hits div');
    const savedHits = document.querySelector('#saved-hits div');
    const totalLikes = document.querySelector('#total-likes div');

    const inputs = {
        genre: fields[0],
        name: fields[1],
        author: fields[2],
        date: fields[3],
    }

    addButton.addEventListener('click', (event) => {
        event.preventDefault();

        const genre = inputs.genre.value.trim();
        const name = inputs.name.value.trim();
        const author = inputs.author.value.trim();
        const date = inputs.date.value.trim();

        if (genre == '' || name == '' || author == '' || date == '') {
            return alert('All field are required!')
        }

        const divElement = e('div', ``, 'hits-info');
        const imgElement = e('img', './static/img/img.png');
        const genreElement = e('h2', `Genre: ${genre}`);
        const nameElement = e('h2', `Name: ${name}`);
        const authorElement = e('h2', `Author: ${author}`);
        const dateElement = e('h3', `Date: ${date}`);
        const saveSongBtn = e('button', 'Save song', 'save-btn');
        const likeSongBtn = e('button', 'Like song', 'like-btn');
        const deleteSongBtn = e('button', 'Delete', 'delete-btn');

        divElement.appendChild(imgElement);
        divElement.appendChild(genreElement);
        divElement.appendChild(nameElement);
        divElement.appendChild(authorElement);
        divElement.appendChild(dateElement);
        divElement.appendChild(saveSongBtn);
        divElement.appendChild(likeSongBtn);
        divElement.appendChild(deleteSongBtn);

        allHits.appendChild(divElement);

        Array.from(fields).forEach(f => f.value = '');

        saveSongBtn.addEventListener('click', () => {
            const saveSongDivEl = e('div', ``, "hits-info");
            saveSongDivEl.appendChild(imgElement);
            saveSongDivEl.appendChild(genreElement);
            saveSongDivEl.appendChild(nameElement);
            saveSongDivEl.appendChild(authorElement);
            saveSongDivEl.appendChild(dateElement);
            saveSongDivEl.appendChild(deleteSongBtn);

            savedHits.appendChild(saveSongDivEl);
            saveSongBtn.parentNode.parentNode.removeChild(divElement);
        });

        likeSongBtn.addEventListener('click', () => {
            const pElement = totalLikes.querySelector('p').textContent.split(' ');
            let countLikes = Number(pElement[2]);
            countLikes++;
            totalLikes.querySelector('p').textContent = `Total Likes: ${countLikes}`;
            likeSongBtn.disabled = true;
        });

        deleteSongBtn.addEventListener('click', () => {
            let divDeleteEl = deleteSongBtn.parentNode;
            deleteSongBtn.parentNode.parentNode.removeChild(divDeleteEl);            
        })
    })

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