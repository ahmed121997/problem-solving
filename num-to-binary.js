
function binary(d) {
    let result = [];
    if (d ==0) return 0
    while(d > 0){
        let  mod = d % 2;
        d = Math.floor(d/2);
        result.unshift(mod)
    }
    return  result.join("");
}
console.log(binary(0))