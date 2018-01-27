var cart = [];

function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1
}

function getCart() {

 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var key = item
 cart.push({ [key]: getRandomInt() });
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {

  var result = ''


    if(cart.length === 0) {
      console.log( `Your shopping cart is empty.`)
    } else if (getCart().length === 1) {
      console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`)
    } else if (getCart().length === 2) {
      console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]} and ${Object.keys(getCart()[1])[0]} at $${getCart()[1][Object.keys(getCart()[1])[0]]}.`)

    } else {
      for (var i = 1; i < getCart().length -1; i++) {
      result = result + ` ${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]},`
    }

console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]},` + result + ` and ${Object.keys(getCart()[getCart().length -1])[0]} at $${getCart()[getCart().length -1][Object.keys(getCart()[getCart().length -1])[0]]}.`)

}
}

function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum = sum + getCart()[i][Object.keys(getCart()[i])[0]]
  }
  return sum;
}

// The `removeFromCart()` function accepts one argument, the name of the item that should be removed.
//     + If the cart does not contain a matching item, the function should print out `That item is not
//     in your cart.` and return the unchanged cart.
//     + If the item *is* present in the cart, the function should remove the object from the cart and
//     then return the updated cart.
//     + ***HINT***: Check each object's key (the name of the item) to see if it matches the parameter,
//     then remove it if it matches. You might find [hasOwnProperty](https://developer.mozilla.org/en-US/do
//       cs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) to be useful.
function removeFromCart(item) {
  var result = '';
for (var i = 0; i < cart.length; i ++) {
 if (cart[i].hasOwnProperty(item)) {
   result = cart.splice(cart.indexOf(cart[i]), 1);
 }
}
return result.length === 0 ? `That item is not in your cart.`: cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
