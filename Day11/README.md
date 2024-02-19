##  Sleep


<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/sleep/description/">Problem</a>:Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.<br>



<br/>

</h4>

<br/>

<b>Input: </b>millis = 100 <br/>
<b>Output:</b> 100 <br>
<hr>

<b>Approach 1:</b> 
<br/>

```

    async function sleep(millis){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },millis);
        })
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

    async function sleep(millis){
        return new Promise(resolve=>setTimeout(()=>{resolve},millis))
    }

```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>