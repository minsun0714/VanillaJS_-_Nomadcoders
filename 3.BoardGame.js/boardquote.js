const quotes = [
    { quote: "Do anything, but let it produce joy.",
      author:  "- Walt Whitman -",
    },
    { quote: "If you're not having a good time, find something else that gives you some joy in life",
      author: "- Penny Marshall -",
    },
    { quote: "Today was good. Today was fun. Tomorrow is another one.",
      author: "- Dr. Seuss -",
    },
    { quote: "Winning is only half of it. Having fun is the other half.",
      author: "- Bum Phillips -",
    },
    { quote: "At the end of the day, if I can say I had fun, it was a good day",
    author: "- Simone Biles -",
    },
    { quote: "No man is a failure who is enjoying life.",
    author: "- William Feather -",
    },
    { quote: "Stop seeking out the storms and enjoy more fully the sunlight.",
    author: "- Germany Kent -",
    },
    { quote: "Do what makes you happy, be with who makes you smile, laugh as much as you breathe, and I love as long as you live",
    author: "- Rachel Ann Nunes -",
    },
    { quote: "Appear weak when you are strong, and strong when you are weak.",
    author: "- 손자 -",
    },
    { quote: "Why is Monday so far from Friday, and Friday so close to monday?",
    author: "- Unknown -",
    },
    { quote: "The art of being happy lies in the power of extracting happiness from common things",
    author: "- Henry Ward Beecher -",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;