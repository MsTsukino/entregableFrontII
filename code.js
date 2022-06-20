/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

const listado = [{
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona = {
        nombre: prompt("Ingresa tu nombre"),
        edad: 2022 - prompt("Ingresa el año en que naciste"),
        ciudad: prompt("Ingresa la ciudad donde vives "),
        interesPorJs: confirm("Le interesa Javascript?"),
    }
    console.log(datosPersona);
}

function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    let nombre = document.getElementById("nombre")
    nombre.innerHTML = datosPersona.nombre;
    let edad = document.getElementById("edad")
    edad.innerHTML = datosPersona.edad;
    let ciudad = document.getElementById("ciudad")
    ciudad.innerHTML = datosPersona.ciudad;
    let javascript = document.getElementById("javascript")
    javascript.innerHTML = datosPersona.interesPorJs ? "Si" : "No";
}


function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    for (let cajas in listado) {
        var div = document.createElement("div");
        var divCaja = document.querySelector("#fila").appendChild(div);
        div.setAttribute("class", "caja");

        var img = document.createElement("img");
        divCaja.appendChild(img);
        var url = listado[cajas].imgUrl;
        img.setAttribute("src", url);
        var alt = listado[cajas].lenguajes;
        img.setAttribute("alt", alt);

        var lenguaje = document.createElement("p");
        lenguaje.setAttribute("class", "lenguajes");
        divCaja.appendChild(lenguaje);
        lenguaje.innerHTML = listado[cajas].lenguajes;
        lenguaje.innerHTML = "Lenguaje: " + listado[cajas].lenguajes;

        var bimestre = document.createElement("p");
        bimestre.setAttribute("class", "bimestre");
        divCaja.appendChild(bimestre);
        bimestre.innerHTML = listado[cajas].bimestre;
        bimestre.innerHTML = "Bimestre: " + listado[cajas].bimestre;
    }
    materiasBtn.disabled = true;
}

function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    document.querySelector("#sitio").classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", function(e) {
    if (e.key == "F" || e.key == "f") {
        document.getElementById("sobre-mi").classList.remove("oculto")
    }
})