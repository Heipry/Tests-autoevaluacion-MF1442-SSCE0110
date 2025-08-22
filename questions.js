// Archivo questions.js - Contiene los datos de todos los tests.

// Objeto que almacena los arrays de preguntas para cada test.
export const testData = {
  "MF1442-Test1": [
    // Preguntas para el Test 1 de MF1442.
    {
      question: "Pregunta de ejemplo 1 del Test 1 de MF1442:",
      options: ["Opción A", "Opción B (Correcta)", "Opción C", "Opción D"],
      correctAnswer: "Opción B (Correcta)",
      justification: "Esta es la justificación de la pregunta 1 del Test 1.",
    },
    {
      question: "Pregunta de ejemplo 2 del Test 1 de MF1442:",
      options: ["Opción A (Correcta)", "Opción B", "Opción C", "Opción D"],
      correctAnswer: "Opción A (Correcta)",
      justification: "Esta es la justificación de la pregunta 2 del Test 1.",
    },
  ],
  "MF1442-Test2": [
    // Preguntas para el Test 2 de MF1442.
    {
      question: "Pregunta de ejemplo 1 del Test 2 de MF1442:",
      options: ["Opción A", "Opción B", "Opción C (Correcta)", "Opción D"],
      correctAnswer: "Opción C (Correcta)",
      justification: "Esta es la justificación de la pregunta 1 del Test 2.",
    },
    {
      question: "Pregunta de ejemplo 2 del Test 2 de MF1442:",
      options: ["Opción A", "Opción B", "Opción C", "Opción D (Correcta)"],
      correctAnswer: "Opción D (Correcta)",
      justification: "Esta es la justificación de la pregunta 2 del Test 2.",
    },
  ],
  "MF1443-EvaluacionFinal": [
    // Preguntas para la Evaluación Final de MF1443.
    {
      question:
        "El Sistema Nacional de las Cualificaciones Profesionales está formado por:",
      options: [
        "a) Los PCPI + La formación profesional de grado medio y superior.",
        "b) Catálogo Nacional de Cualificaciones + Procedimiento de Acreditación de Competencias.",
        "c) Los cursos que se dan a nivel nacional en formación profesional para el empleo.",
        "d) Las acciones formativas subvencionadas por el empleo.",
      ],
      correctAnswer:
        "b) Catálogo Nacional de Cualificaciones + Procedimiento de Acreditación de Competencias.",
      justification:
        "El Sistema Nacional de Cualificaciones y Formación Profesional (SNCFP) es un conjunto de instrumentos y acciones necesarios para promover y desarrollar la integración de las ofertas de la Formación Profesional, mediante el Catálogo Nacional de Cualificaciones Profesionales (CNCP).",
    },
    {
      question: "¿Qué es la cualificación profesional?:",
      options: [
        "a) La promoción del desarrollo económico con atención a las distintas necesidades que, en cada región, presenta el sistema productivo.",
        "b) La adecuación de la formación y las cualificaciones a los criterios de la Unión Europea.",
        "c) La satisfacción de las necesidades del sistema productivo y del empleo a lo largo de toda la vida.",
        "d) El conjunto de competencias profesionales con significación en el empleo que pueden ser adquiridas mediante formación, así como a través de la experiencia laboral.",
      ],
      correctAnswer:
        "d) El conjunto de competencias profesionales con significación en el empleo que pueden ser adquiridas mediante formación, así como a través de la experiencia laboral.",
      justification:
        "Cada uno de los certificados de profesionalidad va dirigido a conseguir la cualificación necesaria para desempeñar la ocupación a la que se refiere.",
    },
    {
      question:
        "¿Cuál es la primera etapa en el trabajo para determinar y elaborar el Catálogo Nacional de Cualificaciones Profesionales?:",
      options: [
        "a) Contraste externo de la competencia de la cualificación y la formación asociada.",
        "b) Preparación de datos y formación del grupo de trabajo.",
        "c) Actualización.",
        "d) Diseño de la cualificación.",
      ],
      correctAnswer:
        "b) Preparación de datos y formación del grupo de trabajo.",
      justification:
        "En esta primera etapa del proceso metodológico se prepara la información básica para cada campo de observación. Esto permite la puesta en marcha del proceso de identificación de competencias profesionales por parte del grupo de trabajo a partir de los estudios y datos aportados por el INCUAL. Además, se identifican los perfiles necesarios de los expertos/as que deben constituir los grupos de trabajo, de tal manera que cubran las áreas de competencia del campo, los procesos productivos, las tecnologías inherentes, así como los procesos formativos. Estos perfiles se envían a las instituciones representadas en el Consejo General de Formación Profesional para que formulen propuestas, de entre las que se seleccionan las más idóneas. También se identifican las administraciones competentes y las organizaciones de naturaleza empresarial, sindical o profesional que participarán en la etapa de contraste.",
    },
    {
      question:
        "Describen el comportamiento esperado que el profesional o la profesional debe ser capaz de realizar en situaciones de trabajo:",
      options: [
        "a) Realizaciones Profesionales.",
        "b) Criterios de Realización.",
        "c) Capacidades.",
        "d) Criterios de evaluación.",
      ],
      correctAnswer: "a) Realizaciones Profesionales.",
      justification:
        "Las Realizaciones Profesionales (RP) describen el comportamiento esperado que el profesional o la profesional debe ser capaz de realizar en situaciones de trabajo. En el apartado “Perfil Profesional” se describen las Unidades de Competencia en base a Realizaciones Profesionales.",
    },
    {
      question:
        "¿Qué tipo de personas pueden acceder a las acciones formativas planteadas en el subsistema de formación profesional para el empleo?:",
      options: [
        "a) Alumnado mayor de 15 años, y preferentemente menor de 21, que no haya obtenido el título de Graduado en ESO (o se prevé que no lo obtendrá pese a las medidas ordinarias).",
        "b) Trabajadores/as fijos discontinuos en los períodos de no ocupación.",
        "c) Personas trabajadoras, ocupadas y desempleadas aunque no coticen por formación profesional.",
        "d) Trabajadores/as acogidos a regulación de empleo en sus períodos de suspensión de empleo por expediente autorizado.",
      ],
      correctAnswer:
        "c) Personas trabajadoras, ocupadas y desempleadas aunque no coticen por formación profesional.",
      justification:
        "Esta formación se dirige a estos destinatarios porque: Favorece la formación a lo largo de la vida de los trabajadores, mejorando su capacitación profesional y desarrollo personal. Proporciona los conocimientos y las prácticas adecuadas a las competencias profesionales requeridas en el mercado laboral y a las necesidades de las empresas. Mejora la empleabilidad, especialmente a los que tienen mayores dificultades de mantenimiento del empleo o de inserción laboral.",
    },
    {
      question:
        "En el proceso de planificación de la formación se pueden distinguir diferentes niveles funcionales que representan una secuencia jerarquizada de decisiones formativas. ¿En qué nivel se desarrolla el diseño de la formación?:",
      options: [
        "a) Nivel técnico.",
        "b) Nivel estratégico.",
        "c) Nivel de gestión.",
        "d) Nivel formativo.",
      ],
      correctAnswer: "a) Nivel técnico.",
      justification:
        "En el nivel técnico se diseña la acción formativa ya que es necesario que las personas que participan en el diseño tengan conocimientos técnicos referidos a la acción formativa concreta y conocimientos a nivel pedagógico.",
    },
    {
      question: "¿Qué es un plan de formación?:",
      options: [
        "a) El proceso en el que se establecen las directrices generales de la política de formación y se determinan las orientaciones básicas que guiarán el desarrollo de los programas de formación.",
        "b) El proceso en el que se toman decisiones relacionadas con los contenidos generales sobre los que ha de ocuparse la formación y donde se decide si la formación tendrá un carácter teórico (cursos, seminarios...) o, eminentemente, práctico (centrado en el puesto de trabajo).",
        "c) Un proceso en el cual se establecerán las características generales y número de personas que serán potencialmente receptoras de la formación.",
        "d) Un conjunto coherente y ordenado de acciones formativas, concretado en un periodo de tiempo determinado y encaminado a conseguir los objetivos estratégicos determinados.",
      ],
      correctAnswer:
        "d) Un conjunto coherente y ordenado de acciones formativas, concretado en un periodo de tiempo determinado y encaminado a conseguir los objetivos estratégicos determinados.",
      justification:
        "No existe un único proceso para elaborar el plan de formación y la metodología es flexible. La aplicación y el nivel de concreción será diferente en organizaciones con planes de formación estructurados que en aquellas que sólo realizan acciones formativas puntuales.",
    },
    {
      question:
        "¿Cuál de las siguientes es una característica de la formación por competencias?:",
      options: [
        "a) La programación en su conjunto y en cada una de sus partes debe quedar perfectamente clara al profesor/a del curso.",
        "b) Está cerrada cualquier modificación en los contenidos o en las actividades para no perder eficacia.",
        "c) No debe existir un equilibrio entre las diferentes partes (objetivos, contenidos, actividades,...) y la realidad de los participantes no tiene una importancia probada.",
        "d) Se basa en la actuación ante problemas y casos que pueden surgir en el entorno de trabajo a través de pruebas escritas, estudios de casos, juegos de rol, etc.",
      ],
      correctAnswer:
        "d) Se basa en la actuación ante problemas y casos que pueden surgir en el entorno de trabajo a través de pruebas escritas, estudios de casos, juegos de rol, etc.",
      justification:
        "La competencia se define como un conjunto de conocimientos y capacidades que permiten el ejercicio de la actividad profesional conforme a las exigencias de la producción y del empleo por lo que la formación por competencias aparece como una necesidad de encontrar un punto de convergencia entre la formación y el empleo.",
    },
    {
      question:
        "El número máximo de unidades formativas en que se podrá subdividir cada módulo no será superior a:",
      options: ["a) Dos.", "b) Tres.", "c) Cuatro.", "d) Cinco."],
      correctAnswer: "b) Tres.",
      justification:
        "La Unidad Formativa es un bloque coherente de formación perteneciente a un módulo formativo, que responde a un conjunto de competencias de la unidad de competencia a la que se asocia dicho módulo. El número máximo de unidades formativas en que se podrá subdividir cada módulo no será superior a tres.",
    },
    {
      question: "¿Qué errores solemos cometer al elaborar el cronograma?:",
      options: [
        "a) Diseñarlo como algo cerrado.",
        "b) Olvidar el colectivo al que se dirige el programa.",
        "c) Separar teoría y práctica.",
        "d) Todas son correctas.",
      ],
      correctAnswer: "d) Todas son correctas.",
      justification:
        "Algunos errores que solemos cometer al elaborar el cronograma completo y la programación del curso son: Diseñarlo como algo cerrado a toda innovación. Diseñar las actividades sin bases en que apoyarse. Olvidar el colectivo al que se dirige el programa. Separar teoría y práctica. En ocasiones, se potencian aspectos negativos del grupo. Hay que impulsar lo positivo. No se cuenta suficientemente con las personas participantes. Hay que buscar la implicación personal y grupal.",
    },
  ],
};
