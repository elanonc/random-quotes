import { useState } from 'react';
import { QuotesBox } from './components/QuotesBox';

import './App.css';

const quotesArray = [
  { text: `“That’s what she said.”`, author: "Michael Scott" },
  { text: `“I have cause. It is beCAUSE I hate him.`, author: "Michael Scott" },
  { text: `“Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.”`, author: "Michael Scott" },
  { text: `“I'm not superstitious, but I am a little stitious.”`, author: "Michael Scott" },
  { text: `"I love inside jokes. I hope to be a part of one someday.”`, author: "Michael Scott" },
];

const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * quotesArray.length);
}

export function App(){
  const [quote, setQuote] = useState(quotesArray[generateRandomNumber()]);
  
  const newQuote = () => {
    setQuote(quotesArray[generateRandomNumber()]);
  }

  return (
    <div className="app">
      <QuotesBox quote={quote} newQuote={newQuote}/>
    </div>
  )
}
