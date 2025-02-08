needle = "ad"
haystack ="Fawad"
arr = []
for(let i=0;i<haystack.length;i++){
    arr.push((haystack.slice(i,i+needle.length)))
}
let found = false
for(let j=0;j<arr.length;j++){
    if(needle===arr[j]){
        console.log(j)
        found = true
        break
    }
}
if(!found){
    console.log(-1)
}