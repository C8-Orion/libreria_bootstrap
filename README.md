# BiblioWeb

BiblioWeb es un prototipo de biblioteca digital desarrollado con **HTML5, CSS3, Bootstrap 5.3 y JavaScript**. Permite conocer los servicios de la biblioteca, explorar un catálogo de libros, filtrar resultados y visualizar un espacio de administración con acceso de demostración.

> **Importante:** este proyecto es una demostración frontend. No utiliza backend ni base de datos. Los datos del panel son estáticos y los formularios de préstamo y administración no guardan ni envían información real. La autenticación está implementada únicamente para mostrar el flujo de navegación y no debe utilizarse como mecanismo de seguridad en producción.

## Características

### Sitio público
- Página de inicio con presentación de la biblioteca, servicios, horarios y enlaces de navegación.
- Catálogo con tarjetas de libros, portada, título, autor y categoría.
- Búsqueda por título, autor o categoría.
- Filtros por categoría: Todos, Narrativa, Tecnología y Ciencia.
- Contador de libros visibles según la búsqueda y el filtro aplicado.
- Modal de solicitud de préstamo como demostración visual.

### Acceso y administración
- Formulario de inicio de sesión para el administrador.
- Validación de campos obligatorios y formato del correo.
- Comprobación de credenciales de demostración.
- Protección básica de la página de administración mediante `sessionStorage`.
- Opción para cerrar sesión.
- Panel con formulario visual para libros y tablas de ejemplo de libros y solicitudes.

### Interfaz
- Diseño adaptable a diferentes tamaños de pantalla mediante Bootstrap.
- Tema claro y oscuro, con preferencia guardada en `localStorage`.
- Estilos compartidos, componentes reutilizables y recursos gráficos locales.

## Tecnologías utilizadas

- **HTML5:** estructura y contenido de las páginas.
- **CSS3:** estilos propios, variables y adaptación visual.
- **Bootstrap 5.3:** sistema de grillas, componentes, formularios, botones, tarjetas, tablas y modales.
- **JavaScript:** validación del acceso, control demostrativo de sesión, cambio de tema y filtrado del catálogo.
- **Google Fonts:** tipografías del proyecto.
- **Git y GitHub:** control de versiones y trabajo colaborativo.

## Estructura del proyecto

```text
libreria_bootstrap/
├── index.html
├── README.md
├── css/
│   ├── base.css
│   ├── componentes.css
│   └── estilos.css
├── js/
│   ├── auth.js
│   ├── guard.js
│   └── tema.js
├── pages/
│   ├── admin.html
│   ├── catalogo.html
│   └── login.html
└── img/
    ├── actividades.jpeg
    ├── coleccion.jpeg
    ├── salas.jpeg
    ├── logo-libro.svg
    └── libros/
        ├── libro1.jpeg
        ├── libro2.jpeg
        ├── libro3.jpg
        ├── libro4.jpg
        ├── libro5.jpeg
        ├── libro5.jpg
        └── libro6.jpg
```

### Descripción de carpetas y archivos

| Ruta | Descripción |
|---|---|
| `index.html` | Página principal de BiblioWeb. |
| `pages/catalogo.html` | Catálogo público, buscador, filtros y modal de préstamo. |
| `pages/login.html` | Formulario de acceso del administrador. |
| `pages/admin.html` | Panel de administración de demostración. |
| `css/base.css` | Estilos y variables base compartidas, incluidos los temas. |
| `css/componentes.css` | Estilos de componentes reutilizables. |
| `css/estilos.css` | Ajustes visuales específicos de BiblioWeb. |
| `js/auth.js` | Validación de acceso, sesión y cierre de sesión. |
| `js/guard.js` | Script auxiliar de control de acceso. |
| `js/tema.js` | Selección y persistencia del tema claro u oscuro. |
| `img/` | Imágenes generales, logotipo y portadas de libros. |

## Cómo ejecutar el proyecto

No requiere instalación de dependencias ni proceso de compilación.

1. Descarga o clona el repositorio.
2. Abre la carpeta del proyecto.
3. Ejecuta `index.html` en un navegador web.

También puedes utilizar la extensión **Live Server** de Visual Studio Code para iniciar un servidor local y recargar los cambios automáticamente.

> Se recomienda iniciar desde `index.html` y no abrir directamente las páginas internas, para comprobar correctamente la navegación y las rutas relativas.

## Credenciales de demostración

Para ingresar al panel administrativo utiliza:

| Campo | Valor |
|---|---|
| Correo | `admin@biblioweb.test` |
| Contraseña | `Admin123` |

La sesión se mantiene en `sessionStorage`, por lo que está asociada a la pestaña del navegador y se pierde al cerrar la sesión o la pestaña.

**Advertencia de seguridad:** las credenciales están visibles en el código JavaScript del cliente. Este método no protege información real. Una aplicación en producción necesitaría autenticación y autorización implementadas en un servidor, además de almacenamiento seguro de contraseñas.

## Navegación del sitio

- **Inicio:** `index.html`
- **Catálogo:** `pages/catalogo.html`
- **Acceso de administrador:** `pages/login.html`
- **Panel de administración:** `pages/admin.html` (requiere la sesión de demostración)

Las páginas ubicadas dentro de `pages/` utilizan rutas relativas como `../css/`, `../js/` y `../img/` para acceder a los recursos compartidos.

## Alcance y funcionalidades no implementadas

BiblioWeb es un prototipo de interfaz. Por el momento:

- No existe conexión con una API, servidor o base de datos.
- Las solicitudes de préstamo no se envían ni se almacenan.
- El formulario administrativo no crea, edita ni elimina libros.
- Las tablas del panel contienen información estática de ejemplo.
- No hay gestión real de usuarios, préstamos, devoluciones ni inventario.
- El inicio de sesión es demostrativo y no proporciona seguridad real.

## Trabajo colaborativo

El proyecto se desarrolló en equipo, distribuyendo las páginas y responsabilidades para integrar una experiencia visual común:

- **Inicio / landing:** estructura de presentación, servicios y horarios.
- **Catálogo:** tarjetas de libros, búsqueda, filtros y modal de solicitud.
- **Login y JavaScript compartido:** validación del acceso, control de sesión y selector de tema.
- **Administración:** formulario visual y tablas de información de ejemplo.

Para contribuir, se recomienda trabajar en ramas independientes y realizar cambios mediante Pull Requests hacia la rama principal. Antes de integrar, comprobar rutas, enlaces, estilos y funcionamiento en distintos tamaños de pantalla.

## Pruebas manuales recomendadas

- [ ] Abrir `index.html` y recorrer la navegación.
- [ ] Entrar al catálogo y comprobar la búsqueda por título, autor y categoría.
- [ ] Aplicar cada filtro y verificar que el contador se actualice.
- [ ] Abrir y cerrar el modal de solicitud de préstamo.
- [ ] Intentar iniciar sesión con campos vacíos y credenciales incorrectas.
- [ ] Iniciar sesión con las credenciales de demostración y comprobar el acceso al panel.
- [ ] Intentar abrir el panel sin sesión.
- [ ] Cerrar sesión y comprobar el regreso al inicio.
- [ ] Cambiar entre tema claro y oscuro en las páginas.
- [ ] Revisar la interfaz en escritorio y móvil.
- [ ] Comprobar que no existan imágenes, enlaces o recursos que fallen al cargar.

## Autoría

Proyecto académico colaborativo: **BiblioWeb**.

Desarrollado como ejercicio práctico de maquetación web, diseño responsivo, uso de Bootstrap y fundamentos de JavaScript.

---

© 2026 BiblioWeb. Proyecto educativo.
