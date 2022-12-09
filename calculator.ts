export{}
function add(a:number, b:number) {
    console.log(a+b);
}
function sub(a:number, b:number) {
    console.log(a-b);
}
function multi(a:number, b:number) {
    console.log(a*b);
}
function div(a:number, b:number) {
    console.log(a/b);
}
enum Operator{Add = "+",Sub="-",Multi="*",Div="/"};
console.log('Calculator');
// let op:any="-";
// let a:number=0;
// let b:number=0;

// if(op==Operator.Add){
//     console.log('add');
// }
// let istrue=true;

function calculate(a:number, b:number, op:any){
    let c:any;
    switch (op) {
        case Operator.Add:
            add(a,b);
            break;
        case Operator.Sub:
            sub(a,b);
            break;
        case Operator.Multi:
            multi(a,b);
            break;
        case Operator.Div:
            div(a,b);
            break;
        default:
            console.log('choose again');
            break;
    }
}
calculate(3,2,"&");
