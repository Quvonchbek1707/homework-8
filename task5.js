let num = parseInt(prompt("minutlarni kiriting: "))
function soat(int){
    if(isNaN(int)){
        console.log("Noto‘g‘ri ma‘lumot: Faqat raqamlar kiriting")
    }
    else if(int<0){
        console.log("Noto‘g‘ri ma‘lumot: Daqiqa manfiy bo‘lmasligi kerak")
    }else{
        let vaqt = parseInt(int/60)
        let daqiqa = int%60
        console.log(vaqt + " soat " + daqiqa + " daqiqa")
    }
}

soat(num)