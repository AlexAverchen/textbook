function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let j = i; 
        let shooter = function() {
            console.log(j);
        };
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();

console.log(army.length)

army[0]();
army[5]();
