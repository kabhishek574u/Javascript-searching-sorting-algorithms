const bs = (a) => {
	for(let i = 0; i< a.length; i++) {
  	for(let j = 0; j < a.length - i -1; j++) {
    	if(a[j] > a[j+1]) {
      	let temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
      }
    }
  }
  return a;
}

const arr = [9,7,8,6,5,3,5,4,2,3,1];
console.log(bs(arr));