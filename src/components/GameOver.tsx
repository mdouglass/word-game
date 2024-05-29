import React from 'react'

export const GameOver: React.FC<{
  gameStatus: 'won' | 'lost'
  answer: string
  onPlayAgain: () => void
}> = ({ gameStatus, answer, onPlayAgain }) => {
  return (
    <div>
      {gameStatus === 'won' && <p>You won!</p>}
      {gameStatus === 'lost' && <p>Youss lost, the answer was {answer}!</p>}
      <button onClick={onPlayAgain}>Play again</button>
    </div>
  )
}
