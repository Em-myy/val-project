import { useState } from "react";
import "./App.css";

function App() {
  const TextArray: string[] = [
    "Please na",
    "Why",
    "Oya i am sorry",
    "I beg you in the name of God",
    "I will break your head oo",
  ];

  const randomIndex = Math.floor(Math.random() * TextArray.length);

  const [msg, setMsg] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const createShuffle = (array: string[]) => {
    const newDeck = [...array];

    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
  };

  const handleRejection = () => {
    const item = list[currentIndex];
    setMsg(item);

    const nextIndex = currentIndex + 1;
  };

  return (
    <>
      <div>
        <form>
          <h1>WILL YOU BE MY VAL?</h1>
          <button type="submit">YES</button>
          <button type="button" onClick={handleRejection}>
            NO
          </button>
        </form>
        <div>
          <h1>{msg}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
