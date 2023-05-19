function createGreeter(greeting){
    function greet(name){
    console.log(greeting,name())
    }
    return greet
 }
 
let g1 = createGreeter('Good Morning')
let g2 = createGreeter('Good Evening')
console.log(g1)
console.log(typeof(g1))
console.log(g2)
console.log(typeof(g2))

let g3 = createGreeter('Good Night')
// console.log(g3('Priyam'))

//console.log(g2('Anmol'))
// can't since return the number, so g2 is not a function so we cannot give arguent there

console.log(greet('priyam'));
function greet(name){
    console.log("Good Morning",name)
}
function getname(){
    return document.getElementById('namebox').value    // we can get the value as typed in the input box.
}
