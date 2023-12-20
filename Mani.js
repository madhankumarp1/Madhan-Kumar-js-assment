let submit_button = document.querySelector(".submit_btn");
let user_Product = document.getElementById("ProductName");
let user_amount = document.getElementById("Amount");

let add_amount = document.querySelector(".amount_add");
let add_Product = document.querySelector(".product_add");
let total_amount_container = document.querySelector(".total");



let totalAmount = 0;

submit_button.addEventListener("click", transaction);

function transaction(event) {
  event.preventDefault();

  let productName = user_Product.value.trim();
  let amount = Number(user_amount.value);

  let invalidProductMessage = document.getElementById("invaldide_prodect");
  let invalidAmountMessage = document.getElementById("invaldide_Amount");

  invalidProductMessage.innerHTML = "";
  invalidAmountMessage.innerHTML = "";

  if (productName === "" || isNaN(amount)) {
    setTimeout(() => {
      invalidProductMessage.innerHTML = "Invalid Product Name";
      invalidAmountMessage.innerHTML = "Invalid Amount";
    }, 10);
  } else if (amount > 0) {
    let Item_name = document.createElement("ul");
    Item_name.className = "left";
    // let Item_amount = document.createElement("div");
    // Item_amount.className = "right";

    add_Product.appendChild(Item_name);
    // add_amount.appendChild(Item_amount);

    Item_name.textContent = `${productName} ${amount}`;
    // Item_amount.textContent = `+${amount}`;

    totalAmount += amount;


    // totalAmountDiv

    total_amount_container.innerHTML = "";

    let totalAmountDiv = document.createElement("div");

    totalAmountDiv.className = "total";
    
    let h2tag = document.createElement('p');

    h2tag.className = "h2t";


    let divamount = document.createElement("div");
    
    divamount.className = "total_2";

    let h1tag = document.createElement('p');

    h1tag.className = "h1t";

    h2tag.textContent = ` ${totalAmount}`;
    h1tag.innerHTML="Total Amount";
    total_amount_container.appendChild(divamount);
    total_amount_container.appendChild(totalAmountDiv);
    totalAmountDiv.appendChild(h1tag)
    divamount.appendChild(h2tag);

  }
}

