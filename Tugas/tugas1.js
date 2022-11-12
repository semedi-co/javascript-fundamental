//1
function vertikalbintang(length) {
    var row1 = "";
    for (let a = 0; a < length; a++) {
        row1 += "*";
        row1 += "\n";
    }
    return row1;
}
console.log(vertikalbintang(5));
//2
function fullbintang(length){
  var row2 = "";
  for (let vertikal =0; vertikal < length; vertikal++){
    for (let horizontal = 0; horizontal <= length; horizontal++){
      row2 +=" * ";
    }
    row2 += "\n";
  }
  return row2;
}
console.log(fullbintang(5));

//3
function naiktangga(length) {
    let row3 = "";
    for (let i = 0; i <= length; i++) {
        for (let j = 0; j < i; j++) {
            row3 += ' * ';
        }
        row3 += '\n';
    }
    return row3;
}
console.log(naiktangga(5));

//4
function tanggakebalik(length){
  let row3 = "";
  for (let i = 0; i <= length; i++){
    for(let j =length; j > i;j--){
      row3 +=" * "
    }
    row3 += '\n'
  }
  return row3;
}
console.log(tanggakebalik(5));