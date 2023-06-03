/** -----------Solution 1----------- */

Function.prototype.callPolyfill=function(context,args){
    this.apply(context,args);
}





/** -----------Solution 2----------- */
Function.prototype.callPolyfill=function(context,args){
    this.bind(context)(...args);
}