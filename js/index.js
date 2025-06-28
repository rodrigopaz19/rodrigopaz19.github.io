//BOTON DE CONTACTO EN SECCION HERO
const botonContacto = document.getElementById('botonHeroContacto');
botonContacto.addEventListener('click', () => {location.href = '#contacto'})

//FORMULARIO DE CONTACTO
const formulario = document.getElementById('formularioContacto');
formulario.addEventListener('submit', enviarMensaje);

function enviarMensaje(e) {
    e.preventDefault();

    emailjs.init({
    publicKey: "NKWHW1lKcMcLu8zKa",
    });
    
    emailjs.sendForm('service_5a0r58o', 'template_zk9bke6', '#formularioContacto')
    .then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado correctamente!');
        location.reload();
    }, error => {
        console.log('FAILED...', error);
        alert('Ocurrió un error al intentar mandar tu mensaje. Intenta más tarde');
    }
    );
};