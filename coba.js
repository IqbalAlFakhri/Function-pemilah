// Data JSON contoh
var data = '[{"variabel1": "Nilai 1.1", "variabel2": "Nilai 1.2"}, {"variabel1": "Nilai 2.1", "variabel2": "Nilai 2.2"}]';

// Parsing data JSON
var arr = JSON.parse(data);

// Menampilkan seluruh objek dan variabelnya
for (var i = 0; i < arr.length; i++) {
  var obj = arr[i];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
  console.log('---'); // Pisahkan setiap objek
}