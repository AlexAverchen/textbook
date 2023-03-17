function sumTo(n) {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i;
    }
    return result;
}

//console.log(sumTo(100));

function sumToRecurs(n) {
    return (n == 1) ? n : (n + sumToRecurs(n - 1)); // при 100000 выдаёт ошибку о превышении стека вызовов
}
//console.log(sumToRecurs(100));

function progression(n) {
    return (n * (n + 1) / 2);
}

console.log(progression(100))

/* function measurePerformance(func) {
    console.time('function');
    func;
    console.timeEnd('function');
}

measurePerformance(sumTo(100000));
measurePerformance(sumToRecurs(100000));
measurePerformance(progression(100000)); */