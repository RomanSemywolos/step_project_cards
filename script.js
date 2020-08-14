import { Visit } from './components/visit.js';
import { Modal } from './components/modal.js';
import { Handler } from './components/handler.js';

window.onload = function() {
    let doc = new Visit( '#myModal .form-group', '.select-custom').init();
}

let modal = new Modal("modalLogin", "logIn", "close");
modal.init()

let handler = new Handler("login", "pass", "sendData")
handler.init()


// ------------------------------------------------------------------------------------------------------

// async function authorization(url = 'http://cards.danit.com.ua/login', data = {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
//     return await response.json();
// }

// authorization()
//     .then((data) => {
//         console.log(data);
//     });

// ------------------------------------------------------------------------------------------------------





