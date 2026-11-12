const button = document.getElementById('btnSubmit');
const formulario = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const errorMessageFull = document.getElementById('error-message-full');

const currentWindow = window.location.pathname;

if (!currentWindow.includes("login.html")) {
    sessionStorage.setItem('lastPage', window.location.href);
}
protectLogin();

if (formulario) {
    formulario.addEventListener('submit', authentication);
} else if (button) {
    button.addEventListener('click', authentication);
}

if (emailInput) {

    emailInput.addEventListener('change', () => {

        const email = emailInput.value;

        const regexGmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!regexGmail.test(email)) {

            emailInput.classList.add("is-invalid");

            if (errorMessage) {
                errorMessage.innerText = "Formato de correo inválido";
            }

            return;
        }

        emailInput.classList.remove("is-invalid");

        if (errorMessage) {
            errorMessage.innerText = "";
        }

    });

}

function authentication(e) {

    e.preventDefault();

    const password = document.getElementById('password').value;
    const email = emailInput.value;

    const regexGmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validar campos vacíos.

    if (email === "" || password === "") {

        if (errorMessageFull) {
            errorMessageFull.innerText = "Ingrese todos los campos";
        }

        return;
    }

    if (!regexGmail.test(email)) {

        emailInput.classList.add("is-invalid");

        if (errorMessage) {
            errorMessage.innerText = "Formato de correo inválido";
        }

        return;
    }

    emailInput.classList.remove("is-invalid");

    // Validar credenciales.

    if (
        email.toLowerCase() === "admin@biblioweb.test" &&
        password === "Admin123"
    ) {

        console.log("Autenticación correcta. Pasando a ADMIN");

        sessionStorage.setItem('auth', 'true');

        window.location.href = "./admin.html";

    } else {

        if (errorMessageFull) {
            errorMessageFull.innerText = "Correo o contraseña inválidos";
        }

    }

}


function protectLogin() {

    const auth = sessionStorage.getItem('auth');

    const currentWindow = window.location.pathname;

    // Si ya inició sesión, evitar volver al login.

    if (auth === 'true' && currentWindow.includes("login.html")) {

        const previousPage = sessionStorage.getItem('lastPage');

        window.location.href = previousPage || "./admin.html";

    }

    if (auth !== 'true' && currentWindow.includes("admin.html")) {

        window.location.href = "./login.html";

    }

}


function logout() {

    sessionStorage.removeItem('auth');

    sessionStorage.removeItem('lastPage');

    window.location.href = '../index.html';

}

const logoutBtn = document.getElementById('btn-logout');

if (logoutBtn) {

    logoutBtn.addEventListener('click', (e) => {

        e.preventDefault();

        logout();

    });

}