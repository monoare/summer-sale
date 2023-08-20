// get price of different products

/* Product-1 */
function calculatePriceOfProduct1() {
  const productPrice1 = getInputValue("product-price-1");
  console.log(productPrice1);
  let previousPrice1 = getInputValue("total-price");
  console.log(previousPrice1);
  previousPrice1 = productPrice1 + previousPrice1;
  console.log(previousPrice1);
  const totalProductPrice1 = setElementInnerText("total-price", previousPrice1);
  addProductName("add-product-name", "product-name-1");

  const makePurchaseButton = document.getElementById("make-purchase-button");
  if (previousPrice1 > 0) {
    makePurchaseButton.disabled = false;
  }

  const myButton = document.getElementById("apply-button");
  if (previousPrice1 >= 100) {
    myButton.disabled = false;
  }

  // return previousPrice1;
}

/* Product-2 */
function calculatePriceOfProduct2() {
  const productPrice2 = getInputValue("product-price-2");
  console.log(productPrice2);
  let previousPrice2 = getInputValue("total-price");
  console.log(previousPrice2);
  previousPrice2 = productPrice2 + previousPrice2;
  console.log(previousPrice2);
  const totalProductPrice2 = setElementInnerText("total-price", previousPrice2);
  addProductName("add-product-name", "product-name-2");

  const makePurchaseButton = document.getElementById("make-purchase-button");
  if (previousPrice2 > 0) {
    makePurchaseButton.disabled = false;
  }

  const myButton = document.getElementById("apply-button");
  if (previousPrice2 >= 100) {
    myButton.disabled = false;
  }

  return totalProductPrice2;
}
/* Product-3 */
function calculatePriceOfProduct3() {
  const productPrice3 = getInputValue("product-price-3");
  console.log(productPrice3);
  let previousPrice3 = getInputValue("total-price");
  console.log(previousPrice3);
  previousPrice3 = productPrice3 + previousPrice3;
  console.log(previousPrice3);
  const totalProductPrice3 = setElementInnerText("total-price", previousPrice3);
  addProductName("add-product-name", "product-name-3");

  const makePurchaseButton = document.getElementById("make-purchase-button");
  if (previousPrice3 > 0) {
    makePurchaseButton.disabled = false;
  }

  const myButton = document.getElementById("apply-button");
  if (previousPrice3 >= 100) {
    myButton.disabled = false;
  }

  return totalProductPrice3;
}
/* Product-4 */
function calculatePriceOfProduct4() {
  const productPrice4 = getInputValue("product-price-4");
  console.log(productPrice4);
  let previousPrice4 = getInputValue("total-price");
  console.log(previousPrice4);
  previousPrice4 = productPrice4 + previousPrice4;
  console.log(previousPrice4);
  const totalProductPrice4 = setElementInnerText("total-price", previousPrice4);
  addProductName("add-product-name", "product-name-4");

  const makePurchaseButton = document.getElementById("make-purchase-button");
  if (previousPrice4 > 0) {
    makePurchaseButton.disabled = false;
  }

  const myButton = document.getElementById("apply-button");
  if (previousPrice4 >= 100) {
    myButton.disabled = false;
  }

  return totalProductPrice4;
}
/* Product-5 */
function calculatePriceOfProduct5() {
  const productPrice5 = getInputValue("product-price-5");
  console.log(productPrice5);
  let previousPrice5 = getInputValue("total-price");
  console.log(previousPrice5);
  previousPrice5 = productPrice5 + previousPrice5;
  console.log(previousPrice5);
  const totalProductPrice5 = setElementInnerText("total-price", previousPrice5);
  addProductName("add-product-name", "product-name-5");

  const makePurchaseButton = document.getElementById("make-purchase-button");
  if (previousPrice5 > 0) {
    makePurchaseButton.disabled = false;
  }

  const myButton = document.getElementById("apply-button");
  if (previousPrice5 >= 100) {
    myButton.disabled = false;
  }

  return totalProductPrice5;
}
/* Product-6 */
function calculatePriceOfProduct6() {
  const productPrice6 = getInputValue("product-price-6");
  console.log(productPrice6);
  let previousPrice6 = getInputValue("total-price");
  console.log(previousPrice6);
  previousPrice6 = productPrice6 + previousPrice6;
  console.log(previousPrice6);
  const totalProductPrice6 = setElementInnerText("total-price", previousPrice6);
  addProductName("add-product-name", "product-name-6");

  const makePurchaseButton = document.getElementById("make-purchase-button");
  if (previousPrice6 > 0) {
    makePurchaseButton.disabled = false;
  }

  const myButton = document.getElementById("apply-button");
  if (previousPrice6 >= 100) {
    myButton.disabled = false;
  }

  return totalProductPrice6;
}
// Function for Make Purchase
function homeBack() {
  return;
}

// Function for apply coupon
function coupon() {
  const couponCode = inputText("input-coupon-field");
  const totalAmount = getInputValue("total-price");
  console.log(couponCode);
  if (couponCode === "SELL200") {
    const discount = (totalAmount * 0.2).toFixed(2);
    const totalAmountPrice = (totalAmount * 0.8).toFixed(2);
    const discountTextField = document.getElementById("discount-price");
    console.log(discount);
    discountTextField.innerText = discount;
    const discountAfterPrice = document.getElementById("price-after-discount");
    discountAfterPrice.innerText = totalAmountPrice;
    console.log(totalAmountPrice);
  }
}

// function for input value in number

function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueText = inputField.innerText;
  const value = parseFloat(inputValueText);
  return value;
}

// function for getting text
function inputText(textId) {
  const inputTextValue = document.getElementById(textId);
  const inputCode = inputTextValue.value;
  return inputCode;
}

// Add product name

function addProductName(productId, productNameId) {
  console.log("productName");
  const productNameEntry = document.getElementById(productId);
  const productNameText = document.getElementById(productNameId);
  const productItemName = productNameText.innerText;
  const p = document.createElement("p");

  const count = productNameEntry.childElementCount;
  p.classList.add("text-xl", "font-medium");
  p.innerHTML = `${count + 1}.
  ${productItemName}
  `;

  productNameEntry.appendChild(p);
}

function setElementInnerText(elementId, totalPrice) {
  const element = document.getElementById(elementId);
  element.innerText = totalPrice;
}

// function to reset the data and navigate to the home page

function resetDataAndGoHome() {
  // Reset the total price
  setElementInnerText("total-price", 0.0);

  // Clear the product names
  const productNameEntry = document.getElementById("add-product-name");
  productNameEntry.innerHTML = "";

  // Disable the apply button
  const myButton = document.getElementById("apply-button");
  myButton.disabled = true;
  // Disable the apply button
  const makeButton = document.getElementById("make-purchase-button");
  makeButton.disabled = true;

  // Clear coupon and discount outputs
  const couponOutput = document.getElementById("discount-price");
  const discountOutput = document.getElementById("price-after-discount");
  couponOutput.textContent = "";
  discountOutput.textContent = "";

  // Navigate to the home page
  window.location.href = "index.html";
}
