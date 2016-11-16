function validateForm(){
	/* Escribe tú código aquí */

	var nombre = $('#name').val();
	var apellido = $('#lastname').val();
	var correo = $('#input-email').val();
	var contrasena = $('#input-password').val();
	var indice = document.getElementsByTagName('select')[0].selectedIndex;

	//Todos los campos son obligatorios, excepto los dos últimos.
	function camposRellenadosNombre(){
		if(nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
			var containerAlertaNombre = document.getElementsByClassName("name-container")[0];
			$( ".name-container" ).append("<span id='idNombre'>Debe ingresar su nombre.</span>");
			return false;
		} else{
			$('#idNombre').hide();
			return true;
		}
	}camposRellenadosNombre();

	function camposRellenadosApellido(){
		if(apellido==null || apellido.length==0 || /^\s+$/.test(apellido)){
			var containerAlertaApellido = document.getElementsByClassName("lastname-container")[0];
			$( ".lastname-container").append("<span id='idApellido'>Debe ingresar su apellido.</span>");
			return false;
		} else{
			$('#idApellido').hide();
			return true;
		}
	}camposRellenadosApellido();
		
	function correoValido(){
		if(!(/\S+@\S+\.\S+/.test(correo))){ 
			var containerAlertaCorreo = document.getElementsByClassName("email-container")[0];
			$( ".email-container").append("<span id='idCorreo'>Verifique que su email tenga un formato válido.</span>");
			return false;
		} else{
			$('#idCorreo').hide();
			return true;
		}
	}correoValido();

	function camposRellenadosBici(){
		if(indice == null || indice == 0) {
			var containerAlertaBici = document.getElementsByClassName("input-box")[4];
			$( ".input-box:eq(4)").append("<span id='idBici'>Debe seleccionar al menos un tipo de bici.</span>");
	  		return false;
		} else{
			$('#idBici').hide();
			return true;
		}
	}camposRellenadosBici();

 	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
 	function validaSoloTextoNombre(nombre){
  		var patronNombre = /^[a-zA-Z]*$/;
  		if(!nombre.search(patronNombre)){
  			return true;
  		} else{
  			alert("Solo se permitir caracteres de la a-z");
  		    return false;
  		}
	}validaSoloTextoNombre(nombre);

	function validaSoloTextoApellido(apellido){
  		var patronApellido = /^[a-zA-Z]*$/;
  		if(!apellido.search(patronApellido)){
  			return true;
  		} else{
  			alert("Solo se permitir caracteres de la a-z");
  		    return false;
  		}
	}validaSoloTextoApellido(apellido);

	//Para los campos nombre y apellido la primera letra debe ser mayúscula.
	function mayusculaNombre(nombre){
		//Hacer que todas las letras queden en minúscula por si el usuario puso algo en mayúscula
		var nombreMinuscula= document.getElementById('name').value.toLowerCase();
		document.getElementById('name').value=nombreMinuscula;
		//Hacer que la primera letra sea mayúscula, reservar dato
		var primeraMayusculaN= nombre.substr(0,1).toUpperCase();
		//Hacer que las letras de la palabra sean un arreglo
		var nombreChico= document.getElementById('name').value;
		var arregloNombre=nombreChico.split("");
		//Quitar el primer elemento del arreglo
		var sinPrimeraLetraN= arregloNombre.shift();
		//Agregar la primera letra pero en mayúscula
		var conPrimeraLetraN= arregloNombre.unshift(primeraMayusculaN);
		//Unir los elementos del array en una palabra
		var nombreListo= arregloNombre.join("");
		document.getElementById('name').value=nombreListo;
	}mayusculaNombre(nombre);

	function mayusculaApellido(apellido){
		//Hacer que todas las letras queden en minúscula por si el usuario puso algo en mayúscula
		var apellidoMinuscula= document.getElementById('lastname').value.toLowerCase();
		document.getElementById('lastname').value=apellidoMinuscula;
		//Hacer que la primera letra sea mayúscula, reservar dato
		var primeraMayusculaA=apellido.substr(0,1).toUpperCase();
		//Hacer que las letras de la palabra sean un arreglo
		var apellidoChico= document.getElementById('lastname').value;
		var arregloApellido=apellidoChico.split("");
		//Quitar el primer elemento del arreglo
		var sinPrimeraLetraA= arregloApellido.shift();
		//Agregar la primera letra pero en mayúscula
		var conPrimeraLetraA=arregloApellido.unshift(primeraMayusculaA);
		//Unir los elementos del array en una palabra
		var apellidoListo=arregloApellido.join("");
		document.getElementById('lastname').value=apellidoListo;
	}mayusculaApellido(apellido);

	//El campo password debe tener al menos 6 caracteres.
	function seisCaracteres(contrasena){
		if (contrasena.length < 6){
			var containerAlertaContrasena = document.getElementsByClassName("input-box")[3];
			$( ".input-box:eq(3)" ).append("<span id='idContrasena'>La contraseña debe tener al menos 6 caracteres.</span>");
			return false;
    	} else{
			$('#idContrasena').hide();
    		return true;
    	}
	}seisCaracteres(contrasena);

	//El campo password no puede ser igual a "password" ó "123456" ó "098754"
	function noPermitido(contrasena){
		if(contrasena=="password"){
			alert("El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		} 
		else if(contrasena==123456){
			alert("El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		}
		else if(contrasena==098754){
			alert("El campo contrasena no puede ser igual a 'password' o '123456' o '098754'");
			return false;
		}
		else{
			return true;
		}
	}noPermitido(contrasena);
}