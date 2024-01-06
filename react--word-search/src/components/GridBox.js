import React from 'react'

function GridBox({ givenWords }) {

  let grid_width;
  let grid_height;
  let horizon_count;
  let vertical_count;
  let diagonal_count;


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