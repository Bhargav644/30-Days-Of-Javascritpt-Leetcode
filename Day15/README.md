##  Debounce


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/debounce/description/?utm_campaign=PostD15&utm_medium=Post&utm_source=Post&gio_link_id=AovN2Ojo">Problem</a>:Given a function fn and a time in milliseconds t, return a debounced version of that function.<br>

```

    A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also recieve the passed parameters.

```

<br/>

</h4>

<br/>

<b>Input:</b> <br>

```

    t = 50
    calls = [
    {"t": 50, inputs: [1]},
    {"t": 75, inputs: [2]}
    ]

```

<b>Output:</b> [{"t": 125, inputs: [2]}] <br>

<b>Approach 1:</b> 
<br/>

```

    var debounce=function(fn,t){
        let id;
        return function(...args){
            clearTimeout(id);
            id=setTimeout(()=>fn(...args),t);
        }
    }

```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>

