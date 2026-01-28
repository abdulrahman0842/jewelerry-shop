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
        <button onclick="buyOnWhatsApp('${product.name}', ${product.price} ,${product.id})">
          Buy on WhatsApp
        </button>
      `;

      container.appendChild(div);
    });
  });

function buyOnWhatsApp(name, price, id) {
  const phone = "7507194820";
  const msg = encodeURIComponent(
    `Hi, I want to buy *${name}* for ₹${price} : ID:${id}`
  );

  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}
