console.log('***** Cart Functions *****');

// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// create a global variable named basket and set it to an empty array

let basket = [];

console.log('Items in basket:', basket);

//take an input parameter for a string 'item'
// add the new item to the global array basket
//return true indicating the item was added

function addItem(item){
  basket.push(item);
  return true;
}

console.log('Adding Nectarines:', addItem('Nectarines'));
console.log('Adding Starfruit:', addItem('Starfruit'));
console.log('Adding Paupu Fruit:', addItem('Paupu Fruit'));
console.log('Adding Devil Fruit:', addItem('Devil Fruit'));

// create a function called listItems
// have listItems loop over the items in the array basket
// console.log(); each inidividual item on a new line

function listItems(){
  for(let i = 0; i < basket.length; i++) {
    let x = basket[i];
    return x;
  }
}

console.log(listItems(basket));

// NEEDS MORE WORK

// create a function called empty
// have empty reset the basket to an empty array

function empty(){
  basket = [];
}

empty();
console.log(basket);

// NEEDS MORE WORK

// MAKE SURE YOU WRITE CODE IN THE FILE TO TEST EVERY FUNCTION YOU WRITE
// EXAMPLE

console.log('Basket is ${basket}');
console.log('Adding apples (expect trueS)', addItem('apples'));
console.log('Basket is now ${basket}');
//
