/* Quick Sort */
const qsrt = (a) => { 
	if(a.length < 2) {
  	return a;
  }
  else {
    let pv = a.pop();
    let lt = [];
    let rt = [];
    //let resultarr = [];
    for(i = 0; i <a.length; i++) {
        if(a[i] <= pv) {
          lt.push(a[i]);
        }
        else {
          rt.push(a[i]);
        }
      }
      //return resultarr.concat(qsrt(lt), pv, qsrt(rt));
      return [...qsrt(lt), pv, ...qsrt(rt)];
  }
}
var a = [ 200, 1000, 1, 7, 5, 6, 10, 500 ]
console.log(qsrt(a));