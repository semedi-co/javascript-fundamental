// 1. row1
let row1 = 5;
let string1 = "";

for (let i = 0; i < row1; i++) {
    string1 += "*";
    string1 += "\n"
}
console.log(string1);

// 2. row2
let row2 = 5;
let string2 = "";

for (let i = 0; i < row2; i++) {
    for (let j = 0; j < row2; j++) {
        string2 += "*";
    }
    string2 += "\n"
}
console.log(string2)

// 3. row3
let row3 = 5;
string3 = "";

for (let i = 0; i < row3; i++) {
    for (let x = 0; x <= i; x++) {
        string3 += "*";
    }
    string3 += "\n";
} 
console.log(string3);

// 4. row4 
let row4 = 5;
string4 = "";

for (let i = row4; i > 0; i--) {
    for (let k = 0; k < i; k++) {
        string4 += "*";
    }
    string4 += "\n";
} 
console.log(string4);

