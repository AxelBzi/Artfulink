const generarusuario = async () => {
    const url = "https://randomuser.me/api/?results=4";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
  
    for (let i = 0; i < results.length; i++) {
      const user = results[i];
      const fotouser = document.getElementById(`fotouser${i + 1}`);
      const nombre = document.getElementById(`nombre${i + 1}`);
      const username = document.getElementById(`username${i + 1}`);
  
      fotouser.src = user.picture.medium;
      nombre.textContent = user.name.first +" " + user.name.last;
      username.textContent = "@" + user.login.username;
    }
  };


document.addEventListener("DOMContentLoaded", generarusuario)


ham = document.querySelector(".menu-ham");
ham.onclick = function(){
    nav = document.querySelector("nav");
    nav.classList.toggle("active");
}