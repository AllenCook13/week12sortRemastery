function insertionSort(arr) {
    let newArr = [...arr];
    let sorted = [];
    while(newArr.length) {
      console.log(sorted.join(','));
      let cur = newArr.pop();
      sorted.push(null);
      let i = sorted.length - 1;
      while(i > 0) {
        if(sorted[i - 1] < cur) {
          break;
        } else {
          sorted[i] = sorted[i - 1];
          i--
        }
      }
      sorted[i] = cur
    }
    return sorted;
  }