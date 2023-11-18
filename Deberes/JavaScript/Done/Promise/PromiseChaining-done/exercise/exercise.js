const isLogged = true;
let userInfo={name: "John", age: 24};
// let checkIn= new Promise((resolve, reject)=>{
//     let rand=Math.random;
//     if(isLogged){
//         resolve(rand);
//     }else{
//         reject(console.error("You are not logged yet"));
//     }
// });

// let getInfo=new Promise((resolve, reject) => {
//     if(rand>0.5){
//         resolve(userInfo);
//     }else{
//         reject(console.error(error));
//     }
// })

function checkIn(isLogged){
    return new Promise((resolve, reject)=>{
        if(isLogged){
            resolve(getInfo(userInfo));
        }else{
            reject(console.error("You're not logged in"));
        }
    });
};

function getInfo(val) {
    return new Promise((resolve, reject) => {
        if(val){
            resolve(val);
        }else{
            reject(console.error("I don't want you to get in"));
        }
    });
}

checkIn(isLogged)
    .then(getInfo(userInfo))
    .then((val)=>console.log(val))
    .catch((error)=>console.log(error));