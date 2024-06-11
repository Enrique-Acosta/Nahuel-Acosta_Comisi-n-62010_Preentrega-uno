// Hacer un test para saber que linea te conviene mainaer en LOL, solo 5 preguntas.

const nombreInvocador= prompt("Bienvenido, ingresa tu nombre de invocador.")

if(confirm("Hola "+nombreInvocador+ ". Este es un test para saber cual rol encaja con tu personalidad. "+"¿Deseas empezar?")){
    alert("¡Comencemos!")
}else{
    alert("Hasta luego")
}

function calcularRespuestas(){
    let conteoCategoriasRespuestas=[0,0,0,0,0];//top,jungla,mid,adc,supp
    let algunaRespuestaSeleccionada = false;
    for (let pregunta = 1; pregunta <=5; pregunta++) {
        const respuesta = document.getElementsByName("q"+pregunta);
        for(let i=0; i<respuesta.length; i++){
            if(respuesta[i].checked){
                algunaRespuestaSeleccionada = true;
                switch(respuesta[i].value){
                    case "top":
                        conteoCategoriasRespuestas[0]++;
                        break;
                    case "jungla":
                        conteoCategoriasRespuestas[1]++;
                        break;
                    case "mid":
                        conteoCategoriasRespuestas[2]++;
                        break;
                    case "adc":
                        conteoCategoriasRespuestas[3]++;
                        break;
                    case "supp":
                        conteoCategoriasRespuestas[4]++;
                        break;
                }
            }
        }
    }
    
    if(!algunaRespuestaSeleccionada) { 
        alert("Por favor, selecciona al menos una respuesta antes de enviar.");
        return; 
    }
    
    let maxRespuestas = Math.max(...conteoCategoriasRespuestas);
    let indiceCategoria = conteoCategoriasRespuestas.indexOf(maxRespuestas);
        switch(indiceCategoria){
            case 0:
                alert(nombreInvocador+" tu linea es top");
                break;
            case 1:
                alert(nombreInvocador+" tu linea es jungla");
                break;
            case 2:
                alert(nombreInvocador+" tu linea es mid");
                break;
            case 3:
                alert(nombreInvocador+" tu linea es adc");
                break;
            case 4:
                alert(nombreInvocador+" tu linea es soporte");
                break;
            default:
                alert("Contesta todas la preguntas por favor")
        } 
      
}



