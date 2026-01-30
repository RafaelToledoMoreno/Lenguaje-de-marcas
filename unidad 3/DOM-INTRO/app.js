"use strict";

const app = document.getElementById("app");
// const app = document.querySelector("#app");
const name = "1º DAW";

app.textContent = `Hola ${name}`;
// app.textContent = "<p>Hola Sergio</p>";
app.innerHTML = "<strong>Hola Sergio</strong>";
app.innerHTML = `
    <section>
        <p>Hola ${name}, espero que estéis aprendiendo algo.
            <strong>Menos mal que empieza el finde.</strong>
        </p>
    </section>`;

    //Metodos modernos para modificar contenido
    console.log("Metodo moderno get HTML: " + app.getHTML());
    const cod = `<p><strong>SetHTMLUnsafe</strong> es la alternativa moderna
    a InnerHTML para modificar contenido HTML</p>`;
    app.setHTMLUnsafe(cod);

    // Crear elementos HTML
    // Metodo CreateElement("etiqueta");
    const seccion = document.createElement("section");
    console.log("El elemento seccion aun no está conectado o insertado:", seccion.isConnected);
    seccion.innerHTML = `<p>Estoy inyectando código HTML a la seccion</p>`;

    //Añado la nueva seccion al div cuyo id es app
    app.appendChild(seccion);
    console.log(seccion.isConnected);       //true porque ya esta insertada


    //Si quisiera clonar el elemto seccion
    const copiaSeccion = seccion.cloneNode();
    const copiaProfunda = seccion.cloneNode(true);

    //Mini reto
    const div = document.querySelector(".container");