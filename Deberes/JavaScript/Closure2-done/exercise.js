function printName() {
    let helloName= "hello, John";;
    setTimeout(inner= () => {
        return helloName;
    }, 1000);
    return inner();
}

console.log(printName());