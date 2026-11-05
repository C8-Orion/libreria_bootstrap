# BiblioWeb — catálogo y administración de una biblioteca

Prototipo web estático para presentar una biblioteca, consultar libros y mostrar una experiencia administrativa de ejemplo. El proyecto se desarrolla en equipo con HTML, CSS, Bootstrap 5.3 y JavaScript limitado a la autenticación educativa del administrador y al cambio de tema.

> **Alcance:** los libros, las solicitudes, el formulario administrativo y sus botones son ejemplos de interfaz escritos en HTML. No hay backend, base de datos, persistencia de libros o solicitudes, cuentas de lectores, filtros ni gestión de devoluciones. La cuenta de prueba y `sessionStorage` sirven únicamente para demostrar el flujo en el navegador; no constituyen seguridad real para una aplicación publicada.

## 1. Objetivo y experiencia esperada

- Cualquier visitante puede entrar al inicio y consultar el catálogo sin iniciar sesión.
- El catálogo presenta al menos seis libros y permite abrir un modal visual para simular una solicitud de préstamo.
- El acceso de administrador usa una cuenta educativa definida en JavaScript. Una sesión activa permite abrir el panel; cerrar sesión regresa al inicio.
- El panel muestra libros y solicitudes de ejemplo, además de un formulario visual para alta/edición. Sus controles no modifican ni guardan datos.
- Las cuatro páginas ofrecen tema claro y oscuro y se adaptan a móvil y escritorio.

## 2. Estructura del proyecto y rutas

```text
.
├── index.html                 # Inicio público / landing
├── pages/
│   ├── catalogo.html          # Catálogo público y modal de solicitud
│   ├── login.html             # Acceso educativo del administrador
│   └── admin.html             # Panel protegido de demostración
├── css/
│   ├── base.css               # Reglas base y tema compartido
│   ├── componentes.css        # Componentes y elementos compartidos
│   └── estilos.css            # Ajustes visuales propios del proyecto
├── js/
│   ├── auth.js                # Login, control de sesión y cierre
│   └── tema.js                # Selector claro/oscuro
└── img/
    ├── equipo/                # Imágenes del equipo (si se usan)
    └── libros/                # Portadas del catálogo
```

Las páginas públicas internas están en `pages/`; por eso sus rutas relativas suben un nivel para alcanzar recursos compartidos:

- Desde `index.html`: `pages/catalogo.html`, `pages/login.html`, `pages/admin.html`; recursos `css/...` y `js/...`.
- Desde cualquier HTML de `pages/`: `../index.html`; recursos `../css/...`, `../js/...` y `../img/...`.
- Desde una página de `pages/`, los enlaces a otra página hermana usan `catalogo.html`, `login.html` o `admin.html`.

Mantengan estas ubicaciones para que los enlaces funcionen al abrir el sitio desde la raíz del repositorio.

## 3. Responsables y entregables

### Yerson Franco — líder e integrante responsable de Administración

**Archivos principales:** `pages/admin.html`.

- Maquetar el encabezado de administración con navegación y acción **Cerrar sesión**.
- Incluir el formulario visual con Título, Autor, URL de portada, Descripción y Categoría; botones **Guardar** y **Cancelar**.
- Incluir una tabla estática de libros con Portada, Título, Autor, Categoría y acciones visuales **Editar** / **Eliminar**.
- Incluir la sección **Solicitudes recibidas** con ID, libro, solicitante, correo, comentario y estado de ejemplo (Pendiente).
- Coordinar con Kevin la inclusión del control de sesión y revisar que el flujo login → panel → cierre de sesión quede conectado.
- Liderar la integración: revisar rutas, coherencia visual, enlaces y criterios de aceptación antes de dar por terminado el proyecto.

### Salomé — Inicio / landing

**Archivos principales:** `index.html`.

