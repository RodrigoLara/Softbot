var nodos_cierre = [];
var num = 0;
var flag = false;
var div = null;
var cierre_no_terminal = "";

function crear_softbot() {    
	var name_soft = document.getElementById("nombre_softbot");
	if(name_soft.value != "") {
		document.getElementById("div_no_terminal").style.display = "";

		div = document.getElementById("softbot");
		div.appendChild(document.createTextNode("<softbot name = '" + name_soft.value.toLowerCase() + "'>"));
		div.appendChild(document.createElement("br"));
		
		//nodos_cierre[num] = "</softbot>";
		//num++;
		name_soft.disabled = true;
		document.getElementById("crear_softbot").disabled = true;
	}
	else {
		alert("Debe poner nombre al softbot");
	}
}

function guardar() {
	cierre_no_terminal = document.getElementById("etiqueta").value.toLowerCase();
}

function agregar_nodo_no_terminal() {
	var etiqueta = document.getElementById("etiqueta");
	if(etiqueta.value != "") {
		if(flag) {
			div.appendChild(document.createTextNode("</" + cierre_no_terminal + ">"));
			div.appendChild(document.createElement("br"));
			div.appendChild(document.createTextNode("<" + etiqueta.value.toLowerCase() + ">"));
			div.appendChild(document.createElement("br"));
		}
		else {
			flag = true;
			div.appendChild(document.createTextNode("<" + etiqueta.value.toLowerCase() + ">"));
			div.appendChild(document.createElement("br"));
			document.getElementById("div_terminal").style.display = "";
		}
		cierre_no_terminal = etiqueta.value.toLowerCase();
	}
	else {
		alert("Debe escribir un nombre para la etiqueta no terminal");
	}
}

function agregar_nodo_terminal() {
	var etiqueta_terminal = document.getElementById("etiqueta_terminal");
	var dato = document.getElementById("dato");
	var lbl_tipo = document.getElementById("lbl_tipo");
	var tipo = document.getElementById("tipo");
	if(etiqueta_terminal.value != "" && dato.value != "") {
		div.appendChild(document.createTextNode("<" + etiqueta_terminal.value.toLowerCase() + ">" + dato.value.toLowerCase() + "</" + etiqueta_terminal.value.toLowerCase() + ">"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<" + lbl_tipo.innerHTML.toLowerCase() + ">" + tipo.value.toLowerCase() + "</" + lbl_tipo.innerHTML.toLowerCase() + ">"));
		div.appendChild(document.createElement("br"));
		etiqueta_terminal.value = "";
		dato.value = "";
	}
	else {
		alert("Debe escribir un valor para la etiqueta y el dato");
	}
}

function cerrar_no_terminal() {
	div.appendChild(document.createTextNode("</" + cierre_no_terminal + ">"));
	document.getElementById("etiqueta").disabled = true;
	document.getElementById("agregar_nodo_no_terminal").disabled = true;
	document.getElementById("etiqueta_terminal").disabled = true;
	document.getElementById("dato").disabled = true;
	document.getElementById("tipo").disabled = true;
	document.getElementById("agregar_nodo_terminal").disabled = true;
	document.getElementById("cerrar_no_terminal").disabled = true;
	document.getElementById("div_metodo").style.display = "";
	
}

function agregar_metodo() {
	var nombre_metodo = document.getElementById("nombre_metodo");
	var operando1 = document.getElementById("operando1_metodo");
	var operador = document.getElementById("operadores_metodo");
	var operando2 = document.getElementById("operando2_metodo");
	var variable = document.getElementById("variable_metodo");
	
	if(nombre_metodo.value != "" && operando1.value != "" && operando2.value != "" && variable.value != "") {
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<metodo name='" + nombre_metodo.value.toLowerCase() 
			+ "' type='" + document.getElementById("tipos_metodo").value.toLowerCase() + "'>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<desicion>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<condicion>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<operando>" + operando1.value.toLowerCase() + "</operando>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<operador>" + operador.value.toLowerCase() + "</operador>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<operando>" + operando2.value.toLowerCase() + "</operando>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("</condicion>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("<asignacion>"));
		div.appendChild(document.createElement("br"));
		switch(operador.value) {
			case "<":
				if(operando1.value < operando2.value) 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "true</variable>"));
				else 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "false</variable>"));
				break;
			case ">":
				if(operando1.value > operando2.value) 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "true</variable>"));
				else 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "false</variable>"));
				break;
			case "=":
				if(operando1.value == operando2.value) 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "true</variable>"));
				else 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "false</variable>"));
				break;
			case "<=":
				if(operando1.value <= operando2.value) 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "true</variable>"));
				else 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "false</variable>"));
				break;
			case ">=":
				if(operando1.value >= operando2.value) 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "true</variable>"));
				else 
					div.appendChild(document.createTextNode("<variable name='" + variable.value.toLowerCase() + "'>" + "false</variable>"));
				break;
		}
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("</asignacion>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("</desicion>"));
		div.appendChild(document.createElement("br"));
		div.appendChild(document.createTextNode("</metodo>"));
		div.appendChild(document.createElement("br"));
	}
	else {
		alert("Hay campos vacios en la seccion del metodo");
	}
}

function finalizar_softbot() {
	div.appendChild(document.createTextNode("</softbot>"));
	document.getElementById("nombre_metodo").disabled = true;
	document.getElementById("tipos_metodo").disabled = true;
	document.getElementById("operando1_metodo").disabled = true;
	document.getElementById("operadores_metodo").disabled = true;
	document.getElementById("operando2_metodo").disabled = true;
	document.getElementById("variable_metodo").disabled = true;
	document.getElementById("agregar_metodo").disabled = true;
	document.getElementById("finalizar_softbot").disabled = true;
	alert("Para volver a usar el gadget debe actualizar la pagina");
}

function ocultar() {
	document.getElementById("div_no_terminal").style.display = "none";
	document.getElementById("div_terminal").style.display = "none";
	document.getElementById("div_metodo").style.display = "none";
}