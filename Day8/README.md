##  Allow one function call


<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/allow-one-function-call/description/">Problem</a>:Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.<br>

The first time the returned function is called, it should return the same result as fn.<br>
Every subsequent time it is called, it should return undefined.<br>

<br/>

</h4>

<br/>

<b>Input:</b>fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]] <br>
<b>Output/:</b> [{"calls":1,"value":6}] <br>

<hr>
<hr>

<b>Approach 1:</b> 
<br/>

```

    var once = function(fn) {
        let calls=0;
        return function(...args){
            calls+=1;
            if(calls>1) return undefined;
            else{
                return fn(...args);
            }
        }
    };


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>