- Presentar el nombre y propósito de la biblioteca con una llamada clara a consultar el catálogo.
- Maquetar navegación, presentación principal, servicios, horario ficticio y pie de página.
- Enlazar el catálogo y el acceso administrativo con rutas correctas.
- Compartir pronto con el equipo la propuesta de navegación, encabezado y pie para mantener una interfaz coherente. Coordinar con Yerson o Kevin antes de cambiar archivos compartidos.

### Kevin — Login y JavaScript compartido

**Archivos principales:** `pages/login.html`, `js/auth.js`, `js/tema.js`, `css/base.css`.

- Maquetar el título **Acceso de administrador**, campos de correo y contraseña, botón **Ingresar** y un espacio accesible para errores.
- Implementar la validación de campos vacíos y comparar con la cuenta de prueba indicada abajo. Si falla, mostrar **Correo o contraseña incorrectos** y permanecer en login; si es correcta, guardar el indicador en `sessionStorage` y redirigir a `admin.html`.
- Proveer la comprobación de sesión para que el panel redirija inmediatamente a `login.html` cuando no hay sesión, y la función de cierre que borra la sesión y envía a `index.html`. Acordar con Yerson la forma de invocar esas funciones desde `admin.html`.
- Implementar el selector de tema y dejarlo disponible para las cuatro páginas. Coordinar el mismo control de navegación y los atributos de tema con Salomé, Alexander y Yerson.
- Mantener el JavaScript limitado a autenticación/sesión y tema; no añadir gestión de catálogo o solicitudes.

**Cuenta educativa:** correo `admin@biblioweb.test`; contraseña `Admin123`.

### Alexander — Catálogo y solicitud visual

**Archivos principales:** `pages/catalogo.html`.

- Crear una cuadrícula responsiva Bootstrap de al menos seis tarjetas: distribuir ejemplos entre Narrativa, Tecnología y Ciencia.
- Cada tarjeta muestra portada con texto alternativo, título, autor, descripción breve, badge de categoría y botón **Solicitar préstamo**.
- Implementar el modal visual con nombre, correo, comentario opcional, aceptación de términos, botón de cierre y botón de envío simulado.
- Usar imágenes del directorio `../img/libros/` si están disponibles; evitar rutas rotas y usar texto alternativo descriptivo.
- Conectar navegación y selector de tema acordados con el resto del equipo. El formulario no guarda ni envía información.


## 4. Paleta visual oficial de BiblioWeb

Esta es la guía visual común para Inicio, Catálogo, Login y Administración. Aplíquenla por componente, no eligiendo colores distintos página por página. El tema cambia fondos, superficies, textos y bordes; la identidad de marca se reconoce por el verde biblioteca y el acento terracota.

### 4.1 Colores base

| Rol | Tema claro | Tema oscuro | Se usa para |
|---|---|---|---|
| Verde biblioteca | `#1F4D3A` | `#1F4D3A` | Header/navbar y acciones principales en ambos temas. Mantenerlo estable para reconocer la marca. |
| Fondo de página | `#F7F3E8` | `#14231D` | Fondo general detrás de todas las secciones. |
| Superficie principal | `#FFFDF8` | `#20352B` | Cards, formularios, modal, tablas y paneles. |
| Superficie secundaria | `#EDE8D9` | `#263D32` | Secciones alternas, áreas agrupadas y filas destacadas. |
| Texto principal | `#24312B` | `#F5F1E7` | Títulos, párrafos y datos principales. |
| Texto secundario | `#536158` | `#C2CEC4` | Descripciones, ayudas y metadatos. |
| Terracota | `#B85C38` | `#E08A68` | Acción secundaria, llamada puntual o elemento de énfasis. |
| Dorado | `#D6A84F` | `#E2BD70` | Detalle decorativo, ícono o pequeño indicador; nunca texto pequeño sobre fondo claro. |
| Salvia | `#A8B89A` | `#536B59` | Badge, fondo suave o acento secundario. No usar salvia oscura como texto sobre fondo oscuro. |
| Borde | `#D8D2C3` | `#3B5144` | Bordes de campos, cards, tablas y divisores. |
| Éxito | `#286B45` | `#8BC79A` | Confirmación o estado disponible; acompañar con texto/ícono. |
| Error | `#A83232` | `#F08A82` | Error de login o validación; acompañar con texto/ícono. |

