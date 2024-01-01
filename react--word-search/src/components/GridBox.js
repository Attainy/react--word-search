import React from 'react'

function GridBox() {
  const gridCellStyle = {
    border: "1px solid gray"
  }

  const wordarr = ['CHIHUAHUA', 'BULLDOG', 'TERRIER',
  'COLLIE', 'BOXER', 'HOUND']

  return (
    <div className='gridBox'>
      {
        [...Array(parseInt(180))].map(() => (
          <div className='itemBox' style={gridCellStyle}>
            <div className="item">A</div>
          </div>
        ))
      }
    </div>
  )
}

export default GridBox