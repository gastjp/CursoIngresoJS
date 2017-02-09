/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

		var larg= document.getElementById ("Largo").value;
	    var anch= document.getElementById ("Ancho").value;
	    var largx2= larg*2;
	    var anchx2= anch*2;
	    var alambre= largx2+anchx2;
	    var alambrex3= alambre*3;



	  alert ("Se debe comprar la siguiente cantidad de alambre (en metros)= "+ alambrex3);


}
function Circulo () 
{
	var rad= document.getElementById ("Radio").value;
	var alambre= rad*3;
  (diametro*pi*2)
		alert ("Se debe comprar la siguiente cantidad de alambre (en metros)= "+alambre);

}
function Materiales () 
{
	var largo, ancho, cemento, cal;

	 largo= document.getElementById ("Largo").value;
	 ancho= document.getElementById ("Ancho").value;
 	cemento= (largo*ancho)*2;
 	cal= (largo*ancho)*3;
	alert ("se necesitan"+cemento+"bolsas de cemento y" +cal+ "bolsas de cal");

	
 