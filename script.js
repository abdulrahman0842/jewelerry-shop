fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-list");

    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";

      div.innerHTML = `
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>${product.description}</p>
        <button onclick="buyOnWhatsApp('${product.name}', ${product.price})">
          Buy on WhatsApp
        </button>
      `;

      container.appendChild(div);
    });
  });

function buyOnWhatsApp(name, price) {
  const phone = "91XXXXXXXXXX";
  const msg = encodeURIComponent(
    `Hi, I want to buy *${name}* for ₹${price}`
  );

  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}
