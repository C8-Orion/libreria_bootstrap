const button = document.getElementById('btnSubmit')
const formulario = document.getElementById('login-form');
const currentWindow = window.location.pathname;
const errorMessage = document.getElementById('error-message')
const errorMessageFull = document.getElementById('error-message-full')

if (!currentWindow.includes("login.html")) {
    sessionStorage.setItem('lastPage', window.location.href);
}

button.addEventListener('click', authentication)
protectLogin()

if (formulario) {
    formulario.addEventListener('submit', authentication)
}

const emailInput = document.getElementById('email')

emailInput.addEventListener('change', (e) => {
    const email = emailInput.value
    const regexGmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    if (!regexGmail.test(email)) {
        emailInput.classList.add("is-invalid")
        errorMessage.innerText = "Formato de correo inválido"
        return
    }
    emailInput.classList.remove("is-invalid")
    errorMessage.innerText = ""

})


function authentication(e) {
    e.preventDefault()
    const password = document.getElementById('password').value
    const emailInput = document.getElementById('email')
    const email = emailInput.value
    const regexGmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]/;

    if (email === "" || password === "") {
        errorMessageFull.innerText = "Ingrese todos los campos"
        return
    }
    if (!regexGmail.test(email)) {
        emailInput.classList.add("is-invalid")
        errorMessage.innerText = "Formato de correo inválido"
        return
    }

    if (email.toLowerCase() === "admin@biblioweb.test" && password === "Admin123") {
        console.log("auth creado pasando a ADMIN")
        sessionStorage.setItem('auth', 'true')
        window.location = "./admin.html"
    } else {
        errorMessageFull.innerText = "Correo o contraseña inválidos"
    }
}


function protectLogin() {
    const auth = sessionStorage.getItem('auth');
    const currentWindow = window.location.pathname;

    if (auth === 'true' && currentWindow.includes("login.html")) {

        const previousPage = sessionStorage.getItem('lastPage');

        window.location.href = previousPage || "./admin.html";
    }
}