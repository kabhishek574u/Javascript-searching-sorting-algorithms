const selectionSort = (a) => {
    for(let i = 0; i < a.length; i++) {
      let minIndex = i;
      for(let j = i+1; j < a.length; j++) {
        if(a[minIndex] > a[j]) {
          minIndex = j;
        }
      }
      let temp = a[i];
      a[i] = a[minIndex];
      a[minIndex] = temp;      
    }
    return a;
  }
  
  let arr = [9,4,7,2,5,12,5];
  console.log(selectionSort(arr));