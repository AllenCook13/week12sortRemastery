function selectionSort(arr) {
    let newArr = [...arr];
    let sorted = [];
    while(newArr.length) {
      console.log(sorted.join(','));
      let curInd = 0;
      for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] < newArr[curInd]) {
          curInd = i;
        }
      }
      sorted.push(newArr[curInd]);
      // console.log(sorted.join(','));
      newArr.splice(curInd, 1);
    }
    return sorted;
  }