### 4.2 Receta por componente

| Componente | Tema claro | Tema oscuro | Instrucción concreta |
|---|---|---|---|
| **Header / navbar** | Fondo Verde biblioteca `#1F4D3A`; texto e íconos `#FFFFFF`. | Mantener el mismo fondo Verde biblioteca `#1F4D3A`; texto e íconos `#FFFFFF`. | Usar la misma identidad en las cuatro páginas. Enlaces normales blancos; enlace activo con subrayado o indicador Dorado `#D6A84F`, no solo por cambio de color. Botón de tema visible y con nombre accesible. |
| **Footer** | Fondo Verde biblioteca `#1F4D3A`; texto `#FFFFFF`; enlaces subrayados o claramente diferenciados. | Fondo `#101B16`; texto `#F5F1E7`; enlaces `#A8C7AE`. | Repetir el mismo contenido y estilo de footer en Inicio y Catálogo; en Login y Administración puede ser compacto, pero conservar estos colores. |
| **Fondo general** | Fondo de página `#F7F3E8`. | Fondo de página `#14231D`. | Aplicar a toda el área del `body`; el contenido principal no debe quedar con un bloque blanco fijo en tema oscuro. |
| **Secciones de contenido** | Alternar Fondo de página `#F7F3E8` y Superficie secundaria `#EDE8D9`; texto principal `#24312B`. | Alternar Fondo de página `#14231D` y Superficie secundaria `#263D32`; texto principal `#F5F1E7`. | Para Inicio: usar una sección de presentación destacada y luego secciones de servicios y horarios. Alternar fondos con moderación para separar bloques, sin convertir cada franja en un color distinto. |
| **Tarjetas / cards** | Superficie `#FFFDF8`; texto `#24312B`; texto auxiliar `#536158`; borde `#D8D2C3`. | Superficie `#20352B`; texto `#F5F1E7`; texto auxiliar `#C2CEC4`; borde `#3B5144`. | En Catálogo, aplicar igual a todas las tarjetas de libro. Badge de categoría puede usar Salvia con texto `#24312B`; evitar texto claro sobre Salvia. En Administración, usar la misma superficie para bloques de formulario y resumen. |
| **Carrusel de Inicio** | La imagen ocupa el fondo; colocar una capa verde/negra semitransparente detrás del texto; texto blanco. Indicadores activos Dorado. | Mantener texto blanco y overlay oscuro sobre la imagen; indicadores activos Dorado. | No poner texto directamente sobre partes claras o cargadas de la foto. Usar overlay suficientemente opaco para leer títulos y botones. Los controles anterior/siguiente deben tener contraste y foco visibles. El tema no debe cambiar la foto; sí puede ajustar el overlay si hace falta. |
| **Botón principal** | Fondo Verde biblioteca `#1F4D3A`; texto `#FFFFFF`; foco/borde visible. | Fondo Verde biblioteca `#1F4D3A`; texto `#FFFFFF`; foco/borde visible. | Reservar para acciones primarias: “Ver catálogo”, “Ingresar” y acciones administrativas que solo son demostrativas. Mantener el mismo aspecto en todas las páginas. |
| **Botón secundario** | Fondo Terracota `#B85C38`; texto `#FFFFFF`. | Fondo Terracota `#B85C38`; texto `#FFFFFF`. | Usar en acciones secundarias, por ejemplo “Solicitar préstamo”. No usar Dorado como fondo de botón con texto blanco. |
| **Botón neutro / cancelar** | Fondo transparente o Superficie; texto `#24312B`; borde `#D8D2C3`. | Fondo transparente o Superficie; texto `#F5F1E7`; borde `#3B5144`. | Usar para “Cancelar”, cerrar o acciones menos importantes. Debe seguir pareciendo botón y mostrar foco al teclado. |
| **Formularios** | Campo `#FFFDF8`, texto `#24312B`, placeholder `#536158`, borde `#D8D2C3`; foco Verde biblioteca. | Campo `#20352B`, texto `#F5F1E7`, placeholder `#C2CEC4`, borde `#3B5144`; foco `#A8C7AE`. | Etiquetas visibles encima de los campos. Aplicar también a select, checkbox, validación, ayuda y foco. No depender solo del placeholder para explicar un campo. |
| **Login** | Fondo de página `#F7F3E8`; caja/card `#FFFDF8`; título y texto `#24312B`; botón Ingresar Verde biblioteca; error con texto `#A83232`. | Fondo `#14231D`; caja `#20352B`; título y texto `#F5F1E7`; botón Ingresar Verde biblioteca; error con texto `#F08A82`. | Login debe usar el mismo header y selector de tema. Dar protagonismo al formulario sin imágenes decorativas que distraigan. El mensaje de credenciales incorrectas debe verse junto al formulario en ambos temas. |
| **Tablas de Administración** | Contenedor `#FFFDF8`; encabezado de tabla Verde biblioteca con texto blanco; filas alternas `#F7F3E8`; texto `#24312B`. | Contenedor `#20352B`; encabezado Verde biblioteca con texto blanco; filas alternas `#263D32`; texto `#F5F1E7`. | Conservar bordes legibles y permitir desplazamiento horizontal en móvil si la tabla no cabe. Los botones Editar/Eliminar deben distinguirse por texto, además del color. |
| **Modal de préstamo** | Fondo del modal `#FFFDF8`; texto `#24312B`; campos como formulario claro; header puede usar Verde biblioteca y texto blanco. | Fondo del modal `#20352B`; texto `#F5F1E7`; campos como formulario oscuro; header puede usar Verde biblioteca y texto blanco. | El fondo detrás del modal debe oscurecerse; mantener legibles etiquetas, aceptación de términos, botón cerrar y botones de acción. |
| **Badges / estados** | Salvia `#A8B89A` con texto `#24312B`; éxito `#286B45` con texto blanco; error `#A83232` con texto blanco. | Salvia oscura `#536B59` con texto `#F5F1E7`; éxito `#8BC79A` con texto `#14231D`; error `#F08A82` con texto `#14231D`. | Narrativa, Tecnología, Ciencia y Pendiente deben tener texto legible. No comunicar la categoría o estado solo por color: mantener siempre su nombre escrito. |

