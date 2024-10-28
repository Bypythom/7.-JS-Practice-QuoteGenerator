const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/quotes/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.textContent = data.content;
    author.textContent = data.author;
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.textContent + "-- by " + author.textContent, "Tweet Window", "width=600, height=300");
}

getQuote(api_url);