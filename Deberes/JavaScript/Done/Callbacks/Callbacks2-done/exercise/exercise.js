function repeatHello(callback) {
    setInterval(callback, 1000);
}

repeatHello(()=>{console.log("Hello")});


/*
If you don't tell the machine how many times it have
to do the callback function, it'll do it endlessly
*/

/*
I don't still know really why it must be a 
arrow function.
*/