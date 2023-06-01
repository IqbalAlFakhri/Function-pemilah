const prompt=require("prompt-sync")({sigint:true});
const dataset = require('./database');

var input = prompt("Masukkan Uang Anda: ");
var uang = parseInt(input);

for (let count = 0; count < dataset.length; count++) {
    const variabel = dataset[count];
    console.log("Nama : "+ variabel.nama);
    console.log("harga : "+ variabel.harga);

    var hasil_desimal = uang/variabel.harga;
    var hasil_bulat = Math.floor(hasil_desimal);

    console.log("jumlah dapat : "+ hasil_bulat);
    console.log('-----');
}