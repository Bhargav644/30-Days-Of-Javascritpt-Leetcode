/** -----------Solution ----------- */

var flat=function(arr,n){
    const res=[];

    function helper(arr,depth){
        for(const val of arr){
            if(depth<n && typeof val=='object'){
                helper(val,depth+1);
            }
            else{
                res.push(val);
            }
        }
        return res;
    }

    return helper(arr,0);
}


const res=flat([1,2,[3,4,[6,7]]],1);
console.log(res);
