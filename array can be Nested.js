/**
 * @link-problem-solving https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */

function canNest(arr1, arr2) {
    let sort1 = arr1.sort(),sort2 = arr2.sort();
    if(sort2[0] < sort1[0] && sort2[1] > sort1[sort1.length - 1] )
        return true;
    return false;    
}
console.log(canNest([1, 2, 3, 4], [0, 6])); // true
console.log(canNest([1, 2, 3, 4], [2, 3])); // false
console.log(canNest([9, 9, 8], [8, 9]));  // false