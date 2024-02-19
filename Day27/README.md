##  Event Emitter


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/event-emitter/description/?utm_campaign=PostD27&utm_medium=Post&utm_source=Post&gio_link_id=lPQDyGjR">Problem</a>:Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.<br>


</h4>

<br/>

<b>Input:</b><br>

```
    actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"], 
    values = [[], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 5; }"], ["firstEvent"]]

```

<b>Output: </b><br>

```
    [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]

```


<b>Approach 1: </b> 
<br/>

```

    class EventEmitter {
        eventMap={}  //event -> set
        subscribe(event, cb) {
            if(!this.eventMap.hasOwnProperty(event)){
                this.eventMap[event]=new Set();
            }
            this.eventMap[event].add(cb);
            return {
                unsubscribe: () => {
                    this.eventMap[event].delete(cb);
                }
            };
        }

        emit(event, args = []) {
            const res=[];
            (this.eventMap[event] ?? []).
            forEach((cb)=>{
                res.push(cb(...args));
            })
            return res;
        }
    }


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
