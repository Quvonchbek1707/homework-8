let ism = prompt("So'z kiriting: ")
let letter = prompt("Character kiriting: ")
function takror(str, letter){
    let a = letter.charCodeAt();
    let count = 0;
    let b;
    if(a>=97 && a<122){
        b=a-32;
    }else if(a>=65 && a<=90){
        b=a+32
    }else{
        b=a
    }
    for(let i=0; i<str.length; i++){
        let ascii = str[i].charCodeAt()
        if(ascii===a  || ascii===(b)){
            count++;
        }
    }
    console.log(count)
    return
}
takror(ism, letter)
