
(function() {
  const productContainer = document.querySelector('#product-container');

    // Function to fetch coffee data from the API

  async function getCoffee() {
    try {
      const results = await fetch('https://api.sampleapis.com/coffee/iced');

      if (!results.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await results.json();
      showData(data);

    } catch (error) {
      console.error('Error fetching data:', error.message);
      productContainer.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    }
  }

  // Function to display the fetched data in the product container
  
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

// Scrolling for navigation links
let links = document.querySelectorAll('.nav-link')
for(let i = 0; i < links.length; i++){
  links[i].onclick = function(){
    document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'});
  }
}