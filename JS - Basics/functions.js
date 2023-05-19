function alpha(){
    return 'A'
}
function beta(){
    return 'B'
}
console.log(gamma1())

function gamma1(){
    return 'Z'
}

let gamma =function (){
    return 'b' 
}
function area(height,width){
    return height*width
}
console.log('areaof(3,4)' , area(3,4))
console.log('areaof(3,4)' , area1(4))
console.log('areaof(3)' , area1(3,))

function area1(height ,width){
    if(typeof(width) == 'undefined'){
    return Math.PI * height *height
}
    return height*width;
}
 
if(1)
console.log(12345)

console.log(hello('Priyam'))

function hello(arg){
    console.log('Hello World',arg)      // Here undefined in case of hoisting
    return arg;    // No undefined
}

function hello1(){
    let argument = 'asdfghjkl'
    console.log("Hello" + argument[0] + argument[1])
}
hello1();