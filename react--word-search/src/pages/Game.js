import React from 'react';
import GridBox from '../components/GridBox';

function Game() {
  const givenWord = ['CHIHUAHUA', 'BULLDOG', 'TERRIER',
  'COLLIE', 'BOXER', 'HOUND']
  
  return (
    <div className='game'>
      <h2>Subject</h2>

      <div className="playbox">
        <GridBox></GridBox>
        <div className="word-list">
          {
            givenWord.map((val) => {
              return (
                <div data-name={val}>{val}</div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Game