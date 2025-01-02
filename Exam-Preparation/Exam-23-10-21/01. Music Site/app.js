window.addEventListener('load', solve);

function solve() {
    //get reference to elements of interest
    // configure event listeners for

    const genreInput = document.getElementById('genre');
    const nameSongInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const songList = document.getElementById('all-hits');
    const saveSongList = document.getElementById('saved-hits')
    const addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', addSong);

    // # Add new song
    // Read input fields 
    // Validate value
    // Create new list
    // Configure event listener to the newly created elements
    // clear the inut fields 

    function addSong(ev) {
        ev.preventDefault();

        if (genreInput != '' && nameSongInput != '' && authorInput != '' && dateInput != '') {
            const song = document.createElement('div');
            song.classList.add('hits-info');
            song.innerHTML = `<img scr="./static/img/img.png">
                <h2>Genre: ${genreInput.value}</h2>
                <h2>Name: ${nameSongInput.value}</h2>
                <h2>Author: ${authorInput.value}</h2>
                <h3>Date: ${dateInput.value}</h2>
                <button class="save-btn">Save song</button>
                <button class="like-btn">Like song</button>
                <button class="delete-btn">Delete song</button>`

            songList.appendChild(song);

            const saveBtn = document.getElementsByClassName('save-btn')
            const likeBtn = document.getElementsByClassName('like-btn')
            const deleteBtn = document.getElementsByClassName('delete-btn')

            saveBtn.addEventListener('click', saveSong);
            likeBtn.addEventListener('click', likeSong);
            deleteBtn.addEventListener('click', deleteSong);
        }




    }

    // # Like song
    // Increase the like count
    // disable the like button

    // # Save song
    // Move the song to the Saved songs list
    // Remove it from the collections

    function saveSong(ev, song) {
        saveSongList.appendChild(song);


    }

    // # Delete song
    // Delete the song from the list



}