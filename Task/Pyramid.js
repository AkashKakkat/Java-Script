let row = 5;

for (let i = 1; i <= row; i++) {
    let str = '';
    for (let j = 1; j <= row - i; j++) {
        
        str += " ";
    }
    for (j = 0; j < i; j++) {
        str += "* "

    }
    console.log(str);

}