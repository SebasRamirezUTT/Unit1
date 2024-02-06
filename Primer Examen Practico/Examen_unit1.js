//Ramirez Ornelas Eric Sebastian 10A
//Url donde se encuentra el JSON
var url = "http://jsonplaceholder.typicode.com/todos";

function listarTodosLosPendientes() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes (solo IDs):");
            response.forEach(element => {
                console.log("ID: " + element.id);
            });
        });
}

function listarPendientesConTitulo() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes (IDs y Titles):");
            response.forEach(element => {
                console.log("ID: " + element.id + ", Title: " + element.title);
            });
        });
}

function listarPendientesSinResolver() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes sin resolver (ID y Title):");
            response.forEach(element => {
                if (!element.completed) {
                    console.log("ID: " + element.id + ", Title: " + element.title);
                }
            });
        });
}

function listarPendientesResueltos() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes resueltos (ID y Title):");
            response.forEach(element => {
                if (element.completed) {
                    console.log("ID: " + element.id + ", Title: " + element.title);
                }
            });
        });
}

function listarPendientesConUserId() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes (IDs y userID):");
            response.forEach(element => {
                console.log("ID: " + element.id + ", UserID: " + element.userId);
            });
        });
}

function listarPendientesResueltosConUserId() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes resueltos (ID y userID):");
            response.forEach(element => {
                if (element.completed) {
                    console.log("ID: " + element.id + ", UserID: " + element.userId);
                }
            });
        });
}

function listarPendientesSinResolverConUserId() {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log("\nLista de todos los pendientes sin resolver (ID y userID):");
            response.forEach(element => {
                if (!element.completed) {
                    console.log("ID: " + element.id + ", UserID: " + element.userId);
                }
            });
        });
}

// Menú para manejo de la aplicación
function mostrarMenu() {
    console.log("\nSeleccione una opción:");
    console.log("1. Lista de todos los pendientes (solo IDs)");
    console.log("2. Lista de todos los pendientes (IDs y Titles)");
    console.log("3. Lista de todos los pendientes sin resolver (ID y Title)");
    console.log("4. Lista de todos los pendientes resueltos (ID y Title)");
    console.log("5. Lista de todos los pendientes (IDs y userID)");
    console.log("6. Lista de todos los pendientes resueltos (ID y userID)");
    console.log("7. Lista de todos los pendientes sin resolver (ID y userID)");
    console.log("0. Salir");
}

//Seleccion de opciones
function ejecutarOpcion(opcion) {
    switch (opcion) {
        case "1":
            listarTodosLosPendientes();
            break;
        case "2":
            listarPendientesConTitulo();
            break;
        case "3":
            listarPendientesSinResolver();
            break;
        case "4":
            listarPendientesResueltos();
            break;
        case "5":
            listarPendientesConUserId();
            break;
        case "6":
            listarPendientesResueltosConUserId();
            break;
        case "7":
            listarPendientesSinResolverConUserId();
            break;
        case "0":
            console.log("Saliendo...");
            return;
        default:
            console.log("Opción inválida");
            break;
    }
}

// Ejecución del programa
function main() {
    mostrarMenu();
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opcion) => {
        ejecutarOpcion(opcion);
        readline.close();
    });
}

main();