### 4.3 Cómo aplicarlo página por página

1. **Inicio (`index.html`, Salomé):** header verde; hero/carrusel con overlay oscuro y texto blanco; servicios y horarios en secciones alternas; tarjetas en superficie; footer según la receta.
2. **Catálogo (`pages/catalogo.html`, Alexander):** header verde; fondo general del tema; cards de libros con superficie, texto y bordes de la receta; badges legibles; modal que cambie sus superficies y campos con el tema.
3. **Login (`pages/login.html`, Kevin):** header verde; fondo general; formulario dentro de una card; campos adaptados al tema; botón principal verde; mensaje de error con texto e indicador visibles.
4. **Administración (`pages/admin.html`, Yerson):** header verde con cierre de sesión; fondo general; formulario y tablas como superficies; cabecera de tabla verde; estados de solicitudes en badge legible; acciones diferenciadas y usables en móvil.
5. **Tema compartido (Kevin):** probar las cuatro páginas en claro y oscuro y confirmar que ningún componente conserva un fondo/texto fijo que rompa el contraste del otro tema.

### 4.4 Contraste y reglas de consistencia

El objetivo es que el texto normal alcance al menos **4.5:1** de contraste con su fondo; para texto grande, al menos **3:1**. Combinaciones verificadas:

| Texto | Fondo | Contraste aproximado | Uso |
|---|---|---:|---|
| `#1F4D3A` | `#F7F3E8` | 8.68:1 | Enlace verde sobre fondo claro. |
| `#24312B` | `#F7F3E8` | 12.23:1 | Texto principal en tema claro. |
| `#FFFFFF` | `#1F4D3A` | 9.63:1 | Texto de header o botón verde. |
| `#FFFFFF` | `#B85C38` | 4.54:1 | Texto normal en botón terracota; no aclarar ese terracota. |
| `#F5F1E7` | `#14231D` | 14.46:1 | Texto principal en tema oscuro. |

