let sum = Number(prompt("So'm miqdorini kiriting: "))
function convert(int){
    if(!isNaN(sum)){
        let ans = (int/12500).toFixed(2);
        console.log(ans + " USD")
    }else{
        console.log("Noto'g'ri ma'lumot!")
    }
}
convert(sum)