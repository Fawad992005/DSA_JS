let n = 15;
fizzarr = []
for(let j=1;j<=n;j++){
    if(j%3===0 && j%5===0){
        fizzarr.push("FizzBuzz")
    }else if(j%3===0){
        fizzarr.push("Fizz")
    }else if(j%5===0){
        fizzarr.push("Buzz")
    }else{
        fizzarr.push(j.toString())
    }
}
console.log(fizzarr)