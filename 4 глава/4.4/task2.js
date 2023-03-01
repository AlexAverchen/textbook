let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt("Введите 'a'", 0);
        this.b = +prompt("Введите 'b", 0);
    }
};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );