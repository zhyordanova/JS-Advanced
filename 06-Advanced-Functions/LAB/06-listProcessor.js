function solution(array) {
    result = [];

    array.forEach((pair) => {
        [command, string] = pair.split(' ')
        return obj(command, string);
    })

    function obj(command, string) {
        if (command == 'add') {
            result.push(string);
        } else if (command == 'remove') {
            result = result.filter((i) => i !== string);
        } else {
            console.log(result.join(','))
        }
    }
}


solution(
    ['add hello', 'add again', 'remove hello', 'add again', 'print']
);

solution(
    ['add pesho', 'add george', 'add peter', 'remove peter','print']
);