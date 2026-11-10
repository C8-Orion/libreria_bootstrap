const button = document.getElementById('btnSubmit')
const formulario = document.getElementById('login-form');
const currentWindow = window.location.pathname;

if (!currentWindow.includes("login.html")) {
    sessionStorage.setItem('lastPage', window.location.href);
}

button.addEventListener('click', authentication)
protectLogin()

if (formulario) {
    formulario.addEventListener('submit', authentication)
}


function authentication(e) {
    e.preventDefault()
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const regexGmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]/;
    if (!regexGmail.test(email)) {
        console.log("Es un correo de Gmail inválido");
        return
    }

    if (email.toLowerCase() === "admin@biblioweb.test" && password === "Admin123") {
        console.log("auth creado pasando a ADMIN")
        sessionStorage.setItem('auth', 'true')
        window.location = "./admin.html"
    } else {
        console.log("credenciales incorrectas")
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