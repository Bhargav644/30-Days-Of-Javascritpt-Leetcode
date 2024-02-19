/**------------- Solution-------------- */
/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */

const promisePool=function(functions,n){ 
    return new Promise((resolve,reject)=>{
        let inProgress=0;
        let i=0;
        function callback(){
            while(i<functions.length && inProgress<n){
                functions[i++]().then(()=>{
                    inProgress--;
                    callback();
                })
                
                inProgress++;
            }
    
            if(i===functions.length && inProgress===n){
                resolve();
                return;
            }
        }
        callback();
    })
}