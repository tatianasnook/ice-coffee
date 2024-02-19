(function() {
  const card = document.querySelector('#coffee-card');

  async function getCoffee() {
    const results = await fetch('https://api.sampleapis.com/coffee/iced');
    const data = await results.json();
    console.log(data);

    showData(data);
  }

  function showData(data) {
    card.innerHTML = "";

    data.forEach(item => {
      const titleElement = document.createElement('p');
      const description = document.createElement('p');
      titleElement.innerHTML = item.title;
      description.innerHTML = item.description;
      card.appendChild(titleElement);
      card.appendChild(description);
    });
  }

  getCoffee();
})();
