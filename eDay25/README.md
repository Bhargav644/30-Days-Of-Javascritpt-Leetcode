##  Check if Object Instance of Class


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/check-if-object-instance-of-class/description/?utm_campaign=PostD25&utm_medium=Post&utm_source=Post&gio_link_id=qPkbxBwR">Problem</a>:Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.<br>

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.
 <br>


</h4>

<br/>

<b>Input:</b>  func = () => checkIfInstanceOf(new Date(), Date)<br>

<b>Output: </b> true <br>

<b>Important Points to note here :</b> <br>

1. Why we are not using x instanceof y direct here <b>Reason:</b> instanceof function only responds to only instances which are created using new keyword <br>

Example:  <br>


```
    const str1='1'
    const str2=new String('2')

    console.log(str1 instanceof String)    // Output: false
    console.log(str2 instanceof String)    // Output: true

```
<br>

2. Why object dont have direct member `prototype` as functions ex: fn.prototype <b>Reason:</b> Object has this .prototype member but it is hidden by default in js so to access it we use Object.getPrototypeOf() <br>




<b>Approach 1: Using getPrototypeOf() </b> 
<br/>

```

    var checInstanceof=function(obj,classFunction){
        if(obj===null || obj===undefined || typeof classFunction!=="function"){
            return false;
        }

        const currPrototype=Object.getPrototypeOf(obj);

        while(currPrototype!=null){
            if(currPrototype===classFunction.prototype){
                return true;
            }
            currPrototype=Object.getPrototypeOf(currPrototype);
        }

        return false;
    }


```

<br/>
