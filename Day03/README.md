## Counter II

<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/counter-ii/?utm_campaign=PostD3&utm_medium=Post&utm_source=Post&gio_link_id=xRxVYOXo">Problem</a>:Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. <br>

The three functions are:<br>

'increment()' increases the current value by 1 and then returns it.<br>
'decrement()' reduces the current value by 1 and then returns it.<br>
'reset()' sets the current value to init and then returns it.<br>
</h4>

<b>Input:</b>init = 5, calls = ["increment","reset","decrement"] <br>
<b>Output:</b> [6,5,4] <br>

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

    var createCounter = function(init) {
        let count=init;

        const increment=()=>{
            return ++count;
        }
        const decrement=()=>{
            return --count;
        }

        const reset=()=>{
            return count=init;
        }
        return {increment,decrement,reset};
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

    var createCounter = function(init) {
        let count=init;
        return {
            increment:()=>{return ++count},
            decrement:()=>{return --count},
            reset:()=>{return count=init},
        }
    }


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>

<b>Approach 3:</b> 
<br/>

```

    class Counter{
        constructor(init){
            this.init=init;
            this.currCount=init;
        }
        increment(){
            return ++this.currCount;
        }

        decrement(){
            return --this.currCount;
        }

        reset(){
            return this.currCount=this.init;
        }
    }
    var createCounter=function(init){
        return new Counter(init);
    }


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>
