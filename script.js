const curiosidades = [ 
    {
        titulo: "Las mariposas",
        img: "imagenes/mariposa.jpg",
        texto: "Sabías que las mariposas se alimentan de frutas podridas, sangre, orina y más. Si alguna vez se te posó una encima, probablemente quería tu sudor."
    },
    {
        titulo: "La música",
        img: "imagenes/musica.jpg",
        texto: "El ritmo cardíaco se adapta a la música. Escuchar música involucra todas las partes del cerebro."
    },
    {
        titulo: "Los fantasmas",
        img: "imagenes/fantasma.jpg",
        texto: "¿Te despiertas a las 3 a.m.? Algunos creen que es porque algo te observa. ¿Será verdad?"
    },
    {
        titulo: "Las sanguijuelas",
        img: "imagenes/sangijuela.jpg",
        texto: "Tienen 32 cerebros, son hermafroditas y poseen 3 mandíbulas con cientos de dientes. Son usadas en medicina."
    },
    {
        titulo: "Las plantas",
        img: "imagenes/planta.jpg",
        texto: "Sienten, se comunican y algunas pueden 'suicidarse' si las condiciones no les favorecen."
    },
    {
        titulo: "Los gatos",
        img: "imagenes/gato.jpg",
        texto: "El primer año de un gato equivale a 15 años humanos. ¡Después envejecen más lento!"
    },
    {
        titulo: "El tabaco",
        img: "imagenes/tabaco.jpg",
        texto: "Rodrigo de Jerez trajo el tabaco a Europa, pero fue encarcelado por 'escupir humo como el diablo'."
    },
    {
        titulo: "Los pulpos",
        img: "imagenes/pulpo.jpg",
        texto: "Tienen 3 corazones y sangre azul. Son criaturas extremadamente inteligentes con capacidades sorprendentes."
    },
    {
        titulo: "El Sol",
        img: "imagenes/sol.jpg",
        texto: "Cada segundo, el Sol convierte 4 millones de toneladas de materia en energía pura."
    },
    {
        titulo: "Tu cerebro",
        img: "imagenes/cerebro.jpg",
        texto: "Consume el 20% de toda la energía de tu cuerpo, incluso cuando duermes."
    },
    {
        titulo: "Los tiburones",
        img: "imagenes/tiburon.jpg",
        texto: "Los tiburones existían antes que los dinosaurios. Han sobrevivido más de 400 millones de años."
    },
    {
        titulo: "Los árboles",
        img: "imagenes/arbol.jpg",
        texto: "Los árboles pueden comunicarse entre sí a través de una red subterránea de hongos llamada 'Wood Wide Web'."
    },
    {
        titulo: "Las medusas",
        img: "imagenes/medusa.jpg",
        texto: "Algunas medusas son biológicamente inmortales. Pueden reiniciar su ciclo de vida bajo ciertas condiciones."
    },
    {
        titulo: "El agua caliente",
        img: "imagenes/agua.jpg",
        texto: "El agua caliente puede congelarse más rápido que el agua fría. Se conoce como el Efecto Mpemba."
    },
    {
        titulo: "El ADN humano",
        img: "imagenes/adn.jpg",
        texto: "Compartimos alrededor del 60% de nuestro ADN con los plátanos. ¡Somos más parecidos de lo que crees!"
    },
    {
        titulo: "Las vacas",
        img: "imagenes/vaca.jpg",
        texto: "Las vacas tienen mejores amigas y se estresan cuando están separadas."
    },
    {
        titulo: "Las hormigas",
        img: "imagenes/hormiga.jpg",
        texto: "Las hormigas no duermen nunca. En cambio, tienen pequeños periodos de descanso cada pocas horas."
    },
    {
        titulo: "El cuerpo humano",
        img: "imagenes/cuerpo.jpg",
        texto: "En promedio, el cuerpo humano tiene suficientes átomos como para crear 7 billones de copos de nieve."
    },
    {
        titulo: "El vino en el espacio",
        img: "imagenes/vino.jpg",
        texto: "Francia envió vino al espacio para estudiar cómo envejece fuera de la Tierra."
    },
    {
        titulo: "Los flamencos",
        img: "imagenes/flamenco.jpg",
        texto: "Los flamencos no nacen rosados. Su color viene de los carotenoides en su dieta."
    },
    {
        titulo: "Los escorpiones",
        img: "imagenes/escorpion.jpg",
        texto: "Los escorpiones pueden sobrevivir hasta un año sin comida y resisten dosis letales de radiación."
    },
    {
        titulo: "El Monte Everest",
        img: "imagenes/everest.jpg",
        texto: "El Everest crece unos 4 mm por año debido al movimiento de las placas tectónicas."
    },
    {
        titulo: "Las libélulas",
        img: "imagenes/libelula.jpg",
        texto: "Las libélulas pueden cazar con una precisión del 95%. Son depredadores aéreos impresionantes."
    },
    {
        titulo: "La luna",
        img: "imagenes/luna.jpg",
        texto: "La luna se aleja de la Tierra 3.8 cm cada año. ¡En millones de años será invisible!"
    },
    {
        titulo: "Los camaleones",
        img: "imagenes/camaleon.jpg",
        texto: "Los camaleones no cambian de color solo por camuflaje, sino también por su estado emocional."
    },
    {
        titulo: "La risa",
        img: "imagenes/risa.jpg",
        texto: "Los bebés ríen antes de hablar. La risa es una forma primitiva de comunicación social."
    },
    {
        titulo: "El ADN de los gemelos",
        img: "imagenes/gemelos.jpg",
        texto: "Aunque los gemelos idénticos tienen ADN casi igual, pequeñas mutaciones hacen que no sean 100% idénticos."
    },
    {
        titulo: "Los ojos de los gatos",
        img: "imagenes/ojosgato.jpg",
        texto: "Los gatos pueden ver en la oscuridad con solo una sexta parte de la luz que necesita el ojo humano."
    },
    {
        titulo: "Los volcanes submarinos",
        img: "imagenes/volcan.jpg",
        texto: "La mayoría de los volcanes están bajo el océano, formando nuevas islas sin que lo veamos."
    },
    {
        titulo: "El polvo cósmico",
        img: "imagenes/polvo.jpg",
        texto: "Cada día caen en la Tierra entre 5 y 300 toneladas de polvo cósmico proveniente del espacio."
    },
    {
        titulo: "Los gatos negros",
        img: "imagenes/gatonegro.jpg",
        texto: "En algunas culturas traen mala suerte, pero en otras, como en Japón, son símbolo de buena fortuna."
    },
    {
        titulo: "Los cuervos",
        img: "imagenes/cuervo.jpg",
        texto: "Pueden recordar rostros humanos y guardar rencor por años. Son aves increíblemente inteligentes."
    },
    {
        titulo: "Los plátanos",
        img: "imagenes/platano.jpg",
        texto: "Son ligeramente radiactivos debido a su alto contenido de potasio-40. Pero no te preocupes, no hacen daño."
    },
    {
        titulo: "El hielo caliente",
        img: "imagenes/hielo.jpg",
        texto: "Existe un tipo de hielo llamado 'ice VII' que se forma a presiones extremas y está más caliente que el punto de ebullición del agua."
    },
    {
        titulo: "La tierra",
        img: "imagenes/tierra.jpg",
        texto: "Cada año, el planeta gana unas 40,000 toneladas de masa por el polvo espacial que cae sobre él."
    },
    {
        titulo: "Las jirafas",
        img: "imagenes/jirafa.jpg",
        texto: "Aunque tienen cuellos largos, solo tienen siete vértebras cervicales, igual que los humanos."
    },
    {
        titulo: "La sangre azul",
        img: "imagenes/cangrejo.jpg",
        texto: "Los cangrejos herradura tienen sangre azul debido a la hemocianina. Su sangre es usada en medicina para detectar bacterias."
    },
    {
        titulo: "El bostezo",
        img: "imagenes/bostezo.jpg",
        texto: "Bostezar ayuda a enfriar el cerebro y mantenerlo alerta. ¡Por eso es contagioso!"
    },
    {
        titulo: "El cuerpo humano",
        img: "imagenes/piel.jpg",
        texto: "Tu piel se renueva completamente cada 28 días. ¡Tienes una nueva piel cada mes!"
    },
    {
        titulo: "La lengua",
        img: "imagenes/lengua.jpg",
        texto: "Es el músculo más fuerte del cuerpo en proporción a su tamaño. También es único en cada persona, como una huella dactilar."
    }
];

