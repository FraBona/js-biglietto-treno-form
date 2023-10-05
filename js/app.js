const btnDOMElement = document.getElementById('btn-calc');
const km = 0.21;

const kmDOMElement = document.getElementById('kmDaPercorrere');
console.log(kmDOMElement);

const discountDOMElement = document.getElementById('discount');
console.log(discountDOMElement);

const priceDOMElement = document.querySelector('.price');


btnDOMElement.addEventListener('click', function(){
  const kmDaPercorrere = kmDOMElement.value;
  console.log(kmDaPercorrere);
  console.log(discountDOMElement.value);

  const eta = discountDOMElement.value; 

  let sconto, prezzoBase, prezzoScontato, prezzo;

  prezzoBase = kmDaPercorrere * km;
  console.log(prezzoBase);

  if(eta == 0){
    sconto = prezzoBase * 20 / 100;
    prezzoScontato = prezzoBase - sconto;
    prezzo = prezzoScontato.toFixed(2);
  }
  else if(eta == 2){
    sconto = prezzoBase * 40 / 100;
    prezzoScontato = prezzoBase - sconto;
    prezzo = prezzoScontato.toFixed(2);
  }
  else{
    prezzo = prezzoBase;
  }
  console.log(prezzo);

  priceDOMElement.innerHTML = prezzo + '&euro;';
})