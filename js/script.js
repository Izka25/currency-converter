let cashElement= document.querySelector(".js-cash");

let currencyElement= document.querySelector(".js-currency");
let formElement= document.querySelector(".js-form");
let resultElement= document.querySelector(".js-result");

//console.log(currency);


let eur = 4.56;
let aud = 2.87;
let gbp = 5.38;
let jpy = 3.45;
let chf = 4.30;
let usd = 3.97;
let hkd = 0.51;
let cad = 3.12;
let nzd = 2.64;
let sgd = 2.95;


formElement.addEventListener("submit", (event) => {
    event.preventDefault(); 

    let currency = currencyElement.value;
    let cash = cashElement.value;
let result;

    switch(currency) {
        case"eur":
        
       result=cash / eur;
        break;

        case"aud":
        result = cash / aud;
        break;

        case "gbp":
      result = cash / gbp;
      break;
      
       case "jpy":
      result = cash / jpy;
      break;
      
       case "chf":
      result = cash / chf;
      break;
      
       case "usd":
      result = cash / usd;
      break;
      
       case "hkd":
      result = cash / hkd;
      break;
      
       case "cad":
      result = cash / cad;
      break;
      
       case "nzd":
      result = cash / nzd;
      break;
      
       case "sgd":
      result = cash / sgd;
      break;
  }
    

  resultElement.innerText = `Wychodzi:${result}`; 
  resultElement.innerText = result.toFixed(2);

});

    


    //let cash= cashElement.value;
    //let currencytwo= currencytwoElement.value;

    //console.log(cash, currencytwo);

    //let wynik= cash * currencytwo;
   // console.log(wynik);


