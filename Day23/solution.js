/** --------- Solution 1 ------------- */

Array.prototype.last=function(){
    return this.length==0?-1:this[this.length-1];   //returns 3 for [1,2,3]
}


/**----------- Solution 2---------- */
Array.prototype.last=function(){
    return this.length==0?-1:this.slice(-1);    // returns [3] for [1,2,3]
}


const arr=[1,2,3]
console.log(arr.last())