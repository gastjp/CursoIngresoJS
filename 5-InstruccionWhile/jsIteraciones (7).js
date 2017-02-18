function Mostrar()
{
	var num;                                                                                        
	var contador=0;
	var acumulador=0;                   
	var respuesta=true;

	while (respuesta)
	{
		contador++;
		num=prompt ("");
		num=parseInt(num);
		acumulador+=num;
		respuesta=confirm ("");

	}
	alert (acumulador);
	alert (acumulador/contador);
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN