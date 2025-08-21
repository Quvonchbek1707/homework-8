let matn = prompt("Matn bering")
function raqamAlishtirish(str){
    let arr = []
    for(let i=0; i<str.length; i++){
        let a = str[i].charCodeAt()
        if(a>=48 && a<=57){
            arr.push("*")
        }else{
            arr.push(String.fromCharCode(a))
        }
    }
    console.log(arr.join(""))
    return
}
raqamAlishtirish(matn)