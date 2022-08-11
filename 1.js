// 1
function numero(numero1,numero2,numero3) {
let resultado= numero1 + numero2 +numero3
    return resultado
}
console.log(numero(5,8,5))
// 2
function nombre(nombre,apellido1,apellido2) {
    let resultado= nombre +" " + apellido1 +" " + apellido2
        return resultado
    }
    console.log(nombre("marc","el hannouti","gordo"))
// 3
function mayor (num1,num2){
if (num1 > num2){
    return "el numero mas grande es el numero1:" +" " + num1
}else{
    return "el numero mas grande es el numero2:" + " " +num2
}
}

console.log(mayor(8,9))