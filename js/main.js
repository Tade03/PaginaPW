if(document.location.href.includes("contacto.html")){
    // Codigo para verificacion del formulario

    const inputs = $('input');
    let modal = document.getElementById("modal");
    var next = false;
    inputs.splice(3,1);
    $('#enviar').on('click', ()=>{
        verificarDatos();
    })
    inputs[3] = $('textarea')[0];

    /*
    * Funcion que verifica que los campos del formulario esten completos
    * y en caso de que no lo esten, muestra un mensaje de error
    * Esta funcion NO checa que el text area este completo, ya que no se puede verificar
    */
    function verificarDatos(){
        console.log("Se clickeo")
        inputs.each((index, element)=>{ 
            if(element.value == ""){
                element.style.borderColor = "red";
                element.placeholder = "Este campo es obligatorio";
                element.style.color = "red";
                next = false;
            }else{
                element.style.borderColor = "green";
                next = true;
            }
            element.addEventListener('focus', ()=>{
                element.style.borderColor = "black";
                element.style.color = "black";
            })
        })
        if(next){
            modal.showModal();
        }
        $("#cerrar").on('click', ()=>{
            window.open("index.html", "_self");
        })
    }
}