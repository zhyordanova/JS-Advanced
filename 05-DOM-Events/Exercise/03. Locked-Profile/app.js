function lockedProfile() {
    // add toggle event listener to all profile buttons

    document.getElementById('main').addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            onToggle(ev);
        } else if (ev.target.tagName == 'INPUT' && ev.target.type =='radio') {
            onLockToggle(ev);
        }
    }

    /**
     * 
     * Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', OnToggle));
     */

    function onToggle(ev) {
        const profile = ev.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked

        if (isActive) {
            // find associated profile details
            const infoDiv = profile.querySelector('div');

            // if it`s visible -> hide it and display label 'Show more'
            // otherwise hide it and display label 'Hide it'
            if (ev.target.textContent == 'Show more') {
                infoDiv.style.display = 'block';
                ev.target.textContent = 'Hide it';
            } else {
                infoDiv.style.display = '';
                ev.target.textContent = 'Show more';
            }
        }
    }


    ////////////////////////////////////////////////////////////////

    /**
     * 
     *  const radioButtons = Array.from(document.querySelectorAll('input[type="radio"]'));
            for (let radioButton of radioButtons) {
                radioButton.addEventListener('click', onLockToggle);
    }
     */

    function onLockToggle(ev) {
        const button = ev.target.parentElement.querySelector('button');
        const profile = ev.target.parentElement;
        const infoDiv = profile.querySelector('div')

        if (ev.target.value == 'lock') {
            button.disabled = true;
            infoDiv.style.display = '';
        } else {
            button.disabled = false;
        }
    }
}
