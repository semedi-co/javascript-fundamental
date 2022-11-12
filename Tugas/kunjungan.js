let name = "Hafid";
let age = 19;
let money = 350000;
let drink = {
  juice: 50000,
  anggur: 300000,
};

let sisa;
if (name === "") {
  console.log("Anda tidak boleh masuk");
} else {
  if (age < 17) {
    sisa = money - drink.juice;
    console.log("Anda hanya boleh memesan juice");
    if (money < drink.juice) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      console.log(`Anda bisa pesan minum. Sisa uang anda: ${sisa}`);
    }
  } else {
    sisa = money - drink.anggur;
    // console.log('Anda hanya boleh memesan anggur');
    if (money < drink.anggur) {
      console.log("Uang tidak cukup. Anda harus pulang.");
    } else {
      console.log(`Anda bisa pesan minum. Sisa uang anda: ${sisa}`);
    }
  }
}
