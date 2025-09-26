function checkOddEven(...numbers) {
    numbers.forEach(num => {
        if (num % 2 == 0) {
            console.log(`${num} is EVEN`);
        } else {
            console.log(`${num} is ODD`);
        }
    })
}
checkOddEven(10, 3, 5, 2, 4, 7);
