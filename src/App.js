import { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
export default function App() {
  var emojisWeKnow = Object.keys(emojiDictionary);
  var [meaning, setInput] = useState("");
  function inputHandler(event) {
    var inputValue = event.target.value;
    var meaning = emojiDictionary[inputValue];
    setInput(meaning);
  }
  function clickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setInput(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Translator</h1>
      <input onChange={inputHandler}></input>
      <h2>{meaning}</h2>
      <h3> emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => clickHandler(emoji)}
            style={{ padding: "0.5rem", fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
