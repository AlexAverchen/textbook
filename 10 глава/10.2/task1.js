class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); //FormatError
console.log(err.stack); // FormatError: ошибка форматирования

console.log(err instanceof SyntaxError); // true
