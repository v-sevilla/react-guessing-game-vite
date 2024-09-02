import React, { useState } from "react";
import Button from "./Button";

function GuessControl ({onGuess}) {

  const [currentGuess, setCurrentGuess] = useState("")

  const handleInputChange = (event) => {
    const newGuess = event.target.value
    setCurrentGuess(newGuess)
  }

  const onSubmitGuess = (e) => {
    e.preventDefault();
    const newGuess = {
      title: currentGuess,
    }
    onGuess(newGuess) 
    setCurrentGuess("")
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
