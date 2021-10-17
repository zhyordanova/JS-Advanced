function solve(...params) {
    function paramTypes() {
        const types = {};

        function getType(params) {
            types[typeof params] = types[typeof params] ? types[typeof params] + 1 : 1;
            console.log(`${typeof params}: ${params}`);
        }

        return { types, getType };
    }

    const statics = paramTypes();

    params.forEach(e => statics.getType(e));
    Object.entries(statics.types).sort((a, b) => b[1] - a[1])
        .map(e => e[0] + ' = ' + e[1])
        .forEach(e => console.log(e));
}


solve('cat', 42, function () { console.log('Hello world!'); })