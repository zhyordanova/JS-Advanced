function editElement(element, match, replacer) {
    const text = element.textContent;
    const matcher = new RegExp(match, 'g');

    element.textContent = text.replace(matcher, replacer);
    }

    const elements = document.getElementsByTagName('li');

    for (let item of elements) {
        console.log(item);
    }