import { useEffect, useState } from "react";
import "./App.css";
import { Figure } from "./Figure";

export const App = () => {
  const [word] = useState("hello world");
  const [guessInput, setGuessInput] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);

  const resetGame = () => {
    setCorrectGuesses([]);
    setIncorrectGuesses([]);
  };

  const handleGuess = (guess: string) => {
    if (word.includes(guess)) {
      setCorrectGuesses((old) => [...old, guess]);
    } else {
      setIncorrectGuesses((old) => [...old, guess]);
    }
  };

  useEffect(() => {
    if (incorrectGuesses.length === 6) {
      alert("You lose, resetting game.");
      resetGame();
    }
  }, [word, incorrectGuesses]);

  useEffect(() => {
    let complete = true;
    let wordStripped = word.replace(" ", "");

    for (let i = 0; i < wordStripped.length; i++) {
      if (!correctGuesses.includes(wordStripped.charAt(i))) {
        complete = false;
      }
    }

    if (complete) {
      alert("You win, resetting game.");
      resetGame();
    }
  }, [word, correctGuesses]);

  return (
    <div className="App">
      <Figure incorrectCount={incorrectGuesses.length} />
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
        Incorrect:{" "}
        {incorrectGuesses.length === 0
          ? "No incorrect guesses."
          : incorrectGuesses.map(
              (guess, index) => `${index === 0 ? guess : `, ${guess}`}`
            )}
      </p>
      <p className="correct">
        Correct:{" "}
        {correctGuesses.length === 0
          ? "No correct guesses."
          : correctGuesses.map(
              (guess, index) => `${index === 0 ? guess : `, ${guess}`}`
            )}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (guessInput.length === 0) {
            alert("input cannot be empty");
          } else if (
            correctGuesses.includes(guessInput) ||
            incorrectGuesses.includes(guessInput)
          ) {
            alert("already guessed character.");
            setGuessInput("");
          } else {
            handleGuess(guessInput);
            setGuessInput("");
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
};

export default App;
