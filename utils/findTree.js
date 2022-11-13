function findTree(data) {
  const reg = new RegExp(':[^:]*?[\n]','g');
  let arr = data.match(reg).map(item => item.slice(2, item.length-1));
  
}