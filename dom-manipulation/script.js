const quotes = [
    { text:"", category: "" },
   
    // more quotes...
  ];
  function showRandomQuote() {
    const newQuotes=document.getElementById('newQuoteText').value;
    document.getElementById('quoteDisplay').innerHTML=newQuotes;
}
const newQuote=document.getElementById('newQuote');
newQuote.addEventListener('click',showRandomQuote);