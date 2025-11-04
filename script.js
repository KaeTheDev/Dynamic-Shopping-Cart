const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

function createCartItem(name, price){
  const cartItem = document.createElement('li');
  cartItem.dataset.price = price;

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${price.toFixed(2)}`;

  cartItem.append(nameSpan, priceSpan);
  return cartItem;
}

addProductButton.addEventListener("click", function(){
  const name = productNameInput.value.trim();
  const priceInput = productPriceInput.value.trim();
  const price = parseFloat(priceInput);

  const cartItem = createCartItem(name, price);
  cart.appendChild(cartItem);
})