let row = 5;

for (let i = 1; i <= row; i++) {  // FOR NEXT ROW
    let str = '';
    for (let j = 1; j <= row - i; j++) {  // FOR PRINTING SPACE
        
        str += " ";
    }
    for (j = 0; j < i; j++) {  // FOR * PRINTING
        str += "* "

    }
    console.log(str);

}