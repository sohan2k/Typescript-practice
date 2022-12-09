export {}
let x=10;
const y=20;

let sum;
const title ='sohan';//I is  a constant
sum=20;
console.log(title,sum);

sum='sohan barman';
console.log(sum)

//muliple line with embeded expression
let name : string ='sohan';
let sentance: string=`My name is ${name}
i am a begineer`;
console.log(sentance);

//null and undefined
// let isNull:Boolean=null;
// let str:string=undefined;

//Array
let list1:number[]=[1,2,3,4,5];
let list2:Array<number>=[1,2,3,4,5];
console.log(list1);
console.log(list2);
list1.push(7);
list2.push(9);
console.log(list1);
console.log(list2);

//mixed type variable(typed array)
let tuple:[string,number]=['apple',80];
let ll:[string[],number[]]=[['s','o','h'],[1,2,3]]
console.log(tuple);
console.log(ll);

//enum
enum Color{Red,Green,Blue};//index star with zero
let c:Color=Color.Blue;
console.log(c);

enum Fruit{Apple=80,Banana=50,Orange=50}
let f:Fruit=Fruit.Apple;
console.log(f);

//Any
let a:any=10;
console.log(a);
console.log(a.name);//it doesn't throw error because it declare any type 


//unkonwn
let b:unknown='sd';
console.log(b);
// console.log(b.name);//throw error
(b as string).toUpperCase;//It is type assertion
console.log(b);

//union type data
let muliple: boolean | number;
muliple=true;
muliple=89;


//Function

function add(n1 , n2){
    return n1+n2;
}
console.log(add(12,13));

function addWithReturnType(n1:number , n2?:number):number{
    if(n2){
        return n1+n2;
    }else{
        return n1;
    }
}
console.log(addWithReturnType(4,8));
console.log(addWithReturnType(4));





