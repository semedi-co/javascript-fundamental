//1. Menyusun Barisan Bintang
function verticalStar(length) {
    var row1 = "";
    for (var i = 0; i < length; i++) {
        row1 += "*";
        row1 += "\n";
    }
    return row1;
}
console.log(verticalStar(5));

//2. Menyusun Barisan Bintang Dengan Nested Looping
function starLine(length){
  var row2 = "";
  for (let i =0; i < length; i++){
    for (let j = 0; j < length; j++){
      row2 +="*"
    }
    row2 += '\n'
  }
  return row2;
}
console.log(starLine(5));

//3.Menyusun Barisan Tangga Bintang Dengan Nested Looping
function ladderLine(length) {
    let row3 = '';
    for (let i = 0; i < length; i++) {
        for (let j = 0; j <= i; j++) {
            row3 += '* ';
        }
        row3 += '\n';
    }
    return row3;
}
console.log(ladderLine(5));

// Menyusun Barisan Tangga Bintang Terbalik Dengan Nested Looping
function backwards(length){
  let row3 = "";
  for (let i = 0; i < length; i++){
    for(let j =length; j > i;j--){
      row3 +="*"
    }
    row3 += '\n'
  }
  return row3;
}
console.log(backwards(5));