let mostradas = 0;
const contenedor = document.getElementById("contenedor-curiosidades");
const boton = document.getElementById("mostrar-mas");

function mostrarCuriosidades(cantidad = 3) {
    const final = Math.min(mostradas + cantidad, curiosidades.length);
    for (let i = mostradas; i < final; i++) {
        const caja = document.createElement("div");
        caja.className = "cajashijas";
        caja.innerHTML = `
            <div class="contenido-curiosidad">
                <img src="${curiosidades[i].img}" alt="${curiosidades[i].titulo}">
                <h3>${curiosidades[i].titulo}</h3>
                <p>${curiosidades[i].texto}</p>
            </div>
            <button class="descargar-btn" onclick="descargarCuriosidad(this)">Descargar</button>
        `;
        contenedor.appendChild(caja);
    }
    mostradas = final;
    if (mostradas >= curiosidades.length) {
        boton.style.display = "none";
    }
}

boton.addEventListener("click", () => mostrarCuriosidades());
window.onload = () => mostrarCuriosidades(3);

function descargarCuriosidad(boton) {
    const caja = boton.parentElement;

    // Oculta el botón para que no aparezca en la imagen
    boton.style.display = "none";

    html2canvas(caja, { backgroundColor: 'white', scale: 2 }).then(canvas => {
        boton.style.display = "inline-block";

        const enlace = document.createElement("a");
        const titulo = caja.querySelector("h3").innerText.replace(/\s+/g, "_");
        const fecha = new Date().toISOString().slice(0, 10);
        enlace.download = `${titulo}_${fecha}.jpg`;
        enlace.href = canvas.toDataURL("image/jpeg", 1.0);
        enlace.click();
    }).catch(err => {
        console.error(err);
        boton.style.display = "inline-block";
        alert("Error al descargar la imagen.");
    });
}
