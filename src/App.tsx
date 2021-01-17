import { useState } from "react";
import "./App.css";

function App() {
  const [word] = useState("hello world");
  const [guessInput, setGuessInput] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([
    "a",
    "a",
    "a",
  ]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([
    "a",
    "a",
    "a",
  ]);

  const handleGuess = (guess: string) => {
    if (word.includes(guess)) {
      setCorrectGuesses((old) => [guess, ...old]);
    } else {
      setIncorrectGuesses((old) => [guess, ...old]);
    }
  };

  return (
    <div className="App">
      <p className="word">
        {word
          .split("")
          .map((character) => {
            if (
              correctGuesses.includes(character) ||
              incorrectGuesses.includes(character) ||
              character === " "
            ) {
              return character;
            } else {
              return "_";
            }
          })
          .join(" ")}
      </p>
      <p className="incorrect">
        {incorrectGuesses.map(
          (guess, index) => `${index === 0 ? guess : `, ${guess}`}`
        )}
      </p>
      <p className="correct">
        {correctGuesses.map(
          (guess, index) => `${index === 0 ? guess : `, ${guess}`}`
        )}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            correctGuesses.includes(guessInput) ||
            incorrectGuesses.includes(guessInput)
          ) {
            alert("already guessed character.");
          } else {
            handleGuess(guessInput);
          }
        }}
      >
        <label htmlFor="guess"></label>
        <input
          type="text"
          name="guess"
          value={guessInput}
          onChange={(e) => {
            if (e.target.value.length <= 1) {
              setGuessInput(e.target.value);
            }
          }}
        />
        <button type="submit">Guess</button>
      </form>
    </div>
  );
}

export default App;
