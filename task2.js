let narx = Number(prompt("Narxni kiriting: "))
let miqdor = Number(prompt("Miqdorni kiriting: "))
function hisobla(a, b){
    if(isNaN(narx) || isNaN(miqdor)){
        console.log("Noto'g'ri ma'lumot")
        return
    }
    let num = a*b
    console.log(num>100_000?Math.floor(num*0.9):num) 
}
hisobla(narx, miqdor)