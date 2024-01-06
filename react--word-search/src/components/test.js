// 각 인덱스로 채워진 격자박스
// let box = [];
// for (let i=0; i<g_height; i++) {
//   box.push(Array(g_width).fill().map((v, j) => `${i}${j}`))
// };

  // const box = Array(rowLen).fill(Array(colLen).fill(0));
  //let box = Array.from({ length: rowLen }, () => Array(colLen));
  //Array.from(Array(5), () => new Array(2)
  let box = {};
  for (let i=0; i<rowLen; i++) {
    for (let j=0; j<colLen; j++) {
      console.log(`${i}${j}`)
      box[`${i}${j}`] = 0;
    }
  }
  
  // // 각 인덱스로 채워진 격자박스
  // let box = [];
  // for (let i=0; i<rowLen; i++) {
  //   box.push(Array(colLen).fill().map((v, j) => `${i}${j}`))
  // };

function loopRandom(count, min, max) {
  const arr = [];
  while (arr.length<=count) {
    const randomNumber = extractRandom(min, max)
    if (!arr.includes(randomNumber)) arr.push(randomNumber);
  }
  return arr;
};

// console.log(box[3][0]);
// if (box[x][y] == `${x}${y}`) {
//   console.log('맞음', box[x][y])
// } else {
//   console.log('틀림')
// };

// word.map((letter, index) => {
//   // 가로 모양
//   if (box[row + index][col] == `${row + index}${col}`) {
//     // 격자에 글자 넣기
//     box[row + index][col] = letter;
//   } else {
//     // 글자가 다르면 
//     if ()
//   }
// })

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
function extractCount (givenWords) {
  let [horizontalStick, verticalStick, diagonalStick] = [2, 2, 2];
  console.log(diagonalStick / Number(givenWords.length) * 100);
  // while (diagonalStick / givenWords.length * 100 < 0.4) {
  //   for (let c=0; c<givenWords.length - 6; c++) {
  //     if (Math.floor(Math.random()*3) == 0) horizontalStick += 1;
  //     else if (Math.floor(Math.random()*3) == 1) verticalStick += 1;
  //     else diagonalStick +=1;
  //   };
  // }
  // console.log(givenWords.length, horizontalStick, verticalStick, diagonalStick, rowLen, colLen);
  // return [horizontalStick, verticalStick, diagonalStick]
}

extractCount();
