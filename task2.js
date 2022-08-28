// 2 jelaskan emthod (Built-in Functions) dari filter, push, pop dan reduce serta berikan contoh

// filter() 

// merupakan method di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu.

// sample
console.log("filter()")
const umur = [10,12,15,20,21,25];

function cekUsia(usia){
    return usia <= 18;
}

console.log(umur.filter(cekUsia));


// push()
// menambahkan elemen array pada akhir dari array
// sample
console.log("push()")
var numbers = [];

var insertNumber = 5;

for (let i = 0; i < insertNumber; i++) {
    numbers.push(i);
}

console.log(numbers);

// pop()
// merupakan method array di javascript yang berfungsi untuk menghapus elemen terakhir dari array.
console.log("pop()");
numbers.pop();
console.log(numbers);

// reudce()
// merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nila hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya.
console.log("reduce()");
const nama = ["AI","NUR"," ","RID","WAN"];

const result = nama.reduce((arraySebelumnya, arraySesudahnya) => {
    return arraySebelumnya.concat(arraySesudahnya);
})

console.log(result);