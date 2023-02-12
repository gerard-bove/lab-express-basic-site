const enviarNota = () => {
    let inputs = document.querySelectorAll("input[type=text], input[type=number]");
    


   // if(inputs[0].value != "" && inputs[1].value != "") {

        //versión creando elementos:
        let filaTabla = document.createElement("tr");

        let datoActividad = document.createElement("td");
        datoActividad.innerHTML = document.getElementById("activitat").value;

        let datoNota = document.createElement("td");
        datoNota.innerHTML = document.getElementById("nota").value;

        filaTabla.appendChild(datoActividad);
        filaTabla.appendChild(datoNota);

        document.getElementById("taula-body").appendChild(filaTabla);
   // }
}