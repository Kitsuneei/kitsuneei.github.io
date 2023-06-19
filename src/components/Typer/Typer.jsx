import { useEffect, useState } from "react";

const Typer = ({
  phrases = ["abcdef", "awesome", "neat"],
  typeSpeed = 500,
  eraseSpeed = 500,
  typeWait = 2000,
  eraseWait = 2000,
  startingIndex,
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    // Variables
    let currentPhraseIndex = 0; // Index of the current phrase
    let currentCharacterIndex = 0; // Index of the current character
    let timeout; // Timeout for the setTimeout function
    let textClone;

    const type = () => {
      // Add the current character to the text
      setText((currentText) => {
        {
          return (textClone =
            currentText + phrases[currentPhraseIndex][currentCharacterIndex++]);
        }
      });

      // Increment the current character index

      // If the current character index is less than the length of the current phrase
      if (currentCharacterIndex < phrases[currentPhraseIndex].length - 1) {
        // Set the timeout for the next character
        timeout = setTimeout(type, typeSpeed);
      } else {
        // Otherwise, erase the phrase
        clearTimeout(timeout);
        timeout = setTimeout(erase, eraseWait);
      }
    };

    const erase = () => {
      if (textClone.length !== 0) {
        setText((currentText) => {
          return (textClone = currentText.slice(0, -1));
        });
        timeout = setTimeout(erase, eraseSpeed);
      } else {
        currentPhraseIndex++;
        if (currentPhraseIndex >= phrases.length) {
          currentPhraseIndex = 0;
        }
        currentCharacterIndex = 0;
        clearTimeout(timeout);
        timeout = setTimeout(type, typeWait);
      }
    };

    if (startingIndex !== undefined) {
      currentPhraseIndex = startingIndex;
      setText(() => {
        return (textClone = phrases[currentPhraseIndex]);
      });
      timeout = setTimeout(erase, eraseWait);
    } else {
      // Start typing
      timeout = setTimeout(type, typeWait);
    }
    return () => clearTimeout(timeout);
  }, []);

  return <span>{text}</span>;
};
export default Typer;
