let cart = [];
let total = 0;

function showCategory(category) {
  document.querySelectorAll(".category").forEach(sec => {
    sec.style.display =
      category === "all" || sec.classList.contains(category)
        ? "grid"
        : "none";
  });
  document.getElementById("orders").style.display = "none";
}

function showOrders() {
  document.querySelectorAll(".category").forEach(
    sec => (sec.style.display = "none")
  );
  document.getElementById("orders").style.display = "block";
  renderOrders();
}

function addItem(name, price) {
  // check if already in cart
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateTotal();
  renderOrders();
}

function changeQuantity(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateTotal();
  renderOrders();
}

function updateTotal() {
  total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderOrders() {
  const orderList = document.getElementById("orderList");
  orderList.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "order-item";
    div.innerHTML = `
      <span>${item.name}</span>
      <div class="qty-controls">
        <button onclick="changeQuantity(${index}, -1)">-</button>
        <span>${item.quantity}</span>
        <button onclick="changeQuantity(${index}, 1)">+</button>
      </div>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
    `;
    orderList.appendChild(div);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert(`Order placed! Total: $${total.toFixed(2)}`);
  cart = [];
  total = 0;
  renderOrders();
}
