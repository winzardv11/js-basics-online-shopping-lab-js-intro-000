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
  var report = "In your cart, you have "
  case cart === 1:
  report = report + `${cart[0].itemName} at ${cart[0].itemPrice}.`
    return report
    break;
  case cart === 2:

  return report
  break;
  case cart > 2:
  for (var i = 0; i < cart.length - 1; i++) {
    report += `${cart[i].itemName} at ${cart[i].itemPrice},`
  }
  report += `and ${cart[cart.length - 1].itemName} at ${cart[cart.length - 1].itemPrice}.`
  return report
  break;
  default:
  return "Your shopping cart is empty."
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
