##  Curry


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/curry/description/">Problem</a>:Given a function fn, return a curried version of that function.<br>

A curried function is a function that accepts fewer or an equal number of parameters as the original function and returns either another curried function or the same value the original function would have returned.<br>

In practical terms, if you called the original function like sum(1,2,3), you would call the curried version like csum(1)(2)(3), csum(1)(2,3), csum(1,2)(3), or csum(1,2,3). All these methods of calling the curried function should return the same value as the original.<br>



<br/>

</h4>

<br/>

<b>Input: </b> <br/>
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1],[2],[3]]
<b>Output:</b> 6 <br>

<hr>
<hr>

<b>Approach 1:</b> 
<br/>

```

    var curry = function(fn) {
        return function curried(...args) {
            if(args.length>=fn.length) return fn(...args);
            return function(...next){
                return curried(...args,...next)
            }
        };
    };


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>