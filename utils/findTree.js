function findTree(data) {
  const reg = new RegExp(':[^:]*?[\n]','g');
  let arr = data.match(reg).map(item => item.slice(2, item.length-1));

   function getAllInd(arr, val){
    var indexes = [],
    i= -1
    while((i=arr.indexOf(val, i+1)) != -1) {
      indexes.push(i)
    }
    return indexes
   }

   var indexes = getAllInd(arr, ss)
}
