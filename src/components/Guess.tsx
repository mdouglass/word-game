import React from 'react'
import styled from 'styled-components'
import { range } from '../utils'
import { GuessResult, LetterStatus } from '../game-logic'

const styles = {
  empty: {
    textColor: 'white',
    borderColor: 'hsl(0deg 0% 75%)',
    backgroundColor: 'white',
  },
  incorrect: {
    textColor: 'white',
    backgroundColor: 'hsl(0deg 0% 25%)',
    borderColor: 'hsl(0deg 0% 25%)',
  },
  misplaced: {
    textColor: 'white',
    backgroundColor: 'hsl(50deg 100% 30%)',
    borderColor: 'hsl(50deg 100% 30%)',
  },
  correct: {
    textColor: 'white',
    backgroundColor: 'hsl(150deg 70% 30%)',
    borderColor: 'hsl(150deg 70% 30%)',
  },
}

const Letter = styled.span<{ $status: LetterStatus }>`
  width: 20%;
  aspect-ratio: 1 / 1;
  display: grid;
  place-content: center;
  font-size: 2rem;
  border: 2px solid ${(props) => styles[props.$status].borderColor};
  color: ${(props) => styles[props.$status].textColor};
  background-color: ${(props) => styles[props.$status].backgroundColor};
`

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 4px;
`

export const Guess: React.FC<{ guess: GuessResult }> = ({ guess }) => {
  return (
    <Wrapper>
      {guess.map(({ letter, status }, letterIndex) => (
        <Letter key={letterIndex} $status={status}>
          {letter}
        </Letter>
      ))}
    </Wrapper>
  )
}
