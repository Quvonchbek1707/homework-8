let ism = prompt("ism familiya kiriting: ")
function ismShortener(str){
    let arr = str.split(" ")
    if(arr.length !==2){
        return "Noto‘g‘ri format: Ism va familiya kiritilishi kerak"
    }
    arr[0] = arr[0][0] + ".";
    str = arr.join(" ")
    return str;
}

console.log(ismShortener(ism))