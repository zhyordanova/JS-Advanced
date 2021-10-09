function solve(input) {
    const parsed = JSON.parse(input);
    const escapeChar = w =>
        `${w}`
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')

    const makeRow = (tag, data) =>
        `<tr>${data.map(x => `<${tag}>${escapeChar(x)}</${tag}>`).join('')}</tr>`

    return `<table>
    ${makeRow("th", Object.keys(parsed[0]))}
    ${parsed.map(x => makeRow("td", Object.values(x))).join("\n")}
    </table>`
}


console.log(solve(
    `[{"Name":"Stamat",
    "Score":5.5},
    {"Name":"Rumen",
    "Score":6}]`
));

console.log(solve(
    `[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
    {"Name":"Gosho",
    "Score":5,
    " Grade":8},
    {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`
));