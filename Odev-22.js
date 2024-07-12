/* 
1. Bir dizideki kelimeleri uzunluklarına göre sıralamak için sort metodunu kullanın.

Örnek Dizi: ['fish', 'dolphin', 'whale', 'shark']


2. Bir dizideki sayıları mutlak değere göre sıralamak için sort metodunu kullanın.

Örnek Dizi: [-15, 3, -9, 6, -2, 20, -7]
*/


// Örnek dizi 1
let animals=['fish', 'dolphin', 'whale', 'shark'];

animals.sort (function(a,b){
    return a.length-b.length;
});
console.log(animals);
//

//Örnek Dizi 2

let numbers=[-15, 3, -9, 6, -2, 20, -7];
numbers.sort (function(a,b){
    return Math.abs(a)-Math.abs(b)
});
console.log(numbers);


//

