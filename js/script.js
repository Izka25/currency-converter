{
    const calculateResult = (cash, currency) => {
        const eur = 4.56;
        const aud = 2.87;
        const gbp = 5.38;
        const jpy = 3.45;
        const chf = 4.30;
        const usd = 3.97;
        const hkd = 0.51;
        const cad = 3.12;
        const nzd = 2.64;
        const sgd = 2.95;

        switch (currency) {
            case "eur":

                return cash / eur;


            case "aud":
                return cash / aud;


            case "gbp":
                return cash / gbp;


            case "jpy":
                return cash / jpy;


            case "chf":
                return cash / chf;


            case "usd":
                return cash / usd;


            case "hkd":
                return cash / hkd;


            case "cad":
                return cash / cad;


            case "nzd":
                return cash / nzd;


            case "sgd":
                return cash / sgd;

        }
    };

    const updateResultText = (cash, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerText = `Wychodzi:${result}`;
        resultElement.innerText = result.toFixed(2);

    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        const cashElement = document.querySelector(".js-cash");
        const currencyElement = document.querySelector(".js-currency");



        const currency = currencyElement.value;
        const cash = cashElement.value;

        const result = calculateResult(cash, currency);


        updateResultText(cash, result, currency);



    };




    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();


    //const cash= cashElement.value;
    //const currencytwo= currencytwoElement.value;

    //console.log(cash, currencytwo);

    //const wynik= cash * currencytwo;
    // console.log(wynik);



}