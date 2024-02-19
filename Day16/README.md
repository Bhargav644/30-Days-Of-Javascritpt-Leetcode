##  Throttle


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/throttle/description/?utm_campaign=PostD16&utm_medium=Post&utm_source=Post&gio_link_id=bR7jOnr9">Problem</a>:Given a function fn and a time in milliseconds t, return a throttled version of that function.<br>

```

    A throttled function is first called without delay and then, for a time interval of t milliseconds, can't be executed but should store the latest function arguments provided to call fn with them after the end of the delay.

```

<br/>

</h4>

<br/>

<b>Input:</b> t = 100, calls = [{"t":20,"inputs":[1]}] <br>
<b>Output:</b> [{"t":20,"inputs":[1]}]<br>

<b>Approach 1:</b> 
<br/>

```

    var throttle=function(fn,t){
        let isThrottled=false;
        let nextArgs=null;
        return function(...args){
            if(isThrottled){
                nextArgs=args;
            }
            else{
                fn(...args);
                isThrottled=true;
                setTimeout(helper,t);
            }

            function helper(){
                if(nextArgs){
                    fn(...nextArgs);
                    nextArgs=null;
                    isThrottled=true;
                    setTimeout(helper,t);
                }
                else{
                    isThrottled=false;
                }
            }
        }
    }

```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>

