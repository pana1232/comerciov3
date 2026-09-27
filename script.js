// ==========================================
// BANCO DE PREGUNTAS
// ==========================================

const preguntas = {

    // ==========================================
    // INFORMÁTICA
    // ==========================================

    informatica: [

        {
            pregunta: "¿Qué componente se considera el cerebro de la computadora?",
            respuestas: ["RAM", "CPU", "SSD", "GPU"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué lenguaje se utiliza principalmente para dar estilo a una página web?",
            respuestas: ["HTML", "CSS", "SQL", "Python"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué memoria pierde sus datos al apagar la computadora?",
            respuestas: ["SSD", "RAM", "ROM", "USB"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuál es un sistema operativo?",
            respuestas: ["Windows", "Chrome", "HTML", "Google"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es un navegador web?",
            respuestas: ["Chrome", "Windows", "Linux", "Excel"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué significa HTML?",
            respuestas: [
                "HyperText Markup Language",
                "High Technology Machine Language",
                "Hyper Tool Machine Language",
                "Home Text Main Language"
            ],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué dispositivo se utiliza normalmente para almacenar archivos?",
            respuestas: ["SSD", "Monitor", "Teclado", "Mouse"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué símbolo se utiliza normalmente para indicar una dirección de correo?",
            respuestas: ["#", "@", "&", "%"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué programa se utiliza para escribir código?",
            respuestas: ["Visual Studio Code", "Calculadora", "Paint", "Galería"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué significa CPU?",
            respuestas: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué extensión utiliza normalmente JavaScript?",
            respuestas: [".html", ".css", ".js", ".java"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Qué extensión se utiliza para CSS?",
            respuestas: [".css", ".html", ".js", ".style"],
            correcta: 0,
            dificil: false
        },

        {
            pregunta: "¿Qué estructura funciona con el principio LIFO?",
            respuestas: ["Cola", "Pila", "Árbol", "Grafo"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué protocolo protege las comunicaciones web mediante cifrado?",
            respuestas: ["FTP", "HTTPS", "SMTP", "DHCP"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué lenguaje se utiliza para consultar bases de datos?",
            respuestas: ["SQL", "CSS", "HTML", "XML"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué identifica de manera única un registro?",
            respuestas: ["Clave primaria", "Clave secundaria", "Campo texto", "Índice visual"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué estructura funciona con el principio FIFO?",
            respuestas: ["Pila", "Cola", "Árbol", "Matriz"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué base utiliza el sistema binario?",
            respuestas: ["Base 2", "Base 8", "Base 10", "Base 16"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué comando SQL consulta información?",
            respuestas: ["SELECT", "DELETE", "DROP", "REMOVE"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué significa API?",
            respuestas: [
                "Application Programming Interface",
                "Advanced Program Internet",
                "Application Personal Interface",
                "Automatic Program Integration"
            ],
            correcta: 0,
            dificil: true
        }
    ],


    // ==========================================
    // CIENCIAS
    // ==========================================

    ciencias: [

        {
            pregunta: "¿Cuál es el planeta más cercano al Sol?",
            respuestas: ["Venus", "Marte", "Mercurio", "Júpiter"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Qué órgano bombea la sangre?",
            respuestas: ["Pulmón", "Corazón", "Hígado", "Riñón"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué gas necesitamos principalmente para respirar?",
            respuestas: ["Oxígeno", "Helio", "Hidrógeno", "Neón"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el satélite natural de la Tierra?",
            respuestas: ["El Sol", "La Luna", "Marte", "Venus"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué fuerza nos mantiene sobre la Tierra?",
            respuestas: ["Electricidad", "Gravedad", "Magnetismo", "Presión"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuántos huesos tiene aproximadamente un adulto?",
            respuestas: ["106", "206", "306", "406"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el estado sólido del agua?",
            respuestas: ["Vapor", "Hielo", "Gas", "Plasma"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué órgano utilizamos principalmente para respirar?",
            respuestas: ["Corazón", "Pulmones", "Riñones", "Estómago"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué planeta es conocido como el planeta rojo?",
            respuestas: ["Venus", "Marte", "Saturno", "Mercurio"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué astro proporciona luz y calor a la Tierra?",
            respuestas: ["La Luna", "El Sol", "Marte", "Júpiter"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué instrumento mide la temperatura?",
            respuestas: ["Barómetro", "Termómetro", "Microscopio", "Voltímetro"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué ciencia estudia los seres vivos?",
            respuestas: ["Física", "Biología", "Geología", "Astronomía"],
            correcta: 1,
            dificil: false
        },

        {
            pregunta: "¿Cuál es la unidad básica de los seres vivos?",
            respuestas: ["Átomo", "Tejido", "Célula", "Órgano"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Qué orgánulo produce gran parte del ATP celular?",
            respuestas: ["Núcleo", "Mitocondria", "Ribosoma", "Vacuola"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál es la fórmula química del agua?",
            respuestas: ["CO2", "O2", "H2O", "NaCl"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Qué proceso utilizan las plantas para producir glucosa?",
            respuestas: ["Respiración", "Fotosíntesis", "Digestión", "Fermentación"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál es el número atómico del carbono?",
            respuestas: ["4", "6", "8", "12"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué partícula tiene carga negativa?",
            respuestas: ["Protón", "Neutrón", "Electrón", "Núcleo"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Cuál es la velocidad aproximada de la luz?",
            respuestas: [
                "30,000 km/s",
                "300,000 km/s",
                "3,000 km/s",
                "3,000,000 km/s"
            ],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué molécula contiene la información genética?",
            respuestas: ["ATP", "ADN", "Glucosa", "Agua"],
            correcta: 1,
            dificil: true
        }
    ],


    // ==========================================
    // MATEMÁTICAS
    // ==========================================

    matematicas: [

        {
            pregunta: "Si 3x = 21, ¿cuánto vale x?",
            respuestas: ["5", "6", "7", "8"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuánto es 15²?",
            respuestas: ["125", "200", "225", "250"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "Resuelve: x + 12 = 30",
            respuestas: ["16", "18", "20", "22"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuál es la raíz cuadrada de 144?",
            respuestas: ["10", "11", "12", "14"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuánto es 3/4 de 80?",
            respuestas: ["40", "50", "60", "70"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el área de un rectángulo de 8 cm × 5 cm?",
            respuestas: ["13 cm²", "26 cm²", "40 cm²", "45 cm²"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "Resuelve: 2x + 5 = 17",
            respuestas: ["5", "6", "7", "8"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuánto es el 20% de 350?",
            respuestas: ["50", "60", "70", "80"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "Simplifica: 3x + 2x",
            respuestas: ["5x", "6x", "5x²", "x"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuánto es (-5) + 12?",
            respuestas: ["5", "6", "7", "8"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el perímetro de un cuadrado de lado 9 cm?",
            respuestas: ["18 cm", "27 cm", "36 cm", "81 cm"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuál es la pendiente de y = 3x + 2?",
            respuestas: ["2", "3", "5", "1"],
            correcta: 1,
            dificil: false
        },

        {
            pregunta: "Resuelve: 3x - 7 = 2x + 8",
            respuestas: ["12", "13", "14", "15"],
            correcta: 3,
            dificil: true
        },
        {
            pregunta: "Resuelve: x² - 9 = 0",
            respuestas: ["x = 3", "x = -3", "x = ±3", "x = 9"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "Factoriza: x² + 5x + 6",
            respuestas: [
                "(x+1)(x+6)",
                "(x+2)(x+3)",
                "(x-2)(x-3)",
                "(x+5)(x+1)"
            ],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "Resuelve: 2(x + 3) = 18",
            respuestas: ["x = 5", "x = 6", "x = 7", "x = 8"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál es la solución de 2x + 4 > 10?",
            respuestas: ["x > 2", "x > 3", "x < 3", "x = 3"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál es el valor de 2³ × 2²?",
            respuestas: ["16", "24", "32", "64"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "Si f(x) = 2x + 3, ¿cuánto vale f(5)?",
            respuestas: ["10", "11", "12", "13"],
            correcta: 3,
            dificil: true
        },
        {
            pregunta: "Resuelve: x² - 5x + 6 = 0",
            respuestas: [
                "x = 1 y 6",
                "x = 2 y 3",
                "x = 3 y 4",
                "x = 2 y 4"
            ],
            correcta: 1,
            dificil: true
        }
    ],


    // ==========================================
    // JUEGOS
    // ==========================================

    juegos: [

        {
            pregunta: "¿Qué personaje es protagonista de Minecraft?",
            respuestas: ["Mario", "Steve", "Sonic", "Link"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿En qué juego aparece Pikachu?",
            respuestas: ["Pokémon", "Minecraft", "FIFA", "Fortnite"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué compañía creó Mario?",
            respuestas: ["Sony", "Microsoft", "Nintendo", "Sega"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Qué personaje azul corre muy rápido?",
            respuestas: ["Sonic", "Mario", "Kirby", "Link"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿En qué juego se construye con bloques?",
            respuestas: ["Minecraft", "FIFA", "Tetris", "Pac-Man"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué personaje pertenece a Nintendo?",
            respuestas: ["Mario", "Kratos", "Master Chief", "Geralt"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es un juego de fútbol?",
            respuestas: ["FIFA", "Tetris", "Pac-Man", "Doom"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué consola pertenece a Sony?",
            respuestas: ["Xbox", "PlayStation", "Switch", "Game Boy"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué juego tiene bloques que caen?",
            respuestas: ["Tetris", "Minecraft", "FIFA", "Halo"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es una consola de Microsoft?",
            respuestas: ["Xbox", "PlayStation", "Switch", "Dreamcast"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué personaje utiliza una gorra roja?",
            respuestas: ["Mario", "Sonic", "Kirby", "Link"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué juego pertenece a Valve?",
            respuestas: ["Half-Life", "Mario", "Zelda", "Halo"],
            correcta: 0,
            dificil: false
        },

        {
            pregunta: "¿Qué empresa desarrolló originalmente Minecraft?",
            respuestas: ["Mojang", "Valve", "Ubisoft", "Sega"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Cuál fue el nombre japonés de la NES?",
            respuestas: ["Famicom", "Dreamcast", "Super Famicom", "Game Boy"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué compañía desarrolló The Legend of Zelda?",
            respuestas: ["Nintendo", "Sony", "EA", "Ubisoft"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué motor gráfico es desarrollado por Epic Games?",
            respuestas: ["Unity", "Unreal Engine", "Godot", "Source"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál de estos juegos fue desarrollado por Valve?",
            respuestas: ["Portal", "Halo", "Zelda", "God of War"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué personaje pertenece a God of War?",
            respuestas: ["Kratos", "Sonic", "Link", "Samus"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué consola fue lanzada por Nintendo en 2006?",
            respuestas: ["Wii", "Switch", "GameCube", "NES"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué empresa creó la saga Halo?",
            respuestas: ["Bungie", "Nintendo", "Sega", "Capcom"],
            correcta: 0,
            dificil: true
        }
    ],


    // ==========================================
    // FÚTBOL
    // ==========================================

    futbol: [

        {
            pregunta: "¿Cuántos jugadores tiene un equipo en el campo?",
            respuestas: ["9", "10", "11", "12"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuánto dura normalmente un partido?",
            respuestas: ["60 minutos", "80 minutos", "90 minutos", "120 minutos"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Qué tarjeta significa expulsión?",
            respuestas: ["Azul", "Roja", "Verde", "Amarilla"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué jugador puede tocar el balón con las manos dentro de su área?",
            respuestas: ["Defensa", "Portero", "Delantero", "Mediocampista"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuántos puntos recibe normalmente un equipo por ganar?",
            respuestas: ["1", "2", "3", "4"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Dónde se juega una final de fútbol?",
            respuestas: ["Estadio", "Piscina", "Pista", "Gimnasio"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué parte del cuerpo no puede usar intencionalmente un jugador de campo?",
            respuestas: ["Pie", "Cabeza", "Mano", "Pecho"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Qué significa marcar un gol?",
            respuestas: [
                "Sacar el balón",
                "Introducir el balón en la portería",
                "Hacer una falta",
                "Dar un pase"
            ],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué se utiliza para delimitar el campo?",
            respuestas: ["Líneas", "Árbitros", "Balones", "Redes"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué posición protege la portería?",
            respuestas: ["Portero", "Delantero", "Extremo", "Mediocampista"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué país ganó el Mundial de 2022?",
            respuestas: ["Brasil", "Argentina", "Francia", "España"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué deporte practica Lionel Messi?",
            respuestas: ["Tenis", "Fútbol", "Béisbol", "Baloncesto"],
            correcta: 1,
            dificil: false
        },

        {
            pregunta: "¿Qué selección ganó el primer Mundial en 1930?",
            respuestas: ["Brasil", "Argentina", "Uruguay", "Italia"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Cuántos Mundiales ganó Brasil hasta 2022?",
            respuestas: ["3", "4", "5", "6"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Qué selección ganó el Mundial de 2014?",
            respuestas: ["Argentina", "Alemania", "Brasil", "España"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Dónde se celebró el Mundial de 2010?",
            respuestas: ["Brasil", "Sudáfrica", "Rusia", "Alemania"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué club juega en el Santiago Bernabéu?",
            respuestas: ["Barcelona", "Real Madrid", "Atlético", "Valencia"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Quién es conocido como 'La Pulga'?",
            respuestas: ["Cristiano Ronaldo", "Messi", "Neymar", "Mbappé"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué selección ganó el Mundial de 2018?",
            respuestas: ["Francia", "Croacia", "Alemania", "Brasil"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué país organizó el Mundial de 2018?",
            respuestas: ["Rusia", "Qatar", "Francia", "Brasil"],
            correcta: 0,
            dificil: true
        }
    ],


    // ==========================================
    // PELÍCULAS
    // ==========================================

    peliculas: [

        {
            pregunta: "¿Quién es el protagonista de Spider-Man?",
            respuestas: ["Peter Parker", "Tony Stark", "Bruce Wayne", "Clark Kent"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿En qué película aparece Darth Vader?",
            respuestas: ["Star Wars", "Avatar", "Titanic", "Matrix"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué personaje es un ogro verde?",
            respuestas: ["Shrek", "Hulk", "Yoda", "Groot"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿En qué película aparece Jack Sparrow?",
            respuestas: ["Piratas del Caribe", "Avatar", "Matrix", "Titanic"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué héroe utiliza un escudo con una estrella?",
            respuestas: ["Thor", "Capitán América", "Iron Man", "Hulk"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué película tiene dinosaurios creados mediante genética?",
            respuestas: ["Jurassic Park", "Avatar", "Titanic", "Frozen"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Quién es el villano de Avengers: Infinity War?",
            respuestas: ["Loki", "Thanos", "Ultron", "Venom"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué película tiene al personaje Elsa?",
            respuestas: ["Frozen", "Moana", "Enredados", "Valiente"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué superhéroe es Bruce Wayne?",
            respuestas: ["Batman", "Superman", "Flash", "Iron Man"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué película trata sobre un barco llamado Titanic?",
            respuestas: ["Titanic", "Avatar", "Gladiador", "Matrix"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué personaje pertenece a Toy Story?",
            respuestas: ["Woody", "Shrek", "Nemo", "Simba"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué personaje es un robot en WALL-E?",
            respuestas: ["WALL-E", "Buzz", "Woody", "Baymax"],
            correcta: 0,
            dificil: false
        },

        {
            pregunta: "¿Qué director dirigió Inception?",
            respuestas: ["Christopher Nolan", "James Cameron", "Steven Spielberg", "Peter Jackson"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué película ganó el Óscar a Mejor Película en 1998?",
            respuestas: ["Titanic", "Gladiador", "Matrix", "Salvar al soldado Ryan"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Quién dirigió Avatar?",
            respuestas: ["James Cameron", "Christopher Nolan", "Tim Burton", "Peter Jackson"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué actor interpreta a Neo en Matrix?",
            respuestas: ["Keanu Reeves", "Tom Cruise", "Brad Pitt", "Johnny Depp"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué actor interpreta a Jack Sparrow?",
            respuestas: ["Johnny Depp", "Leonardo DiCaprio", "Tom Hanks", "Will Smith"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué película fue dirigida por Steven Spielberg?",
            respuestas: ["E.T.", "Matrix", "Avatar", "Inception"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué saga tiene al personaje Frodo?",
            respuestas: ["Harry Potter", "El Señor de los Anillos", "Star Wars", "Narnia"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Qué actor interpreta a Iron Man?",
            respuestas: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
            correcta: 0,
            dificil: true
        }
    ],


    // ==========================================
    // FREE FIRE
    // ==========================================

    freefire: [

        {
            pregunta: "¿Qué tipo de juego es Free Fire?",
            respuestas: ["Battle Royale", "Carreras", "Fútbol", "Puzzle"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué empresa desarrolló originalmente Free Fire?",
            respuestas: ["Garena", "Nintendo", "Valve", "Ubisoft"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el objetivo principal de Battle Royale?",
            respuestas: [
                "Ser el último jugador o equipo",
                "Conseguir más goles",
                "Construir una ciudad",
                "Resolver acertijos"
            ],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué objeto sirve para recuperar vida?",
            respuestas: ["Botiquín", "Granada", "Casco", "Mochila"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué elemento permite transportar más objetos?",
            respuestas: ["Mochila", "Casco", "Pared", "Paracaídas"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué elemento protege la cabeza?",
            respuestas: ["Casco", "Mochila", "Botiquín", "Mapa"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cómo llegan normalmente los jugadores al mapa?",
            respuestas: ["Paracaídas", "Submarino", "Tren", "Barco"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué objeto sirve como protección temporal?",
            respuestas: ["Pared Gloo", "Botiquín", "Mochila", "Mapa"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué se reduce durante una partida?",
            respuestas: ["Zona segura", "Inventario", "Nivel", "Mapa"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué puedes encontrar por el mapa?",
            respuestas: ["Armas y objetos", "Goles", "Cartas", "Monedas reales"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué modo enfrenta a jugadores para sobrevivir?",
            respuestas: ["Battle Royale", "Carrera", "Historia", "Entrenamiento"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué se utiliza para conocer la ubicación?",
            respuestas: ["Mapa", "Mochila", "Casco", "Botiquín"],
            correcta: 0,
            dificil: false
        },

        {
            pregunta: "¿Qué empresa publica Free Fire?",
            respuestas: ["Garena", "Nintendo", "Sony", "Microsoft"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué significa BR?",
            respuestas: ["Battle Royale", "Battle Race", "Big Ranking", "Battle Room"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué característica define a Battle Royale?",
            respuestas: [
                "Supervivencia hasta quedar un jugador o equipo",
                "Completar una película",
                "Resolver matemáticas",
                "Ganar una carrera"
            ],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué elemento obliga a los jugadores a moverse?",
            respuestas: ["Zona segura", "Mochila", "Casco", "Inventario"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué función tiene una mochila?",
            respuestas: [
                "Aumentar la capacidad de objetos",
                "Aumentar la vida",
                "Cambiar el mapa",
                "Dar puntos"
            ],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué permite jugar con amigos por Internet?",
            respuestas: [
                "Multijugador en línea",
                "Modo avión",
                "Modo historia",
                "Sin conexión"
            ],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué tipo de conexión se usa para jugar en línea?",
            respuestas: ["Internet", "HDMI", "USB", "VGA"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Qué característica permite competir contra otros jugadores conectados?",
            respuestas: ["Multijugador", "Bluetooth", "Editor", "Galería"],
            correcta: 0,
            dificil: true
        }
    ],


    // ==========================================
    // CULTURA GENERAL
    // ==========================================

    cultura: [

        {
            pregunta: "¿Cuál es la capital de El Salvador?",
            respuestas: ["San Salvador", "Santa Ana", "San Miguel", "Usulután"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el planeta más grande?",
            respuestas: ["Tierra", "Marte", "Júpiter", "Saturno"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuántos continentes se consideran comúnmente?",
            respuestas: ["5", "6", "7", "8"],
            correcta: 2,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el océano más grande?",
            respuestas: ["Atlántico", "Pacífico", "Índico", "Ártico"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Qué idioma se habla principalmente en Brasil?",
            respuestas: ["Español", "Portugués", "Inglés", "Francés"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Quién escribió Don Quijote?",
            respuestas: [
                "Miguel de Cervantes",
                "Gabriel García Márquez",
                "Pablo Neruda",
                "Mario Vargas Llosa"
            ],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el continente más grande?",
            respuestas: ["Europa", "Asia", "África", "Oceanía"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuántos días tiene un año normal?",
            respuestas: ["360", "365", "366", "370"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el símbolo químico del oro?",
            respuestas: ["Ag", "Au", "Fe", "O"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuál es el animal terrestre más grande?",
            respuestas: ["Elefante africano", "Jirafa", "Hipopótamo", "Rinoceronte"],
            correcta: 0,
            dificil: false
        },
        {
            pregunta: "¿Qué país tiene forma aproximada de bota?",
            respuestas: ["España", "Italia", "Francia", "Grecia"],
            correcta: 1,
            dificil: false
        },
        {
            pregunta: "¿Cuál es la moneda de Estados Unidos?",
            respuestas: ["Euro", "Dólar", "Peso", "Libra"],
            correcta: 1,
            dificil: false
        },

        {
            pregunta: "¿Cuál es la capital de Australia?",
            respuestas: ["Sídney", "Melbourne", "Canberra", "Perth"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Cuál es el país más grande del mundo por territorio?",
            respuestas: ["Canadá", "China", "Rusia", "Estados Unidos"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Quién pintó la Mona Lisa?",
            respuestas: [
                "Leonardo da Vinci",
                "Pablo Picasso",
                "Vincent van Gogh",
                "Miguel Ángel"
            ],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿En qué año llegó el ser humano a la Luna?",
            respuestas: ["1965", "1969", "1972", "1975"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál es el río más largo de Sudamérica?",
            respuestas: ["Amazonas", "Nilo", "Mississippi", "Yangtsé"],
            correcta: 0,
            dificil: true
        },
        {
            pregunta: "¿Cuál es el elemento con símbolo Fe?",
            respuestas: ["Flúor", "Hierro", "Francio", "Fósforo"],
            correcta: 1,
            dificil: true
        },
        {
            pregunta: "¿Cuál es la capital de Japón?",
            respuestas: ["Kioto", "Osaka", "Tokio", "Hiroshima"],
            correcta: 2,
            dificil: true
        },
        {
            pregunta: "¿Cuál tiene más hablantes nativos aproximadamente?",
            respuestas: ["Español", "Inglés", "Chino mandarín", "Francés"],
            correcta: 2,
            dificil: true
        }
    ]
};


// ==========================================
// NOMBRES DE LOS TEMAS
// ==========================================

const nombresTemas = {

    informatica: "💻 Informática",

    ciencias: "🔬 Ciencias",

    matematicas: "🧮 Matemáticas",

    juegos: "🎮 Juegos",

    futbol: "⚽ Fútbol",

    peliculas: "🎬 Películas",

    freefire: "🔥 Free Fire",

    cultura: "🌎 Cultura General"
};


// ==========================================
// VARIABLES
// ==========================================

let jugador = "";

let temaActual = "";

let listaPreguntas = [];

let preguntaActual = 0;

let puntos = 0;

let tiempo = 15;

let intervalo;


// ==========================================
// ELEGIR TEMA
// ==========================================

function elegirTema(tema) {

    jugador =
        document.getElementById("nombre")
        .value
        .trim();

    if (jugador === "") {

        alert("Primero escribe tu nombre.");

        return;
    }

    temaActual = tema;

    // Preguntas normales
    let normales =
        preguntas[tema].filter(
            p => p.dificil === false
        );

    // Preguntas difíciles
    let dificiles =
        preguntas[tema].filter(
            p => p.dificil === true
        );

    // Mezclar normales
    normales.sort(
        () => Math.random() - 0.5
    );

    // Mezclar difíciles
    dificiles.sort(
        () => Math.random() - 0.5
    );

    // 6 normales
    normales =
        normales.slice(0, 6);

    // 4 difíciles
    dificiles =
        dificiles.slice(0, 4);

    // Juntar las 10
    listaPreguntas = [
        ...normales,
        ...dificiles
    ];

    // Mezclar las 10
    listaPreguntas.sort(
        () => Math.random() - 0.5
    );

    preguntaActual = 0;

    puntos = 0;

    document
        .getElementById("inicio")
        .classList.add("oculto");

    document
        .getElementById("ranking")
        .classList.add("oculto");

    document
        .getElementById("resultado")
        .classList.add("oculto");

    document
        .getElementById("juego")
        .classList.remove("oculto");

    document
        .getElementById("jugador")
        .textContent = jugador;

    document
        .getElementById("puntos")
        .textContent = puntos;

    mostrarPregunta();
}


// ==========================================
// MOSTRAR PREGUNTA
// ==========================================

function mostrarPregunta() {

    clearInterval(intervalo);

    if (preguntaActual >= 10) {

        terminarJuego();

        return;
    }

    const p =
        listaPreguntas[preguntaActual];

    document
        .getElementById("numeroPregunta")
        .textContent =
        `Pregunta ${preguntaActual + 1} de 10`;

    if (p.dificil) {

        document
            .getElementById("pregunta")
            .textContent =
            "🔥 DIFÍCIL: " + p.pregunta;

    } else {

        document
            .getElementById("pregunta")
            .textContent =
            p.pregunta;
    }

    const contenedor =
        document.getElementById("respuestas");

    contenedor.innerHTML = "";

    p.respuestas.forEach(
        (respuesta, indice) => {

            const boton =
                document.createElement("button");

            boton.textContent =
                respuesta;

            boton.onclick =
                function () {

                    responder(
                        indice,
                        boton
                    );
                };

            contenedor.appendChild(
                boton
            );
        }
    );

    iniciarTemporizador();
}


// ==========================================
// TEMPORIZADOR
// ==========================================

function iniciarTemporizador() {

    tiempo = 15;

    document
        .getElementById("contador")
        .textContent = tiempo;

    document
        .getElementById("barraTiempo")
        .style.width = "100%";

    intervalo =
        setInterval(() => {

            tiempo--;

            document
                .getElementById("contador")
                .textContent = tiempo;

            const porcentaje =
                (tiempo / 15) * 100;

            document
                .getElementById("barraTiempo")
                .style.width =
                porcentaje + "%";

            if (tiempo <= 0) {

                clearInterval(intervalo);

                const botones =
                    document.querySelectorAll(
                        "#respuestas button"
                    );

                botones.forEach(
                    boton => {
                        boton.disabled = true;
                    }
                );

                setTimeout(() => {

                    preguntaActual++;

                    mostrarPregunta();

                }, 1000);
            }

        }, 1000);
}


// ==========================================
// RESPONDER
// ==========================================

function responder(
    indice,
    botonPresionado
) {

    clearInterval(intervalo);

    const p =
        listaPreguntas[preguntaActual];

    const botones =
        document.querySelectorAll(
            "#respuestas button"
        );

    botones.forEach(
        boton => {
            boton.disabled = true;
        }
    );

    if (indice === p.correcta) {

        botonPresionado
            .classList
            .add("correcta");

        let puntosGanados =
            100 + (tiempo * 10);

        // Bono por pregunta difícil
        if (p.dificil) {

            puntosGanados += 50;
        }

        puntos += puntosGanados;

        document
            .getElementById("puntos")
            .textContent = puntos;

        reproducir(
            "sonidoCorrecto"
        );

    } else {

        botonPresionado
            .classList
            .add("incorrecta");

        botones[p.correcta]
            .classList
            .add("correcta");

        reproducir(
            "sonidoIncorrecto"
        );
    }

    setTimeout(() => {

        preguntaActual++;

        mostrarPregunta();

    }, 1200);
}


// ==========================================
// SONIDOS
// ==========================================

function reproducir(id) {

    const sonido =
        document.getElementById(id);

    if (!sonido) return;

    sonido.currentTime = 0;

    sonido.play().catch(
        () => {}
    );
}


// ==========================================
// TERMINAR JUEGO
// ==========================================

function terminarJuego() {

    clearInterval(intervalo);

    document
        .getElementById("juego")
        .classList
        .add("oculto");

    document
        .getElementById("resultado")
        .classList
        .remove("oculto");

    document
        .getElementById("nombreFinal")
        .textContent = jugador;

    document
        .getElementById("temaFinal")
        .textContent =
        nombresTemas[temaActual];

    document
        .getElementById("puntosFinales")
        .textContent = puntos;

    guardarRanking();

    mostrarTablaFinal();

    reproducir(
        "sonidoFinal"
    );
}


// ==========================================
// GUARDAR RANKING
// ==========================================

function guardarRanking() {

    let ranking =
        JSON.parse(
            localStorage.getItem(
                "rankingQuiz"
            )
        ) || [];

    ranking.push({

        nombre: jugador,

        puntos: puntos
    });

    ranking.sort(
        (a, b) =>
            b.puntos - a.puntos
    );

    ranking =
        ranking.slice(0, 10);

    localStorage.setItem(
        "rankingQuiz",
        JSON.stringify(ranking)
    );
}


// ==========================================
// TABLA FINAL
// ==========================================

function mostrarTablaFinal() {

    let ranking =
        JSON.parse(
            localStorage.getItem(
                "rankingQuiz"
            )
        ) || [];

    const tabla =
        document.getElementById(
            "tablaFinal"
        );

    tabla.innerHTML = "";

    ranking.forEach(
        (jugadorRanking, indice) => {

            const fila =
                document.createElement("tr");

            fila.innerHTML = `

                <td>
                    ${indice + 1}
                </td>

                <td>
                    ${jugadorRanking.nombre}
                </td>

                <td>
                    ${jugadorRanking.puntos}
                </td>

            `;

            tabla.appendChild(fila);
        }
    );

    const posicion =
        ranking.findIndex(
            jugadorRanking =>
                jugadorRanking.nombre === jugador &&
                jugadorRanking.puntos === puntos
        );

    if (posicion !== -1) {

        document
            .getElementById(
                "posicionFinal"
            )
            .textContent =
            posicion + 1;

    } else {

        document
            .getElementById(
                "posicionFinal"
            )
            .textContent = "-";
    }
}


// ==========================================
// MOSTRAR RANKING
// ==========================================

function mostrarRanking() {

    document
        .getElementById("inicio")
        .classList
        .add("oculto");

    document
        .getElementById("juego")
        .classList
        .add("oculto");

    document
        .getElementById("resultado")
        .classList
        .add("oculto");

    document
        .getElementById("ranking")
        .classList
        .remove("oculto");

    let ranking =
        JSON.parse(
            localStorage.getItem(
                "rankingQuiz"
            )
        ) || [];

    const tabla =
        document.getElementById(
            "tablaRanking"
        );

    tabla.innerHTML = "";

    if (ranking.length === 0) {

        tabla.innerHTML = `

            <tr>

                <td colspan="3">

                    Todavía no hay jugadores.

                </td>

            </tr>

        `;

        return;
    }

    ranking.forEach(
        (jugadorRanking, indice) => {

            const fila =
                document.createElement("tr");

            fila.innerHTML = `

                <td>
                    ${indice + 1}
                </td>

                <td>
                    ${jugadorRanking.nombre}
                </td>

                <td>
                    ${jugadorRanking.puntos}
                </td>

            `;

            tabla.appendChild(fila);
        }
    );
}


// ==========================================
// JUGAR OTRA VEZ
// ==========================================

function jugarOtraVez() {

    document
        .getElementById("resultado")
        .classList
        .add("oculto");

    document
        .getElementById("inicio")
        .classList
        .remove("oculto");

    document
        .getElementById("nombre")
        .value = jugador;
}


// ==========================================
// VOLVER AL INICIO
// ==========================================

function volverInicio() {

    clearInterval(intervalo);

    document
        .getElementById("juego")
        .classList
        .add("oculto");

    document
        .getElementById("resultado")
        .classList
        .add("oculto");

    document
        .getElementById("ranking")
        .classList
        .add("oculto");

    document
        .getElementById("inicio")
        .classList
        .remove("oculto");

    document
        .getElementById("nombre")
        .value = "";
}


// ==========================================
// BORRAR RANKING
// ==========================================

function borrarRanking() {

    const confirmar =
        confirm(
            "¿Seguro que quieres borrar todo el ranking?"
        );

    if (confirmar) {

        localStorage.removeItem(
            "rankingQuiz"
        );

        mostrarRanking();
    }
}