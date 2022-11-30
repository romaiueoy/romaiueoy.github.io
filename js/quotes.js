const quotes = [
    { 
      quote: '"Books are the mirrors of the soul."',
      author: " - Virginia Woolf",
    },
    {
      quote: '"No need to hurry. No need to sparkle. No need to be anybody but oneself."',
      author: " - Virginia Woolf",
    },
    { 
      quote: '"Talking isn\'t doing. It is a kind of good deed to say well and yet words are not deeds."',
      author: " - William Shakespeare",
    }, 
    {
      quote: '"Summer\'s lease hath all too short a date."',
      author: " - William Shakespeare",
    },
    {
      quote: '"Writing is putting one\'s obsessions in order."',
      author: " - Jean Grenier",
    },
    {
      quote: '"Like museums, libraries are a refuge from aging, disease, death. "',
      author: " - Jean Grenier",
    },
    {
      quote: '"Time destroys what is all real."',
      author: " - Jean Grenier",
    },
    {
      quote: '"There is nothing more truly artistic than to love people."',
      author: " - Vincent Van Gogh",
    }, 
    {
      quote: '"What would life be if we had no courage to attempt anything?"',
      author: " - Vincent Van Gogh",
    },
    {
      quote: '"I am seeking, I am striving, I am in it with all my heart."',
      author: " - Vincent Van Gogh",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;