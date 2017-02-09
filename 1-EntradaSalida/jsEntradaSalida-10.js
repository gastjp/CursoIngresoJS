/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var imp= parseInt (document.getElementById("importe").value);
	var desc= 0.75;
	var result= imp*desc;

	document.getElementById("resultado").value = result;

}
