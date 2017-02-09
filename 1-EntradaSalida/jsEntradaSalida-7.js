/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1;
	var num2;
	var suma;

	num1= parseInt (document.getElementById ("numeroUno").value);
    num2= parseInt (document.getElementById ("numeroDos").value);
    suma= num1+num2;


alert ("la suma es "+suma);	
}

function restar()
{ var num1 = parseInt (document.getElementById("numeroUno").value);
   var num2 = parseInt (document.getElementById ("numeroDos").value);
  var resta= num1-num2;
 alert ("la resta es "+ resta);
	
}

function multiplicar()
{ var num1= document.getElementById("numeroUno").value;
  var num2= document.getElementById("numeroDos").value;
  var mult= num1*num2;

	alert("la multiplicacion es "+ mult);
	
}

function dividir()
{ var num1= document.getElementById("numeroUno").value;
var num2=document.getElementById("numeroDos").value;
var div= num1/num2;
	
	alert ("la division es "+div);

}

