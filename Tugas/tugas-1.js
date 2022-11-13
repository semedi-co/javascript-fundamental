let hasil = '';

for(let a = 0; a < 5; a++) { //pengulangan untuk baris
    hasil += '*'; // untuk menambahkan isi
    hasil += '\n'; // (\n) karakter di javascript untuk mencetak baris baru
};
console.log(hasil);
console.log("===============");
//=======================================================

let hasil2 = '';

for(let a = 0; a < 5; a++) {
    for(let b = 0; b < 5; b++) { // pengulangan untuk kolom
        hasil2 += '*';
    }
    hasil2 += '\n';
}
console.log(hasil2);
console.log("===============");
//=======================================================

let hasil3 = '';

for(let a = 0; a < 5; a++) {
    for(let c = 0; c <= a; c++) {
        hasil3 += '*';
    }
    hasil3 += '\n';
}
console.log(hasil3);
console.log("===============");
//=======================================================

let hasil4 = '';

for(let a = 5; a > 0; a--) {
    for(let c = 0; c < a; c++) {
        hasil4 += '*';
    }
    hasil4 += '\n';
}
console.log(hasil4);
console.log("===============");