const boton = document.getElementById("boton");

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

const reveals = document.querySelectorAll(".reveal");

const form = document.getElementById("contact-form");


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



form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_f52w31e",
        "template_t96s0cr",
        this
    )
    .then(() => {
        alert("Mensaje enviado correctamente 🚀");
        form.reset();
    })
    .catch((error) => {
        alert("Error al enviar el mensaje");
        console.log(error);
    });
});