Dorado sobre marfil no tiene contraste suficiente para texto; usarlo solo como detalle. Revisar contraste de cualquier combinación no listada, particularmente estados hover/focus, texto sobre badges, overlays del carrusel y mensajes de validación. Mantener foco de teclado visible en ambos temas.

### 4.5 Acuerdo técnico de aplicación

- Bootstrap 5.3 aporta la estructura y los componentes; esta sección define los colores de marca y sus roles.
- Kevin mantiene el selector y el comportamiento del tema en `js/tema.js`; todos cargan el mismo script y usan el mismo mecanismo de tema.
- Las clases de Bootstrap pueden convivir con clases propias. Evitar poner hexadecimales distintos directamente en cada página; los colores y sus roles deben centralizarse en los estilos compartidos (`css/base.css`, `css/componentes.css` o `css/estilos.css`, según acuerde el equipo).
- Antes de crear una nueva variante de color, consultar esta tabla. Si hace falta una excepción, acordarla y documentarla para que todas las páginas sigan consistentes.
## 5. Contrato de integración compartido

Antes de que cada persona complete el diseño, acuerden y respeten lo siguiente:

1. **Estructura común:** mismo nombre/logo, navegación comprensible, pie coherente, tipografía y espaciados base. Cada página conserva su contenido propio.
2. **Navegación pública:** Inicio, Catálogo y Acceso de administrador. El panel incluye Cerrar sesión. No se debe exigir login para ver inicio o catálogo.
3. **Tema:** incluir el mismo selector y cargar `tema.js` en las cuatro páginas. Usar el sistema de temas de Bootstrap 5.3 de forma consistente; verificar contraste, foco, formularios, tarjetas, tablas y modal en ambos temas.
4. **Recursos:** cargar los CSS compartidos en orden acordado y los scripts con rutas relativas correctas. En catálogo, modal y componentes interactivos de Bootstrap, cargar también el bundle JavaScript de Bootstrap 5.3.
5. **Diseño adaptable:** aprovechar contenedores, grid, navbar, cards, forms, badges, tables y modal de Bootstrap. Revisar que tablas y formularios sean utilizables en pantallas pequeñas.
6. **Datos estáticos:** usar ejemplos coherentes entre catálogo, tabla administrativa y solicitudes. No añadir arreglos JS, localStorage ni lógica de guardar/editar/eliminar/enviar.
7. **Accesibilidad básica:** asociar etiquetas a campos, botones con nombres claros, `alt` en imágenes, foco visible, mensajes de error legibles y estructura de encabezados ordenada.

## 6. Flujo de trabajo en GitHub

### Antes de empezar

- Cada integrante confirma que puede clonar, abrir el proyecto y subir una rama al repositorio compartido.
- La líder publica las tareas y responsables en GitHub Issues o en el canal acordado; una tarea debe indicar archivos, resultado esperado y cómo se revisará.
- El equipo acuerda quién integra navegación/estilos compartidos. No editen simultáneamente el mismo archivo sin avisarse.

### Por cada tarea

1. Actualizar la rama principal local: `git switch main` y `git pull origin main`.
2. Crear una rama propia desde `main`, por ejemplo `feat/landing-salome`, `feat/login-kevin`, `feat/catalogo-alexander` o `feat/admin-Yerson`.
3. Trabajar principalmente en los archivos asignados. Si hace falta cambiar un archivo compartido, avisar al responsable y explicar el motivo en el pull request.
4. Guardar avances en commits pequeños y descriptivos, por ejemplo `feat: agrega tarjetas del catálogo` o `fix: corrige rutas del panel`.
5. Subir la rama y abrir un Pull Request hacia `main`. Describir qué se hizo, archivos principales y comprobaciones manuales realizadas.
6. Pedir revisión a otra persona. Resolver comentarios y verificar la vista en navegador antes de integrar.
7. Integrar el PR solo cuando sus enlaces, recursos y alcance estén revisados. Después actualizar la rama local para continuar.

