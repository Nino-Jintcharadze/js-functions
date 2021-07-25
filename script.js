// 1.
let array1 = [5, 25, 89, 120, 36];
array1.push('javascript', 'python');
array1.unshift('html', 'css');
console.log(array1);
array1.pop();
array1.shift();
console.log(array1);

// 2.
let array2 = ['orange', 'banana', 'pear'];
console.log(array2.length);
array2.push('apple', 'pineapple');
array2.unshift('watermelon');
console.log(array2.length);
array2.splice(2,0, 'mango');
console.log(array2);
array2.shift();
array2.pop();
console.log(array2.length);


// 3.
let movie = {
    name: 'Ponyo',
    director: 'Hayao Miyazaki',
    year: 2008
}
Object.keys(movie).forEach( (item) => {
    console.log(item);
})

// 4.
 let book = {
     book: 'Mrs Dalloway',
     author: 'Virginia Woolf',
     Year: 1925
 }

 for (let i of Object.values(book)) {
     console.log(i);
 }

//  5.
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];

let my_array = array5.map( (x) => x / 3 );
console.log(my_array);

//  6.
let array6 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let newArray = array6.filter( (x) => typeof x == 'number');
console.log(newArray);