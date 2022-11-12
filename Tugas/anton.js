let name = "anton"
let age = 21;
let money = 500000;
let juice = 50000;
let anggur = 300000;

let sisa;

if (name === "null"){
    if(age < 17){
        console.log("anda boleh memesan anggur");
        if(money >= anggur){
            console.log("anda bisa pesan minum, sisa uang anda ${money-anggur}");
        }else{
            console.log("uang anda tidak cukup silahkan pulang");
        }
    }else{
        console.log("anda dapat membeli juice");
        if(money >= juice){
            console.log("anda bisa pesan minum, sisa uang anda ${money-juice}");
        }else{
            console.log("uang anda tidak cukup,silahkan pulang");
        }
    }
}else{
    console.log("anda tidak boleh masuk");
}
// }else if(name === "anton"){
//     console.log("anda boleh masuk")
// }else if(age > 17){
//     console.log("anda boleh memesan anggur");
// }else if(money === juice && anggur){
//     console.log("anda bisa pesan minum");
// }else if(money === juice && anggur){
    // console.log("uang anda tidak cukup,silahkan pulang");
