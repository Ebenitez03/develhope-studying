const isLogged = true;
let userInfo={name: "John", age: 24};
function checkIn(isLogged){
    return new Promise((resolve, reject)=>{
        if(isLogged){
            resolve(getInfo(userInfo));
        }else{
            reject(new MyError("You're not logged in"));

        }
    });
};

function getInfo(val) {
    return new Promise((resolve, reject) => {
        if(val){
            resolve(val);
        }else{
            reject(new MyError("I don't want you to get in"));
        }
    });
};

class MyError extends Error {
    constructor(message) {
      super(message);
    }
  }
  

checkIn(isLogged)
    .then(getInfo(userInfo))
    .then((val)=>console.log(val))
    .catch((error)=>console.log(error))
    .finally(()=>console.log(""))
