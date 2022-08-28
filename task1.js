// ubah semua jawaban di javascript intro 1 menggunakan function


// biodata
console.log("biodata\n")
    // regular function
function biodata(){
    let name = "Ainur Ridwan";
    let email = "ainurridwank2@gmail.com";
    let address = {
    jalan : "Raya Soreang",
    Nomor : "28 B",
    Kota : "Kabupaten Bandung",
    Provinsi : "Jawa Barat",
    }

    let isMerried = false,
    hobbies = ["travel","game","read"];

    let capitals = {
        city1 : {
            city : "Jakarta",
            country : "indonesia"},
        city2 : {
            city : "New York",
            country : "united states"
        }
    }

    return [name,email,address,isMerried,hobbies,capitals];
}
const bio = new biodata();
console.log(bio);

function toObject(){
    let toObjectbio = {};
    for (let i = 0; i < bio.length; i++) {
        toObjectbio[i] = bio[i];
    
    }
    return toObjectbio;
}

console.log(toObject());


// ganjil genap function
console.log("\nganjil genap\n")

    
    // arrow function
const ganjilGenpaMatch = (x) => {
    for (let i = 1; i <= x; i++) {
        console.log((i % 2 === 0 ? `${i} merupakan bilangan genap` : `${i} merupakan bilangan ganjil`));
    }
}

ganjilGenpaMatch(5);

// print segitiga

    // expression function
let printSegitiga = function(a) {
    for (let i = 1; i <= a; i++) {
        let penampung = []
        for (let j = 1; j <= i; j++) {
            penampung.push(i);
        }
        console.log(...penampung);
    }
    
};

printSegitiga(5);