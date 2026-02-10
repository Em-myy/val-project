import { useState } from "react";
import "./App.css";

function App() {
  const TextArray: string[] = [
    "Please na 🥺",
    "Why you doing this? 😭",
    "Oya i am sorry 💔",
    "I beg you in the name of God 🙏",
    "I will break your head oo 😡",
    "Don't be heartless 🩸",
    "Just say yes already! 💍",
  ];

  const TextColors: string[] = [
    "text-red-500",
    "text-pink-600",
    "text-purple-600",
    "text-rose-600",
    "text-orange-600",
  ];

  const [msg, setMsg] = useState<string>("");
  const [list, setList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const createShuffle = (array: string[]) => {
    const newDeck = [...array];

    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    return newDeck;
  };

  const handleRejection = () => {
    const item = list[currentIndex];
    setMsg(item);

    const nextIndex = currentIndex + 1;

    if (nextIndex > list.length - 1) {
      setList(createShuffle(TextArray));
      setCurrentIndex(0);
    } else {
      setCurrentIndex(nextIndex);
    }
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
