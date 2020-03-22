// cara untuk membuat object pada javascript
// 1. object literal
// Problem : Tidak cocok untuk objek yang banyak
// let mahasiswa = {
//     nama: 'awal kurniawan',
//     energi: 10,
//     makan : function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan`);
//     }
// }

// 2. function declaration
// problem : tidak efektif dalam memori
const methodMahasiswa = {
    makan : function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    },

    main : function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain`);
    },

    tidur : function(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat tidur`);
    }
};

function Mahasiswa(nama, energi) {
    let mahasiswa = {methodMahasiswa};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    // mahasiswa.makan = function (porsi) {
    //     this.energi += porsi;
    //     console.log(`Hallo ${this.nama}, selamat Makan`);
    // }

    // mahasiswa.main = function (jam) {
    //     this.energi -= jam;
    //     console.log(`Halo ${this.nama}, selamat bermain`);
    // }


    // mahasiswa.makan = methodMahasiswa.makan;
    // mahasiswa.main = methodMahasiswa.main;
    // mahasiswa.tidur = methodMahasiswa.tidur;
    return mahasiswa;
}

let awalone = Mahasiswa('Awalone', 10);
let rayyan = Mahasiswa('Ar Rayyan', 20);

// tes aja nih

// 3. constuctor function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// }

// let awal = new Mahasiswa('awalone', 20);
// 4 object.create
