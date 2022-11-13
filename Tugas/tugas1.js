
for( let row1 = 1;row1 < 5; row1++){
    console.log('*');
}
function rows2(bintang) {
    let hasil= '';
    for (let i =0; i < bintang; i++) {
        for (let j = 0; j < bintang; j++) {
            hasil += '*'
        }
        hasil += '\n'
    }
    return hasil;
}
console.log(rows2(5));

function rows3(bintang) {
    let hasil= '';
    for (let i =0; i < bintang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '*'
        }
        hasil += '\n'
    }
    return hasil;
}
console.log(rows3(5));

function rows4(bintang) {
    let hasil= '';
    for (let i =0; i < bintang; i++) {
        for (let j = bintang; j > i; j--) {
            hasil += '*'
        }
        hasil += '\n'
    }
    return hasil;
}
console.log(rows4(5));

