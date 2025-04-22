const canciones = [
    {
        id: 'espresso',
    },
    {
        id: 'nonsense',
    },
    {
        id: 'busy-woman',
    },
    {
        id: 'feather',
    },
    {
        id: 'juno',
    },
    {
        id: 'taste',
    },
    {
        id:'Bed-Chem',
    },
    {
        id:'15-Minutes',
    },
    {
        id:'cloudt',
    },
    {
        id:'Please',
    }
    
];

canciones.forEach(cancion => {
    const audio = document.getElementById(`cancion-${cancion.id}`);
    const progreso = document.getElementById(`progreso-${cancion.id}`);
    const boton = document.getElementById(`boton-${cancion.id}`);
    const icono = document.getElementById(`iconoControl-${cancion.id}`);

    audio.addEventListener('timeupdate', function () {
        progreso.max = audio.duration;
        progreso.value = audio.currentTime;
        
    });

    progreso.addEventListener('input', function () {
        audio.currentTime = progreso.value;
    });

    boton.addEventListener('click', function () {
        if (audio.paused) {
            canciones.forEach( function (c) {
                if (c.id !== cancion.id) {
                    const otroAudio = document.getElementById(`cancion-${c.id}`);
                  //  otroAudio.currentTime = 0; // reiniciar (opcional)
                    otroAudio.pause();
                    const otroIcono = document.getElementById(`iconoControl-${c.id}`);
                    otroIcono.classList.remove('bi-pause-fill');
                    otroIcono.classList.add('bi-play-fill');
                }
            });
            
            audio.play();
            icono.classList.remove('bi-play-fill');
            icono.classList.add('bi-pause-fill');
        } else {
            audio.pause();
            icono.classList.remove('bi-pause-fill');
            icono.classList.add('bi-play-fill');
        }
    });
});