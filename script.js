// //alert("Hallo")
// let nama ="Putri"
// console.log(typeof(nama))

// const phi = 3.14
// console.log(phi)

// let ipk = 4.0;

// console.log(ipk)
// let isSuccess = true 
// console.log(isSuccess)

// let fakultas = ["Fakultas Ilmu Komputer","Fakultas Hukum","Fakultas Kedokteran"]
// console.log(fakultas[1])
// const kedokteran = fakultas[1]
// console.log (kedokteran)

// const [fakul1,fakul2,fakul3] = fakultas
// console.log[fakul3]
// fakultas.push("Fakultas Kedokteran")
// console.log(fakultas)
// fakultas.pop()
// console.log(fakultas)
// fakultas.shift()
// console.log(fakultas)
// fakultas.unshift(2)
// fakultas.unshift(true)
// console.log(fakultas)

// let result = 18 < 2;
// //console.log(result)
// let namaDepan = "Putri"
// let namaBelakang = "Ayna"
// //let fullName = namaDepan.concat (namaBelakang)
// let fullName = namaDepan + namaBelakang
// console.log(fullName)

// let famale = ["Nadia","Pita","Resti","Uti","Nasma","Dila","Muti"]
// let male = ["Luhur","Dicky","Meru","Deri","Amar","WallahuAlam","WallahuAlam"]

// let student = [...famale,...male ]
// console.log(student)
 
// let orang = {
//     "nama":"Putri",
//     "kelas":4,
//     "NPM": 2210631170143
// }
// console.log(orang.nama)
// console.log (orang["kelas"])

// let Nilai;
// Nilai = "100"
// Nilai = +Nilai
// console.log (typeof(Nilai))
// if (Nilai === 100){
//     console.log("Sempurna")
// }
// let Nomor = [1,2,3,4,5]
// for(let i of Nomor){
//     console.log (i)
// }

// const nama = Nomor.forEach{

// console log(nama)
// function nama() {
//     console.log("Hallo")
// }
// nama()

// const hallo = ()=>{
//     console.log("Hallo Word")
// }
// hallo()

// const urutan = (string,...nomor) =>{
//     console.log(...nomor)
// }
// urutan(1,2,3,4,5,6,7,8)


const Average =(...index) =>{
    let sum = index.length
    let result = 0 
    for(const i of index){
    result += i
}
return result/sum
}

console.log("rata ratanya adalah " + Average(2,3,4,5,6,7,8))
const iya = () =>"iya dong"
const penambahan = (number1, number2)=>number1-number2
let result = penambahan(10,20)
let result2 = pengurangan (15,5)
console.log(result2)
console.log(result)
    