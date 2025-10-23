// Esperar hasta que todas las fuentes personalizadas estén cargadas
document.fonts.ready.then(() => {
    console.log("Fuentes listas, inicializando página...");
    
    // Ejecutar funciones principales
    screen_main();
    scale_animation();
    typed();

    // Mostrar contenido una vez listo
    document.body.style.visibility = 'visible';
});

// Recalcular si se redimensiona la ventana (por orientación en móviles, etc.)
window.addEventListener('resize', () => {
    screen_main();
});
/*
window.addEventListener('load', () => {
    document.body.style.visibility = 'visible';
})*/

function screen_main(){
    //800x1849px
    const photo_main    = document.querySelector('#photo_main')
    const nombres       = document.querySelector('#nombres')
    const cronometro    = document.querySelector('#cronometro')
    const blank         = document.querySelector('#blank_space')

    let nh_names = Math.round( photo_main.height * .68 )
    nombres.style.height = `${nh_names}px`

    let nh_cronometro = Math.round( photo_main.height * .16 )
    cronometro.style.height = `${nh_cronometro}px`

    let space = Math.round( photo_main.height * .16 )
    blank.style.height = `${space}px`
}

function scale_animation(){
    window.addEventListener('scroll', function(){
        let elemento = document.getElementsByClassName("bounce-scale")
        for( var i = 0; i < elemento.length; i++ ) {
            let posiciones = elemento[i].getBoundingClientRect().top
            let tamPantalla = window.innerHeight
            if(posiciones < tamPantalla){
                // Alternar entre dos tipos de animación de humo para variedad
                if(i % 2 === 0) {
                    elemento[i].style.animation = 'smokeReveal 0.8s ease-out'
                } else {
                    elemento[i].style.animation = 'smokeRevealAlt 0.7s ease-out'
                }
            } else {
                elemento[i].style.animation = ''
            }
        }
    })
}
function denegado(){
    document.querySelector('#content').classList.add('hide')
}

function typed(){
    let typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 1,
        loop: true,
        cursorChar: '',
    })
}