import React from 'react'
import { Guess } from './Guess'
import { NUM_OF_GUESSES_ALLOWED } from '../constants'
import { range } from '../utils'
import { GuessResult } from '../game-logic'

export const Board: React.FC<{ guesses: GuessResult[] }> = ({ guesses }) => {
  const allGuesses = range(0, NUM_OF_GUESSES_ALLOWED).map(
    (i) => guesses[i] ?? Array(5).fill({ letter: ' ', status: 'empty' }),
  )

  return (
    <div>
      {allGuesses.map((guess, guessIndex) => (
        <Guess key={guessIndex} guess={guess} />
      ))}
    </div>
  )
}
