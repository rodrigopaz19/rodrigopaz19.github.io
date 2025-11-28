const form = document.getElementById('notifications-form');
form.addEventListener('submit', sendNotification);

async function sendNotification(e) {
    e.preventDefault();

    const destino = 'https://9970f544-a13a-4429-b501-44f25fe6860f.pushnotifications.pusher.com/publish_api/v1/instances/9970f544-a13a-4429-b501-44f25fe6860f/publishes';
    const proxy = 'https://notifications.rodrigopaz-dev.workers.dev/?url=' + encodeURIComponent(destino);

    const title = document.getElementById('title').value;
    const link = document.getElementById('link').value;
    const message = document.getElementById('message').value;
    
    //Set notifications parameters
    const body = JSON.stringify({
        "interests": ["updates"],
        "web": {
            "notification": {
                "title": title,
                "body": message,
                "deep_link": link
            }
        }
    });

    //Confirmamos envio de notificacion a dispositivos suscritos
    if(confirmSend()) {
        const resp = await fetch(proxy, {
            method: 'POST', // o GET
            body: body
        });
        const data = await resp.json();
        console.log(data);
        if(data.publishId !== null) alert('Notificacion ha sido enviada correctamente.');
        form.reset();
    } else {
        alert('Clave incorrecta. Vuelva a intentarlo.');
    }
}

function confirmSend() {
    let password = 'rp19.sf0506CA24';
    let text = prompt('Introduzca clave de confirmacion');

    if(text == password) {
        return true;
    } else {
        return false;
    }
}
