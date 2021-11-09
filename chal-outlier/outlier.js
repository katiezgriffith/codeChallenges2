function findOutlier(int){
    var even = int.filter(i => i % 2 === 0);
    var odd = int.filter(i  => i % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
  }

 console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))