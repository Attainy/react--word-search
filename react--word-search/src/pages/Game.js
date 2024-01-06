import React from 'react';
import GridBox from '../components/GridBox';

function Game() {
  const givenWords = ['CHIHUAHUA', 'BULLDOG', 'TERRIER',
  'COLLIE', 'SHEPHERD', 'BOXER', 'HOUND',  'BEAGLE', 
  'CORGI', 'ROTTWEILER', 'PINSCHER', 'DALMATIAN', 
  'SETTER', 'MASTIFF', 'DACHSHUND']
  

  
  return (
    <div className='game'>
      <h2>Subject</h2>

      <div className="playbox">
        <GridBox givenWords={givenWords}></GridBox>
        <div className="word-list">
          {
            givenWords.map((val, idx) => {
              return (
                <div data-name={val} key={idx}>{val}</div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Game