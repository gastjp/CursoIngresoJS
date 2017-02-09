/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var imp= parseInt (document.getElementById("sueldo").value);
var aum= imp*0.10;
var result= imp+aum;

 document.getElementById("resultado").value = result;


	
}
