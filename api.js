const generarusuario = async() =>{
    const url = "https://randomuser.me/api/?results=4"
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    console.log(results);
    fotouser1.src = results[0].picture.medium
    nombre1.textContent = results[0].name.first + results[0].name.last
    username1.textContent = "@" + results[0].login.username
    fotouser2.src = results[1].picture.medium
    nombre2.textContent = results[1].name.first + results[1].name.last
    username2.textContent = "@" + results[1].login.username
    fotouser3.src = results[2].picture.medium
    nombre3.textContent = results[2].name.first + results[2].name.last
    username3.textContent = "@" + results[2].login.username
    fotouser4.src = results[3].picture.medium
    nombre4.textContent = results[3].name.first + results[3].name.last
    username4.textContent = "@" + results[3].login.username
}

document.addEventListener("DOMContentLoaded", generarusuario)
