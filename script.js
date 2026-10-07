/* =====================================
   FRASES
===================================== */

const textos = [

    "Gracias por coincidir ❤️",
    "Holissss 💗",
    "Eres unica 💕",
    "Siempre pienso en ti ❤️",
    "Me haces muy feliz 💖",
    "Sigue hechandole ganas 💕",
    "Gracias por existir ❤️",
    "Ya nose que poneerrrrr 💗",
    "Me encanta estar contigo ✨",
    "Eres increíble ❤️",
    "Nunca dejes de sonreír 💗",
    "Eres especial para mí ❤️",
    "Contigo todo es más bonito ✨",
    "Me haces sonreír 💕",
    "Te quiero más cada día ❤️",
    "Qué suerte tenerte 💗",
    "Ya dime que siiii 💕",
    "Eres mi felicidad 💖",
    "Siempre estaré contigo ❤️",
    "Eres una personita especial ✨",
    "Me encanta tu forma de ser 💗",
    "Tú haces todo más bonito ❤️",
    "Nunca cambies 💕",

];

const universo =
    document.getElementById("universo");


/* =====================================
   CREAR FRASES EN 3D
===================================== */

textos.forEach((texto, indice) => {

    const frase =
        document.createElement("div");

    frase.classList.add("frase");

    frase.innerHTML = texto;


    /*
       Radio de la órbita
    */

    const radio =
        180 + Math.random() * 260;


    /*
       Posiciones aleatorias
       en todas las direcciones
    */

    const x =
        (Math.random() - 0.5) * radio * 2;

    const y =
        (Math.random() - 0.5) * radio * 1.5;

    const z =
        (Math.random() - 0.5) * radio * 2;


    /*
       Rotación individual
    */

    const rotX =
        Math.random() * 360;

    const rotY =
        Math.random() * 360;

    const rotZ =
        Math.random() * 360;


    /*
       Aplicar posición 3D
    */

    frase.style.transform = `

        translate(-50%, -50%)

        translate3d(
            ${x}px,
            ${y}px,
            ${z}px
        )

        rotateX(${rotX}deg)
        rotateY(${rotY}deg)
        rotateZ(${rotZ}deg)

    `;


    /*
       Diferentes tamaños
    */

    const tamaño =
        0.7 + Math.random() * 0.6;

    frase.style.fontSize =
        `${12 * tamaño}px`;


    universo.appendChild(frase);

});


/* =====================================
   ESTRELLAS
===================================== */

const canvas =
    document.getElementById("espacio");

const ctx =
    canvas.getContext("2d");


function ajustarCanvas() {

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

}


ajustarCanvas();


window.addEventListener(
    "resize",
    ajustarCanvas
);


/* =====================================
   CREAR ESTRELLAS
===================================== */

const estrellas = [];


for (let i = 0; i < 450; i++) {

    estrellas.push({

        x:
            Math.random() *
            canvas.width,

        y:
            Math.random() *
            canvas.height,

        tamaño:
            Math.random() * 2,

        velocidad:
            Math.random() * 0.4 + 0.1,

        brillo:
            Math.random() * Math.PI * 2

    });

}


/* =====================================
   ANIMACIÓN DE ESTRELLAS
===================================== */

function estrellasAnimadas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    estrellas.forEach(estrella => {

        estrella.brillo += 0.02;


        const brillo =
            Math.abs(
                Math.sin(
                    estrella.brillo
                )
            );


        ctx.beginPath();


        ctx.arc(

            estrella.x,
            estrella.y,
            estrella.tamaño,

            0,
            Math.PI * 2

        );


        ctx.fillStyle =
            `rgba(
                255,
                80,
                180,
                ${brillo}
            )`;


        ctx.shadowBlur = 8;

        ctx.shadowColor =
            "#ff1493";


        ctx.fill();


        /*
           Movimiento
        */

        estrella.y +=
            estrella.velocidad;


        if (
            estrella.y >
            canvas.height
        ) {

            estrella.y = 0;

            estrella.x =
                Math.random() *
                canvas.width;

        }

    });


    requestAnimationFrame(
        estrellasAnimadas
    );

}


estrellasAnimadas();