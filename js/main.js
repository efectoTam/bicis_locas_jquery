function validateForm(){
	/* Escribe tú código aquí */
	var nombre= document.getElementById('name').value;
	var apellido= document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var contrasena= document.getElementById('input-password').value;
	var indice = document.getElementsByTagName('select')[0].selectedIndex;

	//Todos los campos son obligatorios, excepto los dos últimos.
	function camposRellenadosNombre(){
		if(nombre==null || nombre.length==0 || /^\s+$/.test(nombre)){
			//alert("ERROR: El campo nombre no debe ir vacío.");
			var containerAlertaNombre = document.getElementsByClassName("name-container")[0];
			var contenedorErrorNombre = document.createElement("span");
			var nodoAlertaNombre = document.createTextNode("Debe ingresar su nombre.");
			contenedorErrorNombre.appendChild(nodoAlertaNombre);
			contenedorErrorNombre.setAttribute("id", "idNombre");
			containerAlertaNombre.appendChild(contenedorErrorNombre);
			return false;
		} else{
			var spanNombre = document.getElementById('idNombre');
			spanNombre.style.display='none';
			return true;
		}
	}camposRellenadosNombre();

	function camposRellenadosApellido(){
		if(apellido==null || apellido.length==0 || /^\s+$/.test(apellido)){
			//alert("ERROR: El campo apellido no debe ir vacío.");
			var containerAlertaApellido = document.getElementsByClassName("lastname-container")[0];
			var contenedorErrorApellido = document.createElement("span");
			var nodoAlertaApellido = document.createTextNode("Debe ingresar su apellido.");
			contenedorErrorApellido.appendChild(nodoAlertaApellido);
			contenedorErrorApellido.setAttribute("id", "idApellido");
			containerAlertaApellido.appendChild(contenedorErrorApellido);
			return false;
		} else{
			var spanApellido = document.getElementById('idApellido');
			spanApellido.style.display='none';
			return true;
		}
	}camposRellenadosApellido();
		
	function correoValido(){
		if(!(/\S+@\S+\.\S+/.test(correo))){ //Validar que el campo email tenga un formato válido. Ej: name@domain.com.
			//alert("Verifique su e-mail.");
			var containerAlertaCorreo = document.getElementsByClassName("email-container")[0];
			var contenedorErrorCorreo = document.createElement("span");
			var nodoAlertaCorreo = document.createTextNode("Verifique que su email tenga un formato válido.");
			contenedorErrorCorreo.appendChild(nodoAlertaCorreo);
			contenedorErrorCorreo.setAttribute("id", "idCorreo");
			containerAlertaCorreo.appendChild(contenedorErrorCorreo);
			return false;
		} else{
			var spanCorreo = document.getElementById('idCorreo');
			spanCorreo.style.display='none';
			return true;
		}
	}correoValido();

	function camposRellenadosBici(){
		if(indice == null || indice == 0) { //El valor seleccionado de bicis, debe ser una de las opciones presentadas.
			//alert("Debe seleccionar al menos un tipo de bici.");
			var containerAlertaBici = document.getElementsByClassName("input-box")[4];
			var contenedorErrorBici = document.createElement("span");
			var nodoAlertaBici = document.createTextNode("Debe seleccionar al menos un tipo de bici.");
			contenedorErrorBici.appendChild(nodoAlertaBici);
			contenedorErrorBici.setAttribute("id", "idBici");
			containerAlertaBici.appendChild(contenedorErrorBici);
	  		return false;
		} else{
			var spanBici = document.getElementById('idBici');
			spanBici.style.display='none';
			return true;
		}
	}camposRellenadosBici();

		/*if(contrasena==null || contrasena.length==0 || /^\s+$/.test(contrasena)){
			alert("El campo contraseña no debe ir vacío.");
			return false;
		}
		else{
			return true;
		}*/

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
			//alert("La contraseña debe tener al menos 6 caracteres.")
			var containerAlertaContrasena = document.getElementsByClassName("input-box")[3];
			var contenedorErrorContrasena = document.createElement("span");
			var nodoAlertaContrasena = document.createTextNode("La contraseña debe tener al menos 6 caracteres.");
			contenedorErrorContrasena.appendChild(nodoAlertaContrasena);
			contenedorErrorContrasena.setAttribute("id", "idContrasena");
			containerAlertaContrasena.appendChild(contenedorErrorContrasena);
			return false;
    	} else{
    		var spanContrasena = document.getElementById('idContrasena');
			spanContrasena.style.display='none';
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