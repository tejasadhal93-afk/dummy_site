const items = [
  { name: "Filter coffee", price: 90 },
  { name: "Cold brew", price: 160 },
  { name: "Cappuccino", price: 140 },
  { name: "Masala chai", price: 60 },
  { name: "Banana bread slice", price: 110 }
];

document.getElementById("menu-list").innerHTML = items
  .map(i => `<li><span>${i.name}</span><span>₹${i.price}</span></li>`)
  .join("");

document.getElementById("deploy-time").textContent =
  "page loaded " + new Date().toLocaleString();

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = new FormData(e.target).get("name");
  document.getElementById("form-msg").textContent =
    `Thanks, ${name}. (Dummy form: nothing was sent.)`;
  e.target.reset();
});
