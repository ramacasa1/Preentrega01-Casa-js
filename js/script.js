// SIMULADOR DE BOTS EN INSTAGRAM

let savedPw = 'minombreesRamiro'
let userName = prompt("Ingresa tu nombre, por favor.")

function login() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--) {
        let userPw = prompt("Hola, ingresa tu contraseña.");
        if (userPw === savedPw){
            alert("Bienvenido/a " + userName + ".")
            ingresar = true;
            break;
        } else {
        alert ("Contraseña incorrecta. Intente de nuevo.")}
    }

return ingresar;
}

if (login()) {
    let seguidores = 0;
    let option = prompt( "Elegí entre estas opciones. \n1 - Sumar seguidores. \n2 - Restar seguidores \n3 - Ver seguidores. \nPresiona X para finalizar.");
    
    while (option != "X" && option != "x") {
        switch (option) {
            case "1":
                let addFollowers = parseInt(prompt("¿Cuántos seguidores te gustaría agregar?"));
                seguidores += addFollowers;
                alert("Ahora tienes " + seguidores + " seguidores");
            case "2":
                let restFollowers = parseInt(prompt("¿Cuántos seguidores te gustaría restar?"));
            
                if (seguidores >= 0) {
                    seguidores -= restFollowers;
                } else {
                    alert("No puedes restar esa cantidad de seguidores.")
                }
                break;
            case "3":
                alert ("En este momento tienes " + seguidores + " seguidores");
                break;
            default:
                alert("Elegiste una opcion incorrecta.")
        }
    }
}
// alert adios
