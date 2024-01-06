import React from 'react'

function GridBox({ givenWords }) {

  let max_len;

  // 격자 크기
  let g_width = 10; // 가로
  let g_height = 5; // 세로

  // 각 인덱스로 채워진 격자박스
  let box = [];
  for (let i=0; i<g_height; i++) {
    box.push(Array(g_width).fill().map((v, j) => `${i}${j}`))
  };

  // 예시
  let x;
  let y;
  let word = 'apple';
  x = 3;
  y = 0;

  console.log(box[3][0]);
  box[3][0] = 'a';
  console.log(box[3][0]);




  

  return (
    <div className='gridBox'>
      {
        [...Array(parseInt(180))].map((val, index) => (
          <div className='itemBox' key={index}>
            <div className="item">A</div>
          </div>
        ))
      }
    </div>
  )
}

export default GridBox