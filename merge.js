function mergeSort(arr) {
    let newArr = [...arr];
    if(newArr.length < 2) return newArr;
    let half = newArr.length / 2;
    let left = newArr.splice(0, half);
    return merge(mergeSort(left), mergeSort(newArr));
}

function merge(arrA, arrB) {
let res = [];
while(arrA.length && arrB.length) {
    if(arrA[0] < arrB[0]) {
    res.push(arrA.shift());
    } else {
    res.push(arrB.shift());
    }
}
return [...res, ...arrA, ...arrB];
}