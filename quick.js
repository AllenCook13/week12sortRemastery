function quicksort(arr) {
    if(arr.length < 2) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i < arr.length;i++) {
      if(arr[i] <= pivot) {
        left.push(arr[i]);
        // newArr.unshift(newArr.splice(indexOf(newArr[i]), 1))
      } else {
        right.push(arr[i]);
        // newArr.unshift(newArr.splice(indexOf(newArr[i]), 1))
      }
    }
    left = quicksort(left);
    right = quicksort(right);
    return [...left, pivot, ...right];
}