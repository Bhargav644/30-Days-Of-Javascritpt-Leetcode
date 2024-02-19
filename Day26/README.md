##  Call Function with Custom Context



<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/call-function-with-custom-context/description/?utm_campaign=PostD26&utm_medium=Post&utm_source=Post&gio_link_id=39lbqjpP">Problem</a>:Enhance all functions to have the callPolyfill method. The method accepts an object obj as it's first parameter and any number of additional arguments. The obj becomes the this context for the function. The additional arguments are passed to the function (that the callPolyfill method belongs on).
 <br>


</h4>

<br/>

<b>Input:</b><br>

```
    fn = function add(b) {
        return this.a + b;
    }
    args = [{"a": 5}, 7]

```

<b>Output: </b> 12<br>

<b>Approach 1: Using apply Note: Apply always take array of arguments in it that's why didn't do `...args` </b> 
<br/>

```

   Function.prototype.callPolyfill=function(context,args){
        this.apply(context,args);
    }


```

<br/>
<ul>
<li>Time: O(function's time) </li>
<li>Space: O(1) </li>
</ul>
<hr>
<b>Approach 1: Using bind </b> 
<br/>

```

    Function.prototype.callPolyfill=function(context,args){
        this.bind(context)(...args);
    }


```

<br/>
<ul>
<li>Time: O(function's time) </li>
<li>Space: O(1) </li>
</ul>
