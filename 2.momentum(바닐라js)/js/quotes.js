const quotes = [
    { quote: "모든 인생은 실험이다 . 더많이 실험할수록 더나아진다.",
      author:  "-랄프 왈도 에머슨",
    },
    { quote: "길을 잃는 다는 것은 곧 길을 알게 된다는 것이다.",
      author: "-동아프리카속담",
    },
    { quote: " -겨울이 오면 봄이 멀지 않으리",
      author: "-셸리",
    },
    { quote: "한 번 실패와 영원한 실패를 혼동하지 마라.",
      author: "-F.스콧 핏제랄드",
    },
    { quote: "최고에 도달하려면 최저에서 시작하라.",
    author: "-P.시루스",
    },
    { quote: "작은 기회로 부터 종종 위대한 업적이 시작된다",
    author: "-데모스테네스",
    },
    { quote: "A room without books is like a body without a soul",
    author: "-Marcus Tullius Cicero",
    },
    { quote: "Life is either a daring adventure or nothing at all.",
    author: "-Helen Keller",
    },
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "-Nelson Mandela",
    },
    { quote: "The dice is cast.",
    author: "-Julius caesar",
    },
    { quote: "요플레는 설탕 없는 게 가장 맛있다.",
    author: "이민선",
    },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;