// 1. Guardamos nuestros datos (palabras y definiciones)
const glosario = [
    {
        palabra: "Auditoría Informática",
        definicion: "Disciplina clave en la gobernanza de TI, orientada a evaluar la integridad, disponibilidad, confidencialidad y eficiencia de los sistemas de información y su entorno tecnológico."
    },
    {
        palabra: "Auditoría de Seguridad",
        definicion: "Es un subconjunto de la auditoría informática, enfocado exclusivamente en los activos relacionados con la protección de la información contra amenazas y vulnerabilidades."
    },
    {
        palabra: "Análisis de Riesgos",
        definicion: "Proceso sistemático para identificar, analizar y evaluar los riesgos y las debilidades de seguridad de la infraestructura tecnológica de una organización."
    },
    {
        palabra: "Auditoría Interna",
        definicion: "Realizada por personal de la propia organización con el propósito de evaluar el cumplimiento de políticas, procedimientos y controles internos. Su enfoque es la mejora continua."
    },
    {
        palabra: "Auditoría Externa",
        definicion: "Llevada a cabo por entidades independientes para proporcionar una evaluación imparcial del estado de la seguridad. Busca la validación y el cumplimiento regulatorio."
    },
    {
        palabra: "SIEM",
        definicion: "(Security Information and Event Management) Herramienta de software que centraliza el almacenamiento y la interpretación de datos de eventos de seguridad para monitorear y analizar amenazas en tiempo real."
    },
    {
        palabra: "Abismo de Ejecución",
        definicion: "Hace referencia a la brecha que existe entre los hallazgos y recomendaciones de una auditoría y su implementación efectiva en la organización, lo que socava el valor de la auditoría."
    }
];

// 2. Obtenemos los elementos del HTML con los que vamos a trabajar
const listaPalabrasContainer = document.getElementById('lista-palabras');
const definicionContainer = document.getElementById('definicion-container');

// 3. Creamos la lista de palabras dinámicamente
glosario.forEach(item => {
    // Por cada elemento en nuestro glosario, creamos un div
    const palabraDiv = document.createElement('div');
    palabraDiv.className = 'palabra'; // Le asignamos su clase de CSS
    palabraDiv.textContent = item.palabra; // Le ponemos el texto
    
    // Le añadimos un 'escuchador de clics'
    palabraDiv.addEventListener('click', () => {
        // Primero, quitamos el estilo 'active' de cualquier otra palabra
        document.querySelectorAll('.palabra').forEach(p => p.classList.remove('active'));
        // Luego, se lo añadimos a la palabra que acabamos de clicar
        palabraDiv.classList.add('active');

        // Mostramos la definición correspondiente
        definicionContainer.innerHTML = `
            <h3>${item.palabra}</h3>
            <p>${item.definicion}</p>
        `;
    });

    // Finalmente, añadimos el div de la palabra al contenedor de la lista
    listaPalabrasContainer.appendChild(palabraDiv);
});