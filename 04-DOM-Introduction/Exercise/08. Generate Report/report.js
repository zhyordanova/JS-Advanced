function generateReport() {
    let elementsInput = Array.from(document.getElementsByTagName('input'));

    const resultArray = [];
    let tableRows = Array.from(document.getElementsByTagName('tr'));
    const checkedCols = [];

    for (let r = 0; r < tableRows.length; r++) {
        const row = tableRows[r];
        const object = {};

        for (let c = 0; c < row.children.length; c++) {
            const element = row.children[c];
            if (r === 0) {
                if (element.children[0].checked) {
                    checkedCols.push(c);
                }
                continue;
            }

            if (checkedCols.includes(c)) {
                let propertyName = elementsInput[c].name;
                object[propertyName] = element.textContent;
            }
        }
        
        if (r !== 0) {
            resultArray.push(object);
        }
    }

    document.getElementById('output').value = JSON.stringify(resultArray);
}