const addToCartButtons = document.getElementsByClassName("addToCartBtn");
const orderDetailsContainer = document.querySelector(".order-details");
const bill = document.querySelector("#money");
const searchButton = document.querySelector(".search-button");

Array.from(addToCartButtons).forEach((button, index) => {
  button.addEventListener("click", () => {
    // Add order detail
    const menuItem = button.closest(".menu-item");
    const name = menuItem.querySelector(".menu-name").textContent;
    const price = menuItem.querySelector(".menu-price").textContent;
    let quantity = menuItem.querySelector("input[type='number']").value;
    if (quantity == "" || quantity <= 0) {
      return;
    }
    menuItem.querySelector("input[type='number']").value = "";
    quantity = Math.ceil(quantity);
    const orderDetail = document.createElement("div");
    orderDetail.classList.add("order-detail");

    const nameElement = document.createElement("p");
    nameElement.classList.add("order-item");
    nameElement.textContent = name;

    const priceElement = document.createElement("p");
    priceElement.classList.add("order-price");
    priceElement.textContent = price;

    const quantityElement = document.createElement("p");
    quantityElement.classList.add("order-quantity");
    quantityElement.textContent = quantity;
    quantityElement.innerHTML += `<button class="delete-button">X</button>`;

    orderDetail.appendChild(nameElement);
    orderDetail.appendChild(priceElement);
    orderDetail.appendChild(quantityElement);

    orderDetailsContainer.appendChild(orderDetail);

    // Increment the bill
    let initialBill = parseFloat(bill.innerHTML.substring(1));
    let priceOfItem = parseFloat(price.substring(1));
    initialBill += priceOfItem * quantity;
    initialBill = initialBill.toFixed(2);
    bill.innerHTML = "$" + initialBill.toString();
  });
});

// Add event listener to each delete button
orderDetailsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    // Get the parent order-detail element
    const orderDetail = event.target.closest(".order-detail");

    // Retrieve the quantity and price
    const quantity = orderDetail.querySelector(".order-quantity").textContent;
    const price = orderDetail.querySelector(".order-price").textContent;
    // Remove the order-detail element
    orderDetail.remove();

    // Update the total amount
    const totalElement = document.getElementById("money");
    const currentTotal = parseFloat(totalElement.textContent.replace("$", ""));
    const itemTotal = parseFloat(price.replace("$", "")) * parseInt(quantity);
    const newTotal = currentTotal - itemTotal;
    totalElement.textContent = `$${newTotal.toFixed(2)}`;
  }
});

//Add event lister to search
searchButton.addEventListener("click", (event) => {
  const searchInput = document.querySelector("#searchInput");
  const search = searchInput.value.toLowerCase();
  const menuItems = document.getElementsByClassName("menu-item");
  Array.from(menuItems).forEach((Item, index) => {
    const menuName = Item.querySelector(".menu-name").textContent.toLowerCase();
    if (menuName.includes(search)) {
      Item.classList.remove("invisible");
    } else {
      Item.classList.add("invisible");
    }
  });
});

//Add listner to pay button
document.querySelector(".pay-button").addEventListener("click", async (e) => {
  // Retrieve order details from the div
  const orderDetailsDiv = document.querySelectorAll(".order-detail");
  const orderData = [];
  let totalOrderPrice = 0;
  Array.from(orderDetailsDiv).forEach((orderItem) => {
    const name = orderItem.getElementsByClassName("order-item")[0].innerText;
    const price = parseFloat(
      orderItem.getElementsByClassName("order-price")[0].innerText.substring(1)
    );
    const quantity = parseInt(
      orderItem.getElementsByClassName("order-quantity")[0].innerText
    );

    if (name != "Name") {
      const totalPrice = price * quantity;
      totalOrderPrice += totalPrice;
      totalOrderPrice.toFixed(2);

      orderData.push({
        name: name,
        price: `$${price}`,
        quantity: quantity,
        totalPrice: `$${totalPrice.toFixed(2)}`,
      });
    }
  });

  if (totalOrderPrice <= 0) {
    alert("choose item first");
    return;
  }

  // Send POST request to "/order"
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const postData = {
    orderList: orderData,
    totalOrderPrice: `$${totalOrderPrice.toFixed(2)}`,
    date: date.toLocaleDateString("en-US", options),
  };
  try {
    const res = await fetch("/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: postData }),
    });

    if (res.redirected) {
      window.location.href = res.url; // Perform the redirect
    } else {
      return response.text();
    }
  } catch (err) {
    alert("Could not place your order . Try again later");
  }

  console.log(postData);
});
