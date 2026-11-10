const auth = sessionStorage.getItem('auth')
const currentWindow = window.location.pathname

if (!currentWindow.includes("index.html") || !currentWindow.includes("login.html") || !currentWindow.includes("catalogo.html")) {

    if (auth != 'true' && window.location != "./login.html") {
        console.log("redirigiendo a login")
        window.location = "./login.html"
    }
} 