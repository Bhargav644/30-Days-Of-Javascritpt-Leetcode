
/**------------ Solution 1 -------------- */
async function sleep(millis){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
        },millis);
    })
}

/**----------- Solution 2 -----------*/
async function sleep(millis){
    return new Promise(resolve=>setTimeout(()=>{resolve},millis))
}

sleep(1000).then((Res)=>{
    console.log(Res)
})