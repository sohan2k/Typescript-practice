export {}
let a:number[]=[6,3,4,2,9,7];

function sort(a:number[]){
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length;j++){
            if(a[i]<a[j]){
                let t=a[i];
                a[i]=a[j];
                a[j]=t;
            }
        }
    }
    return a;
}
console.log(a);
a=sort(a);
console.log(a);

