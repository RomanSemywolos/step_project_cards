export class Handler {

    constructor(emailInputId, passwordInputId, sendDataButtonId) {
        this.emailInputId = emailInputId
        this.passwordInputId = passwordInputId
        this.sendDataButtonId = sendDataButtonId
    }

    init() {
        const emailInput = document.getElementById(this.emailInputId)
        const passwordInput = document.getElementById(this.passwordInputId)
        const sendDataButton = document.getElementById(this.sendDataButtonId)

        function parsejson() {
            const data = 
                {
                    email: emailInput.value,
                    password: passwordInput.value
                };
            const json = JSON.stringify(data);
            return json
            }

        async function authorization(url = '', data = {}) {
            const response = await fetch(url, 
                {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return await response.json();
        }

        sendDataButton.onclick = function sendJson(){
            if (emailInput.value.length < 10 || emailInput.value.length > 30){
                alert ("Некорректная длина. E-mail должен содержать от 10 до 30 символов")
            }
            else if (passwordInput.value.length < 4 || passwordInput.value.length > 15){
                alert ("Некорректная длина. Пароль должен содержать от 4 до 15 символов")
            }
            else {
                authorization('http://cards.danit.com.ua/login', parsejson())
                .then((data) => {
                    if(data.status != "Error"){
                        console.log(data);
                        alert ("Вы успешно авторизированны");
                    }
                    else {
                        alert ("Ошибка авторизации - введен неверный e-mail или пароль");
                    }
                });
            }
        }
    };

}