##  Promise Pool


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/promise-pool/description/">Problem</a>:Given an array of asyncronous functions functions and a pool limit n, return an asyncronous function promisePool. It should return a promise that resolves when all the input functions resolve.<br>
But the constraint is that only 'n' functions can work parallely not more than that <br>



<br/>

</h4>

<br/>

<b>Input:</b>

```

    functions = [
    () => new Promise(res => setTimeout(res, 300)),
    () => new Promise(res => setTimeout(res, 400)),
    () => new Promise(res => setTimeout(res, 200))
    ]

```
n = 2
<b>Output:</b> [[300,400,500],500]

<b>Approach 1:</b> 
<br/>

```

    const promisePool=function(functions,n){ 
        return new Promise((resolve,reject)=>{
            let inProgress=0;
            let i=0;
            function callback(){
                whille(i<functions.length && inProgress<n){
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

```

<br/>
<ul>
<li>Time: O(n*(Time to be taken by n Promises)) </li>
<li>Space: O(1) </li>
</ul>
<hr>

