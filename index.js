var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart = getCart()
 cart.push({itemName: item, itemPrice: Math.random() * 100 + 3})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (getCart().length < 1) {
       return "Your shopping cart is empty."
   } else {
       return printCart(getCart())
   }
}

function total() {
  // write your code here
  cart = getCart()
  var total = 0
  for(let i = 0; i < cart.length; i++){
     total += cart[i].itemPrice
 }
 return total
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function printCart(cart) {
       if (cart.length < 2){
           return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
       } else {
           var str = "In your cart, you have"
           for(let i = 0; i < cart.length - 1; i++){
               str += ` ${cart[i].itemName} at $${cart[i].itemPrice},`
           }
           str += ` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
           return str
       }
   }