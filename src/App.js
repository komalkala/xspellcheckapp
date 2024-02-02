import { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
  th2: "the",
};

export default function App() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const handleChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const words = inputText.split(" ");
    const correctedWords = words.map((item) => {
      const correctedWord = customDictionary[item.toLowerCase()];
      return correctedWord || item;
    });
    correctedWords.join(" "); 
    const firstCorrection = correctedWords.find(
      (word, idx) => word !== words[idx]
    );
    setSuggestions(firstCorrection || "");
  };
  return (
    <div style={{ marginLeft: 30 }}>
      <h1>Spell Check and Auto-correction</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestions && (
        <p>
          Did you mean: <strong>{suggestions}</strong>?
        </p>
      )}
    </div>
  );
}