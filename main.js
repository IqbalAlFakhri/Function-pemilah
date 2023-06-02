const fs = require('fs');
const prompt=require("prompt-sync")({sigint:true});
const readline = require("readline");
const stream = fs.createReadStream("./data.csv");
const rl = readline.createInterface({ input: stream });
// const dataset = require('./database');

var input = prompt("Masukkan Uang Anda: ");
var uang = parseInt(input);

// for (let count = 0; count < dataset.length; count++) {
//     const variabel = dataset[count];
//     console.log("Nama : "+ variabel.nama);
//     console.log("harga : "+ variabel.harga);

//     var hasil_desimal = uang/variabel.harga;
//     var hasil_bulat = Math.floor(hasil_desimal);

//     console.log("jumlah dapat : "+ hasil_bulat);
//     console.log('-----');
// }

// 

let data = [];
let header = [];
let hasil = [];

rl.on("line", (row) => {
  if (header.length === 0) {
    // Memproses baris judul (header)
    header = row.split(";");
  } else {
    // Memproses baris data
    const rowData = row.split(";");
    const obj = {};

    // Membuat objek dari baris data
    for (let i = 0; i < header.length; i++) {
      obj[header[i]] = rowData[i];
    }

    // Menambahkan objek ke dalam array data
    data.push(obj);

    const hasil_mentah = data.map((item) => {
        const { no, ...rest } = item; // Membuang properti 'no' dari objek
        const harga = Number(rest.Harga); // Mengonversi nilai 'Harga' menjadi tipe data angka
      
        return { ...rest, Harga: harga }; // Menggabungkan properti lain dengan 'Harga' yang telah dikonversi
      });

    //Membuat perhitungan seleksi untuk jumlah barang
    // for (let count = 0; count < hasil_mentah.length; count++) {
    //     const variabel = hasil_mentah[count];
        
    //     var hasil_desimal = uang/variabel.Harga;
    //     var hasil_bulat = Math.floor(hasil_desimal);
    // }

    // //Menambahkan objek kedalam array hasil
    // hasil.push({ nama, harga, hasil_bulat });
  }
});

rl.on("close", () => {
  console.log(hasil);
});