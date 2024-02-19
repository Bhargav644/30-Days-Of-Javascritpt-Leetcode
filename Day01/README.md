## Create Hello World Function
<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/create-hello-world-function/description/?utm_campaign=PostD1&utm_medium=Post&utm_source=Post&gio_link_id=QPDw0kJR">Problem</a>:Write a function createHelloWorld. It should return a new function that always returns "Hello World". <br>

<b>Input:</b> args = []<br>
<b>Output:</b> "Hello World"<br>

<hr>
<b>Approach:</b> 
<br/>

```

    var createHelloWorld = function() {
        return function(...args) {
            return "Hello World";
        }
    };

```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>
