import React from 'react'
import { Board } from './Board'
import { GuessInput } from './GuessInput'
import { GuessResult, checkGuess, randomAnswer } from '../game-logic'
import { NUM_OF_GUESSES_ALLOWED } from '../constants'
import { GameOver } from './GameOver'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

function Game() {
  const [answer, setAnswer] = React.useState(randomAnswer)
  const [gameStatus, setGameStatus] = React.useState<'won' | 'lost' | 'playing'>('playing')
  const [guesses, setGuesses] = React.useState<GuessResult[]>([])

  const handleGuess = React.useCallback(
    (guess: string) => {
      const guessResult = checkGuess(guess, answer)
      console.log(`Guess: `, guessResult)
      const nextGuesses = [...guesses, guessResult]
      setGuesses(nextGuesses)

      if (guessResult.every((letter) => letter.status === 'correct')) {
        setGameStatus('won')
      } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost')
      }
    },
    [answer, guesses],
  )

  const handlePlayAgain = React.useCallback(() => {
    setAnswer(randomAnswer)
    setGuesses([])
    setGameStatus('playing')
  }, [])

  return (
    <Wrapper>
      <header>
        <h1>Word Game</h1>
      </header>
      <main>
        <Board guesses={guesses} />
        {gameStatus === 'playing' ? (
          <GuessInput onGuess={handleGuess} />
        ) : (
          <GameOver gameStatus={gameStatus} answer={answer} onPlayAgain={handlePlayAgain} />
        )}
      </main>
    </Wrapper>
  )
}

export default Game