**Regla de equipo:** no hacer `push` directo a `main`, no mezclar cambios de otra persona sin coordinación y no integrar páginas que todavía tengan enlaces o recursos rotos. Si hay conflicto, las personas dueñas de los archivos lo resuelven juntas antes de aceptar el merge.

### Secuencia de integración sugerida

1. **Base compartida:** acordar rutas, navegación, encabezado/pie, versión de Bootstrap y carga del tema.
2. **Esqueletos:** cada integrante sube su página con estructura semántica, navegación y recursos enlazados; integrar pronto para descubrir errores de rutas.
3. **Contenido:** completar landing, login, catálogo y panel en ramas independientes.
4. **Conexiones:** integrar login y guardia de sesión con panel; enlazar catálogo y modal; aplicar selector de tema a las cuatro páginas.
5. **Revisión conjunta:** abrir cada página desde `index.html`, comprobar vistas en móvil/escritorio y recorrer los flujos de aceptación.
6. **Cierre:** actualizar README si cambió el alcance o la estructura y comprobar que `main` tiene la versión integrada acordada.

## 7. Criterios de aceptación

- [ ] `index.html` presenta biblioteca, servicios, horario, navegación y enlaces a catálogo y login.
- [ ] Catálogo público abre sin login y muestra al menos seis libros en las tres categorías acordadas.
- [ ] Cada tarjeta incluye todos los elementos requeridos; el botón abre el modal.
- [ ] Modal muestra los cuatro controles solicitados y sus acciones son simuladas.
- [ ] Login detecta campos vacíos y credenciales incorrectas, y acepta la cuenta educativa indicada.
- [ ] Login correcto establece una sesión de pestaña y abre `pages/admin.html`.
- [ ] Abrir el panel directamente sin sesión redirige a `pages/login.html`.
- [ ] Cerrar sesión elimina el indicador y vuelve a `index.html`.
- [ ] Panel presenta formulario visual, tabla estática de libros y tabla estática de solicitudes.
- [ ] Tema claro/oscuro está disponible y legible en inicio, catálogo, login y administración.
- [ ] Enlaces, CSS, imágenes y scripts cargan correctamente desde todas las páginas.
- [ ] La interfaz se adapta a móvil y escritorio; no hay funciones fuera del alcance declaradas.

## 8. Revisión manual antes de entregar

Abrir `index.html` en un navegador (o usar un servidor local sencillo si el navegador restringe recursos), luego:

1. Navegar de Inicio a Catálogo y Login, y volver al Inicio.
2. Abrir y cerrar el modal desde varios libros; revisar campos, etiquetas y foco.
3. Probar login vacío, incorrecto y correcto.
4. Abrir la URL del panel en una sesión nueva/sin iniciar sesión y comprobar la redirección.
5. Cerrar sesión y confirmar que regresa al inicio; volver a intentar el panel.
6. Cambiar tema en cada página y revisar textos, foco, tablas, tarjetas, formularios y modal.
7. Reducir el ancho del navegador y revisar navegación, tarjetas, tablas y formularios.
8. Revisar la consola del navegador y corregir errores de carga o JavaScript.

## 9. Convenciones de contenido

- Mantener textos en español, ortografía cuidada y el mismo nombre de biblioteca en todas las páginas.
- Usar datos ficticios consistentes para libros y solicitudes.
- No incluir datos personales reales. En la demostración, los nombres, correos y comentarios son inventados.
- Los botones simulados deben comunicar su propósito, pero no aparentar que guardaron o enviaron datos realmente.




