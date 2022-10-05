const responseNy = "https://flyapi.onrender.com/lis_nyc/delta";
const responseTlv = "https://flyapi.onrender.com/tlv_ber/delta";
const responseArn = "https://flyapi.onrender.com/arn_lhr/delta";

const airline = document.getElementById("delta");
const airlineHeader = document.createElement("h1");
const priceElement = document.createElement("p");

/*async function createData(response) {
  if (response.ok) {
    const data = await response.json(); // data = {"url":"delta.com","price":898}
    const price = data.price;
    const priceElement = document.createElement("p");
    priceElement.textContent = `Lisbon to New York ${price} dollars`;
    airline.append(priceElement);
  } else {
  }
}*/

(async function cityData(price) {
  airlineHeader.textContent = "Delta Airline:";
  airline.append(airlineHeader);
  const response = await fetch(responseNy);
  //createData(response);
  priceElement.textContent = `Lisbon to New York ${price} dollars`;
  airline.append(priceElement);
  //response
  /* if (responseOne.ok) {
    const data = await responseOne.json(); // data = {"url":"delta.com","price":898}
    const price = data.price;
    const priceElement = document.createElement("p");
    priceElement.textContent = `Lisbon to New York ${price} dollars`;
    airline.append(priceElement);
  } else {
  }*/
})();
(async function cityDataOne() {
  const response = await fetch(responseTlv);
  //response
  //createData(response);
  /*if (responseOne.ok) {
    const data = await responseOne.json(); // data = {"url":"delta.com","price":898}
    const price = data.price;
    const priceElement = document.createElement("p");
    priceElement.textContent = `Tel Aviv to Berlin ${price} dollars`;
    airline.append(priceElement);
  } else {
  }*/
})();
(async function cityDataThree() {
  const response = await fetch(responseArn);
  //response
  //createData(response);
  //response
  if (responseOne.ok) {
    const data = await responseOne.json(); // data = {"url":"delta.com","price":898}
    const price = data.price;

    const priceElement = document.createElement("p");
    priceElement.textContent = `Stockolm to London ${price} dollars`;
    airline.append(priceElement);
  } else {
  }
})();
