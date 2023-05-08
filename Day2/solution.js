
/** ----------- Solution 1 ----------- */
var map1 = function(arr, fn) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
};

/** ----------- Solution 2 ----------- */
var map2 = function(arr, fn) {
    for(let i=0;i<arr.length;i++){
        arr[i]=fn(arr[i],i);
    }
    return arr;
};


/** ----------- Solution 3 ----------- */

var map3= function(arr, fn) {
    const result=[]
    arr.forEach((element,index) => {
        result.push(fn(element,index));
    });
    return result;
};


/** ----------- Solution 4 ----------- */

var map4 = function(arr, fn) {
    let result=[];
    for(let [idx,i] of arr.entries()){
        result.push(fn(i,idx));
    }
    return result;
};

/** ----------- Solution 5 ----------- */

var map5 = function(arr, fn) {
    let result=[],idx=0;
    for(let i in arr){
        result.push(fn(arr[i],idx++));
    }
    return result;
};

/** Debugging */
function fn(el,i){
    return el+i;
}
console.log(map1([1,2,3],fn));
console.log(map2([1,2,3],fn));
console.log(map3([1,2,3],fn));
console.log(map4([1,2,3],fn));
console.log(map5([1,2,3],fn));
