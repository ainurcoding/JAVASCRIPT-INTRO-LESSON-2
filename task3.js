let data = {
    id : 1,
    name : "Ainur Ridwan",
    gender : "male",
    height : "165 cm",
    educational :
    [
        {
            priode : "2013-2016",
            school : "Kalam kudu high school",
            major : "-"
        }
    ],
    phone : {
        primary : "0813131323",
        secondary : "08319231231"
    }
}

let newEducation = {
    priode : "2016-2017",
    school : "State University Jakarta",
    major : "Accountary"
}

// a
console.log(`Nama : ${data.name} \nPhone : ${data.phone.primary}`);
// b
    // tanpa destructuring
    console.log(`${data.phone.primary} ${data.phone.secondary}`);

    // dengan destucturing
    let {phone : numberPhone} = data;
    console.log(numberPhone)

// b
let joinData = () => {
    console.log({...data, ...newEducation})
}

joinData();
