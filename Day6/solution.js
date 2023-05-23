/**----------- Solution 1 ---------- */
var reduce = function(nums, fn, init) {
    let acc = init;
    for (let i = 0; i < nums.length; i++) {
      acc = fn(acc, nums[i]);
    }
    return acc;
};

/**-----------Solution 2----------- */

var reduce = function(nums, fn, init) {
    return nums.reduce((count,value,idx)=>{
        count=fn(count,value);
        return count;
    },init);
};

/**-----------Solution 3----------- */

var reduce = function(nums, fn, init) {
    let acc = init;
    nums.forEach((element) => {
      acc = fn(acc, element);
    });
    return acc;
  };