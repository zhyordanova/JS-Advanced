function focused() {
    Array
        .from(document.getElementsByTagName('input'))
        .forEach(f => {
            f.addEventListener('focus', onfocus)
            f.addEventListener('blur', onblur)
        });

        function onfocus(ev) {
            ev.target.parentNode.className = 'focused';
        }

        function onblur(ev) {
            ev.target.parentNode.className = '';
        }
}