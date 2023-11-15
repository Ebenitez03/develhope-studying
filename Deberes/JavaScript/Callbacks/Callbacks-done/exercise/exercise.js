function printAysncName(callback,name){
    let action= ()=>{setTimeout(callback, 1000);}
    setTimeout(() => {
        console.log(name);
    }, 1000);
}

function sayHello() {
    console.log("Hello");
}
printAysncName(sayHello(), "Lucia");

