##  Promise Time Limit


<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/promise-time-limit/description/">Problem</a>:Given an asyncronous function fn and a time t in milliseconds, return a new time limited version of the input function.<br>

A time limited function is a function that is identical to the original unless it takes longer than t milliseconds to fullfill. In that case, it will reject with "Time Limit Exceeded".  Note that it should reject with a string, not an Error.<br>



<br/>

</h4>

<br/>

<b>Input: </b>

```

    fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
    }

```

inputs = [5]<br>
t = 50<Br>
<b>Output:</b> {"rejected":"Time Limit Exceeded","time":50}<Br>
<hr>

<b>Approach 1:</b> 
<br/>

```

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


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>

<b>Approach 2:</b> 
<br/>

```

    var timeLimit=function(fn,t){
        return async function(...args){
            return new Promise((resolve,reject)=>{
                                    r    setTimeout(()=>{
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

```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>