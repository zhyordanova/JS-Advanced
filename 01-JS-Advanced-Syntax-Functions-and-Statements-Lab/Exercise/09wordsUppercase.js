function uppercase(text) {
    let result = text.toUpperCase()
    .match(/\w+/g)
    // .join(', ');

    console.log(result)
}

uppercase('Hi, how are you?')
uppercase('hello')