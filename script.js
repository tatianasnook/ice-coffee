const btn = document.querySelector('#btn');
const img = document.querySelector('#coffee');

btn.addEventListener('click', getCoffee)

async function getCoffee(){
  const results = await fetch('https://api.sampleapis.com/coffee/iced');
  const data = await results.json();
  console.log(data)
}