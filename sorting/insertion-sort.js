//Insertion Sort
const isrt = (a) => {
    debugger;
        for(let i = 1; i < a.length; i++) {
          let key = a[i];
        let j = i-1;
        while(j >= 0 && a[j] > key) {
            a[j+1] = a[j];
          j--;
        }
        a[j+1] = key;
      }
      return a;
    }
    
    let a = [8,6,5,8,1,4];
    console.log(isrt(a));