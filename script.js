(function() {
  const productContainer = document.querySelector('#product-container');

  async function getCoffee() {
    const results = await fetch('https://api.sampleapis.com/coffee/iced');
    const data = await results.json();
    console.log(data);

    showData(data);
  }

  function showData(data) {
    productContainer.innerHTML = "";

    data.forEach(item => {
      const productCard = document.createElement('div');
      const titleElement = document.createElement('h3');
      const description = document.createElement('p');

      titleElement.innerHTML = item.title;
      description.innerHTML = item.description;
      productCard.classList.add('product-card')

      productContainer.appendChild(productCard);
      productCard.appendChild(titleElement);
      productCard.appendChild(description);
    });
  }

  getCoffee();
})();
