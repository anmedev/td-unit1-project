/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//  This creates my array of objects named quotes
const quotes = [
  {quote: "A rose by any other name would smell as sweet.", source: "William Shakespeare", citation: "Romeo and Juliet", tags: ", #play"},
  {quote: "Life is like a box of chocolates. You never know what you're going to get.", source: "Forrest Gump", year: 1994, tags: ", #film"},
  {quote: "You will face many defeats in life, but never let yourself be defeated.", source: "Maya Angelou"},
  {quote: "Never let the fear of striking out keep you from playing the game.", source: "Babe Ruth"},
  {quote: "Impossible is just an opinion.", source: "Paulo Coelho"},
  {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", source: "Nelson Mandela"},
];

// This function generates a random quote
const getRandomQuote = () => {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// This function prints a random quote
const printQuote = () => {
  const randomQuote = getRandomQuote();
    let html =
    `<p class="quote">${randomQuote.quote}</p>;
     <p class="source">${randomQuote.source}`;

    if(randomQuote.citation) {
      html += `<span class="citation">${randomQuote.citation}</span>`;
    }
    if (randomQuote.year) {
      html += `<span class="year">${randomQuote.year}</span>`;
    }
    if (randomQuote.tags) {
      html += `<span class="tags">${randomQuote.tags}</span>`;
    }

    html += `</p>`;

    // This function generates a random background color
    const getRandomColor = () => Math.floor(Math.random() * 256);
    let randomRGB = `rgb( ${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
    html += `<div style="background-color: ${randomRGB}"></div>`;

    document.body.style.background = randomRGB;
    document.getElementById('quote-box').innerHTML = html;

}

/*This function auto-refreshes the quotes every 10 seconds*/
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);