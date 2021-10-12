function deleteByEmail() {
    // seelct input field and read value;
    const input = document.querySelector('input[name="email"]');

    // if textContent matches input value -> remove row;
    const rows = Array
        .from(document.querySelector('tbody').children)
        .filter(r => r.children[1].textContent == input.value);

    rows.forEach(r => r.remove());

    // if there is a match print 'Delete.' field
    // otherwise, print 'Not found.'
    document.getElementById('result').textContent = rows.length > 0 ? 'Delete.' : 'Not found.'
}