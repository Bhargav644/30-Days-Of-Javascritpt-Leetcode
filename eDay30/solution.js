/**----------Solution ------ */ 

var inorderTraversal=function*(arr){
    
    for(const val of arr){
        if(Array.isArray(val)){
            yield* inorderTraversal(val);
        }
        else{
            yield val;
        }
    }
}