let x = 121;
let stringx = x.toString()
let reversedstring = '';
for(let i=stringx.length-1;i>=0;i--){
    reversedstring += stringx[i]
}
if(stringx === reversedstring){
    console.log(true)
}else{
    console.log(false)
}