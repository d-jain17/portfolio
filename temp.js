/*console.log("hello");
let a = 4;
console.log(a);
a="deepali";
console.log(a);*/
/*let a= 256;
let b= null;
let c= BigInt(435);
console.log(
    typeof(c),
    c
)
const v={
    "deepali": 234,
    "anisha" : true,
    "dhruv" : 'hot',

}
console.log(
 v["anisha"],
 v["dhruv"],
 typeof(v["deepali"])
)*/
/*let a= "deepali"
let b= 6;
console.log(a+b)
console.log(typeof(a+b))
const dict={
    yakka : "hard work",
    nemesis: "enemy",
    absurd: "weird"
}
console.log(dict.yakka)*/
/*let a= prompt("what is your age?");
if(a>10 && a<20){
    alert("age is between 10 and 20")
}
else{
    alert("age is not between 10 and 20")
}*/
/*let a= prompt("number");
if(a%2==0 && a%3==0){
    console.log("number is div")
}
else{
    console.log("number not div")
}*/
/*let a= prompt("number");
if(a%2==0 || a%3==0){
    console.log("number is div")
}
else{
    console.log("number not div")
}*/
/*let age= prompt("age?")
age>18 ? console.log("you can drive") : console.log( "you can't drive" )*/
/*let abs = {
Math: 99 ,
chemistry : 100 ,
physics: 98,
social : 100

}
for(i=0; i<Object.keys(abs).length; i++){
    console.log("the marks of"+ Object.keys(abs)[i] + " are " +abs[Object.keys(abs)[i]] )
}*/
/*let abs = {
    Math: 99 ,
    chemistry : 100 ,
    physics: 98,
    social : 100
    
    }
    for( a in abs){
        console.log("the marks of"+ a + " are " +abs[a] )
    }*/
    /*let a 
    while(number !=7){
        console.log("try again")
        a= prompt(number)
    }*/
   /* function mean(a,b,c,d,e){
        console.log( a+b+c+d+e/5 )
    }
    let a= prompt("first")
    let b= prompt("first")
    let c= prompt("first")
    let d= prompt("first")
    let e= prompt("first")
mean(a,b,c,d,e)*/
/*let st= "Deepali";
for( i=0; i<= st.length ; i++){
    console.log(st[i])
}
console.log("harr\'".length)
let a= "DeePaLi"
console.log(a.toLowerCase())*/
/*let a= "please give rupees 1000"
console.log("please give rupees ".length)
let x= a.slice(19);
 x= parseInt(a.slice(19))
console.log(x)
console.log(typeof(x))*/
/*let a= "deepali"
console.log(a.replace("deep","dhruv"))
console.log(a.replace(a[3],"w"))*/
/*let num=[1,22,3,4,5]
for(let item of num){
    console.log(item)
}
for(let i in num){
    console.log(i)
}*/
/*let a=[1,2,3,4]
let b= prompt("number?")
b=Number.parseInt(b)
a.push(b)
console.log(a)*/
/*let a=[1,2,3,4]
let b
while (b!=0){
b= prompt("number?")
b=Number.parseInt(b)
a.push(b)
}
console.log(a)*/
/*let a=[1,2,10,5,8,20,30,4,50]
let b= a.filter( (val) =>{
return val%10==0
})
console.log(b)*/
/*let a=[1,2,3,4,5]
let a2= a.map(i => {
    return i*i
});
console.log(a2)*/
/*let a=[1,2,3,4,5]
let b= a.reduce( (x1,x2)=> {
    return x1*x2
})
console.log(b)*/
/*let x= Math.floor((Math.random() * 100) + 1);
console.log(x)
let b
let count=0
while(b!=x && count <=100){
    b= prompt("number?")
 if(b>x){
    console.log("greater than original number")
 }
 if(b<x){
    console.log("lesser than original number")
 }
 count++
}
console.log("correct ans")
console.log(100-count)*/
/*let a = prompt("age?")
if (a<0){
    console.error("please enter a valid age")
}
else if(a>18){
    alert("eligible to drive")
}
else{
    alert("not eligible to drive")
}
if(a>0){
let b= confirm("do you want to see prompt again")
while(b ){
    if (a<0){
        console.error("please enter a valid age")
    }
     else if(a>18){
        alert("eligible to drive")
    }
    else{
        alert("not eligible to drive")
    }
    b= confirm("do you want to see prompt again")
}
}*/
/*let a = prompt("enter a number")
if(a>4){
    location.href= "https://google.com"
}*/
//let color= prompt("enter a colour")

   // document.body.style.background= red
  /* function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = getRandomInt(1, 3)
if (a==1){
    a= "s"
}
if(a==2){
    a=="r"
}
if(a==3){
    a=="p"
}
let b= prompt("select r, p or s")
if(b==a){
    alert("draw ")
    
}
else if ((b=="s" && a=="p")|| (b=="r"&& a=="s")|| (b=="p"&& a=="r")){
    alert("win")
}
else{
    alert("lose it was" + a)
}*/
/*const cars= ["honda", "bugatti", "mercedes"]
document.getElementById("demo").innerHTML= cars;*/
/*const cars= ["honda", "bugatti", "mercedes"]
console.log(cars.length)*/
/*const cars= ["honda", "bugatti", "mercedes"]
console.log(cars[cars.length-1])  // accessing last element */
/*JavaScript does not support arrays with named indexes.
eg= cars["firstcar"]="bugatti" is not supported
In JavaScript, arrays always use numbered indexes.  
eg= cars[0]="bugatti" is supported 
In JavaScript, arrays use numbered indexes, objects use named indexes. You should use objects when you want the element names to be strings (text).
You should use arrays when you want the element names to be numbers.*/
/*const points = [40]
console.log(points)
const point = new Array(4)
console.log(point)*/
/*const cars= ["honda", "bugatti", "mercedes"]
console.log(cars instanceof Array) // method to know if given variable is array or not */
/*
const arr1=["hello", "cello", "wow"]
const arr2=[1,2,3,4]
const arr3=[1, 3, 5 , 7, 9]
const arr4=[1,2,3,4,5,2,3,6,8,7,2]
const arr5=["dog", "cat", "mouse", "lamb", "camel"]
const arr6=["dog", "cat", "mouse", "lamb", "camel"]
console.log(arr1.concat(arr2))
console.log(arr2.copyWithin(2,0))
console.log(arr2.every(check))
function check(nom){
    return nom < 5
}
console.log(arr1.fill("cute", 1,3))
console.log(arr3.filter(check))
console.log(arr3.find(check))
console.log(arr3.findIndex(check))
console.log(Array.from("ABCDEFG")) // converts string to array
console.log(arr3.indexOf(5))
console.log(Array.isArray(arr1)) // tells if object is array or not
console.log(arr3.join(" and "))
console.log(arr4.lastIndexOf(2))
console.log(arr3.map(add))
function add(item){
    return item + 10
}
console.log(arr3.pop() + "and " + arr3)
console.log(arr1.push("sandwitch") + "and "  + arr1)
console.log(arr1.reverse())
console.log(arr1.shift() + " and " + arr1)
console.log(arr4.slice(3,7))
console.log(arr3.some(check))
console.log(arr1.sort())
console.log(arr6.splice(2,0,"sheep", "ant") + " and " + arr6)
console.log(arr5.splice(2,2) + " and " + arr5)
console.log(arr1.unshift("pineapple") + " and " + arr1)
*/