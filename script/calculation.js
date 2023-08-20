// get price from different products
/* Product-1 */
function calculatePriceOfProduct1() {
  const productPrice1 = getInputValue("product-price-1");
  console.log(productPrice1);
  return productPrice1;
}
/* Product-2 */
function calculatePriceOfProduct2() {
  const productPrice2 = getInputValue("product-price-2");
  console.log(productPrice2);
  return productPrice2;
}
/* Product-3 */
function calculatePriceOfProduct3() {
  const productPrice3 = getInputValue("product-price-3");
  console.log(productPrice3);
  return productPrice3;
}
/* Product-4 */
function calculatePriceOfProduct4() {
  const productPrice4 = getInputValue("product-price-4");
  console.log(productPrice4);
  return productPrice4;
}
/* Product-5 */
function calculatePriceOfProduct5() {
  const productPrice5 = getInputValue("product-price-5");
  console.log(productPrice5);
  return productPrice5;
}
/* Product-6 */
function calculatePriceOfProduct6() {
  const productPrice6 = getInputValue("product-price-6");
  console.log(productPrice6);
  return productPrice6;
}

// function for input value in number

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.innerText;
  const value = parseFloat(inputValueText);
  return value;
}
