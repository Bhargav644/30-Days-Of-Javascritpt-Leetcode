
/**---------------- Solution 1--------------- */
var timeLimit=function(fn,t){
    return async function(...args){
        return new Promise(async (resolve,reject)=>{
            setTimeout(()=>{
                reject("Time Limit Exeeced")
            },t);

            try{
                const res=await fn(...args);
                resolve(res);
            }
            catch(err){
                reject(err);
            }
        })
    }

}
/**---------------- Solution 2 --------------- */
var timeLimit=function(fn,t){
    return async function(...args){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject("Time Limit Exeeced")
            },t);

                fn(...args).then((res)=>{
                    resolve(res);
                }).catch((err)=>{
                    reject(err);
                });
        })
    }

}