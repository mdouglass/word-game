import React from 'react'

export const GuessInput: React.FC<{ onGuess: (guess: string) => void }> = ({ onGuess }) => {
  const [guess, setGuess] = React.useState('')

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onGuess(guess)
      setGuess('')
    },
    [guess, onGuess],
  )

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        pattern="[A-Z]{5}"
        title="5 letter word"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toLocaleUpperCase().slice(0, 5))}
      />
    </form>
  )
}
