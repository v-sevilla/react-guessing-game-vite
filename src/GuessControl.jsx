import React, { useState } from "react";
import Button from "./Button";

function GuessControl ({onGuess}) {

  const [currentGuess, setCurrentGuess] = useState("")

  const handleInputChange = (event) => {
    const newGuess = Number(event.target.value)
    setCurrentGuess(newGuess)
  }

  const onSubmitGuess = (e) => {
    e.preventDefault();
    onGuess(currentGuess) 
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
