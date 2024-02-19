##  Memoize


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/memoize/description/">Problem</a>:GGiven a function fn, return a memoized version of that function.<br>

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.<br>

<br/>

</h4>

<br/>

<b>Input:</b>
"sum" <br>
["call","call","getCallCount","call","getCallCount"]<br>
[[2,2],[2,2],[],[1,2],[]]<br>
<b>Output:</b>
[4,4,1,3,2]<br>

<hr>
<hr>

<b>Approach 1:</b> 
<br/>

```

    function memoize(fn) {
        let dp=new Map();
        return function(...args) {
            let key=JSON.stringify(args);
            if(dp.has(key)){
                return dp.get(key);
            }
            let ans=fn(...args);
            dp.set(key,ans);

            return ans;
        }
    }


```

<br/>
<ul>
<li>Time: O(nlogn) </li>
<li>Space: O(n) </li>
</ul>