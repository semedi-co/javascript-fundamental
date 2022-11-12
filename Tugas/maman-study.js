let name = "Maman";
let age = 20;
let money = 350000;
let juice = 50000;
let anggur = 30000;
let total = anggur + juice;

if (name !== "") {
  if (age >= 17) {
    console.log("hanya boleh memesan juice!");
    if (money >= juice) {
      console.log(`anda hanya boleh memesan juice! ${money - juice}`);
    } else {
      console.log("uang anda tidak cukup");
    }
  } else {
    console.log("anda hanya boleh memesan juice!");
    if (money >= juice) {
      console.log(`hanya boleh memesan juice! ${money - juice}`);
    } else {
      console.log("Uang anda tidak cukup anda harus pulang!");
    }
  }
} else {
  console.log("Uang anda tidak boleh masuk");
}

// if (name !== "Maman") {
//   console.log("Anda Tidak Boleh Masuk!");
// } else if (age <= 17) {
//   console.log("Anda boleh memesan juice!");
// } else if (age >= 17) {
//   console.log("Anda boleh memesan Anggur!");
// } else if (money >= total) {
//   console.log("Anda bisa pesan minum");
// } else if (money >= total) {
//   console.log("Uang tidak cukup. Anda harus pulang");
// } else {
//   console.log(money);
// }
