let newQuoteBtn = document.getElementById("new-quote");
let allQuotes = [...localQuotes];

function generateNewQuote() {
  if (allQuotes.length === 0) {
    allQuotes = [...localQuotes];
  }

  let quoteRandom = Math.floor(Math.random() * allQuotes.length);
  let quoteText = document.getElementById("quote");
  let quoteAuthor = document.getElementById("author");

  if (
    allQuotes[quoteRandom].author === null ||
    allQuotes[quoteRandom].author === ""
  ) {
    quoteAuthor.innerHTML = "UnKnown";
  } else {
    quoteAuthor.innerHTML = allQuotes[quoteRandom].author;
  }

  quoteText.innerHTML = allQuotes[quoteRandom].text;

  allQuotes.splice(quoteRandom, 1);
}

generateNewQuote();
newQuoteBtn.addEventListener("click", generateNewQuote);
