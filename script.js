// cara untuk membuat object pada javascript
// 1. object literal
// let mahasiswa = {
//     nama: 'awal kurniawan',
//     energi: 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan`);
//     }
// }

// 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, selamat Makan`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }

//     return mahasiswa;
// }

// let awalone = Mahasiswa('Awalone', 10);
// let rayyan = Mahasiswa('Ar Rayyan', 20);


// 3. constuctor function
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    }
}

let awal = new Mahasiswa('awalone', 20);
// 4 object.create
