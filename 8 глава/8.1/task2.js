let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined

/* Ответьте на вопрос: как быстрее получить значение glasses –
 через pockets.glasses или через head.glasses? 
 При необходимости составьте цепочки поиска и сравните их.
 
 Без разницы*/