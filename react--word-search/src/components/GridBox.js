import React from 'react'

const rowIndexArray = [];
const colIndexArray = [];

let word;
let startRowIndex;
let startColIndex;
let rowIndex;
let colIndex;
let check;

function GridBox({ givenWords }) {

  // min <= x <= max 범위에서 난수 추출
  function extractRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 단어들 중 가장 긴 길이
  const maxLen = Math.max.apply(null, givenWords.map(val => val.length));

  // 가로와 세로 길이
  const minWidth = 10;
  const rowLen = extractRandom(Math.min(minWidth, maxLen + 2), Math.max(minWidth, maxLen + 2))
  const colLen = extractRandom(Math.min(minWidth, maxLen + 2), Math.max(minWidth, maxLen + 2))

  // 가로, 세로, 대각선 각 모양별 개수 (최소 2개씩 설정)
  let [horizontalCount, verticalCount, diagonalCount] = [2, 2, 2];

  // 대각선 개수는 전체의 40% 미만으로 설정
  let c = 0;
  while ((diagonalCount / givenWords.length < 0.4) && (c<=givenWords.length - 6)) {
    let randNum = extractRandom(0, 2);
    if (randNum === 0) horizontalCount += 1;
    else if (randNum === 1) verticalCount += 1;
    else diagonalCount +=1;
    c++;
  }

  let box = Array.from({ length: rowLen }, () => Array.from({length: colLen}, () => 0));
  
  // 단어 랜덤으로 추출해서 시작 위치 지정하기
  function randomExtractWord (shape) {
    // 단어 랜덤 추출
    word = givenWords[extractRandom(0, givenWords.length - 1)];
    console.log(word)

    // 시작 위치
    startRowIndex = extractRandom(0, rowLen - word.length + 1);
    startColIndex = extractRandom(0, colLen - word.length + 1);

    if (shape === "horizon") {
      startRowIndex = extractRandom(0, rowLen - 1);
      while (rowIndexArray.includes(startRowIndex)) {
        startRowIndex = extractRandom(0, rowLen - 1)
      }
    } else if (shape === "vertical") {
      startColIndex = extractRandom(0, colLen - 1);
      while (colIndexArray.includes(startColIndex)) {
        startColIndex = extractRandom(0, colLen - 1)
      }
    }

    return [word, startRowIndex, startColIndex];
  };

  function checkArray (shape) {
    [word, startRowIndex, startColIndex] = randomExtractWord(shape);

    // 정방향
    [...word].map((letter, index) => {
      rowIndex = shape === "horizon" ? startRowIndex : startRowIndex + index;
      colIndex = shape === "vertical" ? startColIndex : startColIndex + index;

      console.log('중간', box[rowIndex][colIndex]);
      let boxLetter = box[rowIndex][colIndex];
      if (boxLetter === 0 || boxLetter === letter) check = true;
      else check = false;
    })

    return [check, word, startRowIndex, startColIndex];
  };

  // 격자에 단어 배열하기
  function placeWord (shape) {
    
    [check, word, startRowIndex, startColIndex] = checkArray(shape);

    // check
    console.log(check);
    if (check === true) {
      [...word].map((letter, index) => {
        rowIndex = shape==="horizon" ? startRowIndex : startRowIndex + index;
        colIndex = shape==="vertical" ? startColIndex : startColIndex + index;
  
        box[rowIndex][colIndex] = letter;
      })
    } else return;
    
    // return givenWords.filter((val) => val !== word);
  }

  // 실행
  // [horizontalCount, verticalCount, diagonalCount]
  // [...Array(horizontalCount)].map((v, i) => placeWord('horizon'));
  // [...Array(verticalCount)].map((v, i) => placeWord('vertical'));
  // [...Array(diagonalCount)].map((v, i) => placeWord('diagonal'));
  
  console.log(box);
  

  return (
    <div className='gridBox' style={{gridTemplateColumns: `repeat(${rowLen}, 1fr)`}}>
      {
        [...Array(parseInt(rowLen * colLen))].map((val, index) => (
          <div className='itemBox' key={index}>
            <div className="item">A</div>
          </div>
        ))
      }
    </div>
  )
}

export default GridBox