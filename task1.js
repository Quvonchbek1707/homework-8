function checkPassword(str){
    if(str.length<8){
        console.log("Kuchsiz parol: 8 belgidan kam")
        return
    }
    let arr = []
    for(let j = 0; j<str.length; j++){
        arr.push(str[j].charCodeAt())
    }
    let number = false;
    let katta = false;
    let kichkina = false;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>47 && arr[i]<=57){
            number = true;
        }
        if(arr[i]>=65 && arr[i]<=90){
            katta =true;
        }
        if(arr[i]>=97 && arr[i]<=122){
            kichkina=true;
        }
    }
    if(!number){
        console.log("Kuchsiz parol: Raqam  yo‘q")
        return
    }
    if(!katta){
        console.log("Kuchsiz parol: Katta harf yo‘q")
        return
    }
    if(!kichkina){
        console.log("Kuchsiz parol: Kichkina harf yo‘q")
    }
    console.log("Kuchli parol")
    return
}

// checkPassword("Sal0mDuny0")
// checkPassword("salom123")
// checkPassword("SalDdfhgun")
// checkPassword("SA23DWERETUN")