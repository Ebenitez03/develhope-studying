// Escriba una función que utilice la API de GitHub para obtener la lista de repositorios para un usuario determinado ('https://api.github.com/users/' 
// + usuario + '/repos'). 
// La función toma el nombre del usuario (ponga 'google' como nombre) como parámetro y devuelve una Promesa que se 
// resuelve con el conjunto de repositorios.

let usuario= "google";
async function listaRepo(nombre) {
   
    let response=  await fetch('https://api.github.com/users/');
    let result= await JSON.stringify(response);
    console.log(result);
}

listaRepo(usuario)