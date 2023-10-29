function printName() {
    let helloName= "hello, John";;
    function inner() {
        return helloName;
    }
    return inner();
}

console.log(printName());