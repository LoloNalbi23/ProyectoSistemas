let alfajores = true
let cuentabancaria = {titular:"Hector", plata:10000000, alfajores:0}
let notasCaco = [3,8]

if(alfajores){
    cuentabancaria.plata-=1200
    cuentabancaria.alfajores+=1
    notasCaco.push(10)
    console.log(cuentabancaria,notasCaco)
} 
else {
    notasCaco.push(2)
    console.log(cuentabancaria,notasCaco)
}