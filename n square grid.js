

function numberSquares(n) {
    let result = 0;
    for(i = 1; i<= n ; i++){

        result += i ** 2 ;

    }
    return result;
}


console.log(numberSquares(0));