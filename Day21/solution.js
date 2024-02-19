/**-------------- Solution 1 -------------- */

var chunk = function(arr, size) {
    const result=[]
    let i=0;
    for(i=0;i<arr.length;i++){
        let row=[]
        let j=i;
        while(j<i+size && j<arr.length){
            row.push(arr[j]);
            j++;
        }
        i+=size-1;
        result.push(row)
    }
    return result;
};


/** -----------------Solution 2 :Using Chunk ------------ */

var chunk = function(arr, size) {
    return chunk(arr, size);
};



/**---------------  Solution 3: Slice Method-----------  */
var chunk = function(arr, size) {
    var ans = [];
    var index = 0;
  
    while (index < arr.length) {
      ans.push(arr.slice(index, index + size));
      index += size;
    }
  
    return ans;
  }
