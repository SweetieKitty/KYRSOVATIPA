document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("api-data-container");

  const productIds = [
    "737628064502", 
    "123456789011", 
    "123456789013" 
  ];

  const fetchProductData = (id) => {
    const apiUrl = `https://world.openfoodfacts.org/api/v0/product/${id}.json`;

    return fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Помилка завантаження даних");
        }
        return response.json();
      });
  };

  Promise.all(productIds.map(id => fetchProductData(id)))
    .then(results => {
      results.forEach(data => {
        const card = document.createElement("div");
        card.className = "catalog-item";

        if (data.status === 1 && data.product) {
          const product = data.product;

          card.innerHTML = `
            <h3>${product.product_name || "Назва відсутня"}</h3>
            <p><strong>Бренд:</strong> ${product.brands || "Невідомо"}</p>
            <p><strong>Калорії:</strong> ${product.nutrition_grades || "Невідомо"}</p>
            <img src="${product.image_url || ''}" alt="${product.product_name || 'Зображення відсутнє'}" class="product-image">
          `;
        } else {
          card.innerHTML = "<p>Дані про продукт відсутні.</p>";
        }
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Помилка:", error);
      container.innerHTML = "<p>Не вдалося завантажити дані</p>";
    });
});
