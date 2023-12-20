"use strict"; 
let submit_button = document.querySelector(".submit_btn");
let user_Product = document.getElementById("ProductName");
let user_amount = document.getElementById("Amount");
let add_amount = document.querySelector(".amount_add");
let add_Product = document.querySelector(".product_add");
let total_amount_container = document.querySelector(".total");
let sort_button = document.querySelector(".sort_btn");

let totalAmount = 0;

submit_button.addEventListener("click", transaction);

function transaction(event) {
  event.preventDefault();

  let productName = user_Product.value.trim();
  let amount = Number(user_amount.value);

  let invalidProduct = document.getElementById("invaldide_prodect");
  let invalidAmount = document.getElementById("invaldide_Amount");

  invalidProduct.innerHTML = "";
  invalidAmount.innerHTML = "";

  if (productName === "" || isNaN(amount)) {
    setTimeout(() => {
      invalidProduct.innerHTML = "Invalid Product Name";
      invalidAmount.innerHTML = "Invalid Amount";
    }, 10);
  } 
  
  else if (amount > 0) 
  {
    let Item_name = document.createElement("ul");
    let spanadd = document.createElement("span");
    spanadd.classList = "hia";
    let all = document.createElement("div");
    all.classList = "af";
    let remove = document.createElement("button");
    remove.classList = "remove_btn";
    remove.innerHTML = '<i class="fa-solid fa-trash"></i>';

    Item_name.className = "left";
    // let Item_amount = document.createElement("div");
    // Item_amount.className = "right";

    add_Product.appendChild(all);
    all.append(Item_name, spanadd, remove);
    // Item_name.appendChild()
    // add_amount.appendChild(Item_amount);

    Item_name.textContent = `${productName}`;
    spanadd.innerHTML = `${amount}`;
    // Item_amount.textContent = `+${amount}`;

    totalAmount += amount;

// --------------------- removebutton function

    remove.addEventListener("click", function () {
      all.remove();
      totalAmount -= amount;

      // totalAmountDiv

      total_amount_container.innerHTML = "";
      let totalAmountDiv = document.createElement("div");
      totalAmountDiv.className = "total";
      let h2tag = document.createElement("p");
      h2tag.className = "h2t";
      let divamount = document.createElement("div");
      divamount.className = "total_2";
      let h1tag = document.createElement("p");
      h1tag.className = "h1t";
      h2tag.textContent = ` ${totalAmount}`;
      h1tag.innerHTML = "Total Amount";
      total_amount_container.appendChild(divamount);
      total_amount_container.appendChild(totalAmountDiv);
      totalAmountDiv.appendChild(h1tag);
      divamount.appendChild(h2tag);
    });




    // --------------------totalAmountDiv
    total_amount_container.innerHTML = "";
    let totalAmountDiv = document.createElement("div");
    totalAmountDiv.className = "total";
    let h2tag = document.createElement("p");
    h2tag.className = "h2t";
    let divamount = document.createElement("div");
    divamount.className = "total_2";
    let h1tag = document.createElement("p");
    h1tag.className = "h1t";
    h2tag.textContent = ` ${totalAmount}`;
    h1tag.innerHTML = "Total Amount";
    total_amount_container.appendChild(divamount);
    total_amount_container.appendChild(totalAmountDiv);
    totalAmountDiv.appendChild(h1tag);
    divamount.appendChild(h2tag);

    user_Product.value = "";
    user_amount.value = "";

// --------------sort function
    sort_button.addEventListener("click", sortItems);

function sortItems() {
  console.log(true);
  var Arr = Array.from(add_Product.children);

  for (var i = 1; i < Arr.length; i++) {
    for (var j = 0; j < i; j++) {
      var productNameA = Arr[i].querySelector(".hia").textContent;
      var productNameB = Arr[j].querySelector(".hia").textContent;

      if (productNameA[i] < productNameB[j]) {
        var x = Arr[i];
        Arr[i] = Arr[j];
        Arr[j] = x;
      }
    }
  }

  add_Product.innerHTML = "";
  
  Arr.forEach((item) => {
    add_Product.appendChild(item);
  });

  total_amount_container.innerHTML = "";
  let totalAmountDiv = document.createElement("div");
  totalAmountDiv.className = "total";
  let h2tag = document.createElement("p");
  h2tag.className = "h2t";
  let divamount = document.createElement("div");
  divamount.className = "total_2";
  let h1tag = document.createElement("p");
  h1tag.className = "h1t";
  h2tag.textContent = ` ${totalAmount}`;
  h1tag.innerHTML = "Total Amount";
  total_amount_container.appendChild(divamount);
  total_amount_container.appendChild(totalAmountDiv);
  totalAmountDiv.appendChild(h1tag);
  divamount.appendChild(h2tag);

  user_Product.value = "";
  user_amount.value = "";

  // document.querySelector(".sort_btn").value.reset();
}
  }
}

