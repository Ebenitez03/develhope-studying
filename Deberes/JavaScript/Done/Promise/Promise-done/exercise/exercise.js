const number = 15;
let greater=new Promise((resolve,reject)=>{
    if(number>10){
        resolve(number);
    }else{
        reject(number);
    }
});
greater
    .then((val)=>console.log(val))
    .catch((err)=>console.error(err));
