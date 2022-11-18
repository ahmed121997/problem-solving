/**
 * function convert decimal to binary
 * @param {*} d 
 * @returns 
 */
function binary(d) {
    let result = [];
    if (d == 0) return 0
    while(d > 0){
        let  mod = d % 2;
        d = Math.floor(d/2);
        result.unshift(mod)
    }
    if (result.length< 8){
        return  "0".repeat(8-result.length) + result.join("");
    }
    return  result.join("");
}
console.log(binary(10));
/*************************** */

/**
 * function covert binary to decimal 
 * @param {*} b 
 * @returns 
 */
function decimal(b){
    let result = 0;
    return result = b[0]*128 +b[1]*64 +b[2]*32 +b[3]*16 +b[4]*8 +b[5]*4 +b[6]*2 +b[7]*1 ;
}
console.log(decimal("00000110"));
/***************************** */

/**
 * AND gate
 * @param {*} n1 
 * @param {*} n2 
 * @returns 
 */
function bitwiseAND(n1, n2) {
	n1 = binary(n1);
	n2 = binary(n2);
    let n='';
    for(i=0;i<8;i++){
        n += parseInt(n1[i]) * parseInt(n2[i]);
    }
  return decimal(n);
}
console.log(bitwiseAND(6, 23));
/*************************** */

/**
 * OR Gate
 * @param {*} n1 
 * @param {*} n2 
 * @returns 
 */
function bitwiseOR(n1, n2) {
	n1 = binary(n1);
	n2 = binary(n2);
    let n='';
    for(i=0;i<8;i++){
        n += Math.ceil((parseInt(n1[i]) + parseInt(n2[i]))/2);
    }
    return decimal(n);
}
console.log(bitwiseOR(6, 23))
/************************************* */

/**
 * XOR Gate
 * @param {*} n1 
 * @param {*} n2 
 * @returns 
 */
function bitwiseXOR(n1, n2) {
	n1 = binary(n1);
	n2 = binary(n2);
    let n='';
    for(i=0;i<8;i++){
        if (n1[i] == n2[i])
            n += "0"
        else
            n += "1"    
    }
    return decimal(n);
}

console.log(bitwiseXOR(6, 23))

/*********************************************** */