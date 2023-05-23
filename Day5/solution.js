/** ---------- Solution 1 ---------- */
var filter = function(arr, fn) {
    let number=[]
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            number.push(arr[i]);
        }
    }

    return number;
};

/** --------- Solution 2----------- */

var filter=function(arr,fn){
    return arr.reduce((result,value,index)=>{
        if(fn(value,index)){
            result.push(value);
        }
        return result;
    },[])   //empty bracket depicts intial value to result
}

/** ---------- Solution 3 ---------- */

var filter = function(arr,fn){
    return arr.flatMap((i,j)=> fn(i,j)?[i]:[]);
}


const ans=filter([1,2,3],(value,idx)=>{
    return value%2==0;
});

console.log(ans);