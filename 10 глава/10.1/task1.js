/* function f() {
    try {
        console.log('начало');
        return "result";
    } catch (e) {
        ///
    } finally {
        console.log('очистка!');
    }
}

f(); // начало, очистка */

function f() {
    try {
        console.log('начало');
        throw new Error("ошибка");
    } catch (e) {
        if("не могу обработать ошибку") {
            throw e;
        }
    } finally {
        console.log('очистка!')
    }
}

f(); // начало, очистка, ошибка