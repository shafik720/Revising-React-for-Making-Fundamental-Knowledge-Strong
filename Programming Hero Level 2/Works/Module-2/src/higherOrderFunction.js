

function addFunc(item) {
  return item + 1;
}

console.log('Simple Function => ', addFunc(5));

function higherOrder(fn){
    return (prop)=> {
        return fn(prop) * 2 ; 
    }
}

const applyHigherOrderFunction = higherOrder(addFunc);
console.log("Higher order function => ",applyHigherOrderFunction(5));

// output : 
// Simple Function =>  6
// Higher order function =>  12