function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (mesDelAño)
	{
		case "Febrero" :
		{
			alert ("Este mes no tiene más de 29 días.");
			break;
		}

		default : 
		{
			alert ("Este mes tiene 30 o más días.");
			break;
		}
		
	}
	


}/*FIN DE LA FUNCIÓN
Enunciado:
al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"*/