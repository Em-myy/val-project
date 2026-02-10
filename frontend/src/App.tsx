import { useState } from "react";
import "./App.css";

const TextArray: string[] = [
  "Please na 🥺",
  "Why you doing this? 😭",
  "Oya i am sorry 💔",
  "I beg you in the name of God 🙏",
  "I will break your head oo 😡",
  "My chest is paining me 🏥",
  "Don't let the devil use you 👿",
  "Is it because I don't have Benz? 🚗",
  "I will report you to your mummy! 📞",
  "God is watching you oo 👀",
  "Even if it is pity, just pity me 😞",
  "I have already bought the gift... 🎁",
  "Are you seeing someone else? 🤨",
  "Just say Yes let everybody rest 😴",
  "You are breaking a innocent heart 🩸",
  "I will cry blood oo 🩸",
  "Okay, take my ATM card then 💳",
  "Last chance or I faint now 😵",
  "Why are you so wicked? 😈",
  "Fine face, wicked heart 💔",
];

const TextColors: string[] = [
  "text-red-500",
  "text-pink-600",
  "text-purple-600",
  "text-rose-600",
  "text-orange-600",
];

const createShuffle = (array: string[]) => {
  const newDeck = [...array];

  for (let i = newDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
  }

  return newDeck;
};

function App() {
  const [msg, setMsg] = useState<string>("");
  const [msgColor, setMsgColor] = useState<string>("text-gray-700");
  const [list, setList] = useState<string[]>(() => createShuffle(TextArray));
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleRejection = () => {
    const item = list[currentIndex];
    setMsg(item);

    const randomColor =
      TextColors[Math.floor(Math.random() * TextColors.length)];
    setMsgColor(randomColor);

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
      <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-pink-200 via-red-100 to-pink-300 p-4">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border-4 border-white transform transition-all hover:scale-[1.01]">
          <form className="flex flex-col items-center">
            <div className="mb-8">
              <h1 className="text-4xl font-extrabold text-rose-600 drop-shadow-sm mb-2">
                Be My Val? 🌹
              </h1>
              <p className="text-gray-500 font-medium">I promise I'm nice...</p>
            </div>

            <div className="flex gap-6 w-full justify-center mb-8">
              <button
                type="submit"
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full text-lg shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex-1 cursor-pointer"
              >
                YES 😍
              </button>

              <button
                type="button"
                onClick={handleRejection}
                className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full text-lg shadow-lg transform transition hover:-translate-y-1 active:scale-95 flex-1 cursor-pointer"
              >
                NO 😢
              </button>
            </div>
          </form>

          <div className="h-24 flex items-center justify-center">
            {msg && (
              <h1
                key={msg}
                className={`text-2xl font-black ${msgColor} animate-bounce transition-all duration-300`}
              >
                {msg}
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
