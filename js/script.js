const boton = document.getElementById("boton");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const reveals = document.querySelectorAll(".reveal");

boton.addEventListener("click", () => {
    alert("Bienvenido al desarrollo profesional 🚀");
});


/*menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});*/

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.textContent = "✖";
    }else{
        menuToggle.textContent = "☰";
    }
});



window.addEventListener("scroll", () => {
    reveals.forEach((elemento) => {
        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if(posicion < alturaPantalla - 100){
            elemento.classList.add("active");
        }
    });
});