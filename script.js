console.log("quote app");
const apiURL= 'https://api.quotable.io/random';

let quoteData = document.getElementById("quoteData");
let authorName = document.getElementById("authorName");
async function getData(){
    let data = await fetch(apiURL);
    let response = await data.json();
    console.log(response);
    quoteData.innerHTML= response.content;
    authorName.innerHTML = response.author;
    
}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+ quoteData.innerHTML,"Tweet Window", "width=600,height=300")
}


getData();

