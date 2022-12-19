const h2 = document.querySelector("h2");
const order = document.querySelector("#order");
const article = document.querySelector("#article");
const weather = document.querySelector("#weather");
// const quote = document.querySelector("#quote hidden");

function handleclick(event) {
    event.preventDefault();
    // order.className = "";
    // article.className = "";
    // weather.className = "";
    // h2.classList.toggle = "hidden";( 안먹음;;;;;)
    h2.className = "hidden";
    order.classList.remove("hidden");
    article.classList.remove("hidden");
    weather.classList.remove("hidden");
    // quote.classList.remove("hidden");
    }
    



h2.addEventListener("click",handleclick);