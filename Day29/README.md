##  Generate Fibonacci Sequence



<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/generate-fibonacci-sequence/description/?utm_campaign=PostD29&utm_medium=Post&utm_source=Post&gio_link_id=xo040MEo">Problem</a>:Write a generator function that returns a generator object which yields the fibonacci sequence.<br>

The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.<br>

The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.<br>


</h4>

<br/>

<b>Input:</b>callCount = 5<br>

<b>Output: </b>[0,1,1,2,3]<br>


<b>Approach 1: Generator is used they are generaly used for making infinite iterators </b> 
<br/>

```

    
    var fibGenerator = function*(){
        let n1=0,n2=1;
        while(true){
            yield n1;   //means return here whenever fibGenerator.next() will be called upro here it will run
            [n1,n2]=[n2,n1+n2];

        }
    }


    const gen=fibGenerator()
    console.log(gen.next().value);  //0
    console.log(gen.next().value);  //1



```

<br/>
<ul>
<li>Time: O(calltime) </li>
<li>Space: O(1) </li>
</ul>
