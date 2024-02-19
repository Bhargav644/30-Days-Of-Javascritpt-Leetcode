/**--------------Solution ------------ */

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