// pijFood discount
let potongan = [];
let subTotal = [];
let discount =  (i, j) => {
    let totalHarga  =  i * j;
    
    if (totalHarga >= 60000) {
        potongan.push((35/100) * totalHarga);
    } else {
        potongan.push(0);
    }
    if (potongan >= 50000) {
        potongan = 50000;
    }
    let subTotal = totalHarga - potongan;
    console.log(`Total Harga :${totalHarga}\nPotongan :${potongan}\nSubtotal ${subTotal}`);
}

discount(1,1000000);