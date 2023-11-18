function repeatHello(callback,n) {
    let interval=setInterval(callback, 1000);
    setTimeout(() => {
        clearInterval(interval);
    }, 1000*(n+1));
}

repeatHello(()=>{console.log("Hello")},3);

