

function agregar(){
	// tomo texto de textarea
	var tareas = document.getElementById('tarea').value;
	//se limpia textarea
	document.getElementById('tarea').value = "";
	// creo elemento div 
	var nuevasTareas = document.createElement('div');
	//contenedor donde irán las tareas
	var cont = document.getElementById('contenedor');
	
	
	//validacion que textarea no este vacio
	if(tareas == null || tareas.length == 0){
		alert('¡Error ! Debe ingresar tarea');
		return false;
	}

	//checkbox
	var chck = document.createElement('input');
	chck.type = 'checkbox';
	chck.setAttribute('class', 'check');
	var basura = document.createElement('span');
	basura.classList.add('glyphicon', 'glyphicon-trash', 'trash');
	var cora = document.createElement('span');
	cora.classList.add('glyphicon', 'glyphicon-heart' , 'corazon');

	//nodo texto del textarea
	var textoNuevaTarea = document.createTextNode(tareas);
	//contenedor de elemento
	var elementoContenedor = document.createElement('span');
	//contiene textarea
	elementoContenedor.appendChild(textoNuevaTarea);

	//paso checkbox a div
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);
	//paso span a div
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

	//tachado
	chck.addEventListener('click', function(){
		elementoContenedor.classList.toggle('tachado'); //agrego clase tachado a span contenedor de tareas, se activa al hacer click
	})

	//remover tarea
	basura.addEventListener('click', function(){
		cont.removeChild(nuevasTareas); //remueve tareas agregadas al div contenedor, se activa al hacer click
	})	

	//corazon rojo
	cora.addEventListener('click', function(){
		cora.classList.toggle('red'); //agrega clase red al elemento span del corazon
	})
}







