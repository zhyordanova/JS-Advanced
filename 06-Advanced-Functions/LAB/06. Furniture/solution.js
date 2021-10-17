function solve() {
  const table = document.querySelector('table.table tbody');
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

  generateBtn.addEventListener('click', generate);
  buyBtn.addEventListener('click', buy);

  const items = [];

  function generate(ev) {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const checkBox = createElement('input', { type: 'checkbox' });

      const row = createElement('tr', {},
        td(createElement('img', { src: item.img })),
        td(createElement('p', {}, item.name)),
        td(createElement('p', {}, item.price)),
        td(createElement('p', {}, item.decFactor)),
        createElement('td', {}, checkBox)
      );

      items.push({
        element: row,
        isChecked,
        item
      });

      table.appendChild(row);

      function isChecked() {
        return checkBox.checked;
      }
    }
  }

  function td(...content) {
    return createElement('td', {}, ...content);
  }

  function createElement(type, props, ...content) {
    const element = document.createElement(type);

    for (let prop in props) {
      element[prop] = props[prop];
    }

    for (let entry of content) {
      if (typeof entry == 'string' || typeof entry == 'number') {
        entry = document.createTextNode(entry);
      }
      element.appendChild(entry);
    }

    return element;
  }

  function buy(ev) {
    const furniture = items
      .filter(i => i.isChecked())
      .reduce((acc, { item: cur }, index, array) => {
        acc.names.push(cur.name);
        acc.total += Number(cur.price);
        acc.decFactor += Number(cur.decFactor) / array.length;
        return acc;
      }, { names: [], total: 0, decFactor: 0 });

    const result = `Bought furniture: ${furniture.names.join(', ')}
Total price: ${furniture.total.toFixed(2)}
Average decoration factor: ${furniture.decFactor}`

    output.value = result;
  }
}