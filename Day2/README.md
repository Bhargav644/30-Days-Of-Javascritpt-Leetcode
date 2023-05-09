## Counter
<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/counter/?utm_campaign=PostD2&utm_medium=Post&utm_source=Post&gio_link_id=xogkVqBo">Problem</a>:Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc). <br>

<b>Input:</b> <br>
n = 10 <br>
["call","call","call"]<br>
<b>Output:</b>[10,11,12]<br>

<b>Closure :</b> Simply the concept is that every function refrences or have access to it's lexical environment (such as it's parent function) that's why here inner function always has access to the current value of 'n' by which n++ give us the accurate result.<br>

<b>Note: In other words, a closure gives you access to an outer function's scope from an inner function.</b> <br>


<b>Advantages of Closures: </b>
1. They provide data encapsulation. <br>
2. They remove redundant code. <br>
3. Variables in closures can help you maintain a state that you can use later. <br>

<hr>
<b>Approach 1:</b> 
<br/>

```

    var createCounter = function(n) {
        let count=0;
        return function() {
            return n+count++;
        };
    };


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

    var createCounter = function(n) {
        return function() {
            return n++;
        };
    };


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>
