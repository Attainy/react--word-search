import React from 'react'

function GridBox({ givenWords }) {



  return (
    <div className='gridBox'>
      {
        [...Array(parseInt(180))].map(() => (
          <div className='itemBox'>
            <div className="item">A</div>
          </div>
        ))
      }
    </div>
  )
}

export default GridBox