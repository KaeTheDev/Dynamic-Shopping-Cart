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
  const quantity = parseInt(item.querySelector('input').value);
  updateTotalPrice(-(price * quantity));
  item.remove();
}

function createCartItem(name, price){
  const cartItem = document.createElement('li');
  cartItem.dataset.price = price;

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${price.toFixed(2)}`;

    
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.min = '1';
  quantityInput.value = '1';
  quantityInput.dataset.previous = '1';
  quantityInput.addEventListener('input', function() {
    const newQuantity = parseInt(quantityInput.value);
    const oldQuantity = parseInt(quantityInput.dataset.previous);
    const diff = newQuantity - oldQuantity;
    updateTotalPrice(price * diff);
    quantityInput.dataset.previous = newQuantity;
  });

  const removeBtn = document.createElement('button');
  removeBtn.innerText = 'Remove';
  removeBtn.addEventListener('click', function(event) {
    removeItem(event);
    if (cart.children.length === 0) {
    totalPrice = 0;
      totalPriceSpan.textContent = totalPrice.toFixed(2);
  }
  });

  cartItem.append(nameSpan, priceSpan, quantityInput, removeBtn);
  return cartItem;
}

addProductButton.addEventListener("click", function(){
  const name = productNameInput.value.trim();
  const priceInput = productPriceInput.value.trim();
  const price = parseFloat(priceInput);


  if(name === "" || priceInput === ""){
    alert("Please Enter Values!")
    return;
}

if (isNaN(price) || price <= 0) {
    alert("Please enter a valid positive price!");
    return;
}

  const cartItem = createCartItem(name, price);
  cart.appendChild(cartItem);

  updateTotalPrice(price);

  productNameInput.value = '';
  productPriceInput.value = '';
})