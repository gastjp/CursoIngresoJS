/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var marca= document.getElementById("Marca").value;
	var lamparasbc = document.getElementById ("Cantidad").value;
	var preciofinal= 35*lamparasbc;
	


		var descuento6 = 0.50;


		var descuento5a = 0.60;
		var descuento5b = 0.70;


		var descuento4a = 0.75;
		var descuento4b = 0.80;


		var descuento3a = 0.85;
		var descuento3b = 0.90;
		var descuento3c = 0.95; 

alert (preciofinal);	
if (lamparasbc>5)
{
	document.getElementById("precioDescuento").value= preciofinal*descuento6;
}

switch (marca)
{ 
	case "ArgentinaLuz" :
	if (lamparasbc==5)
	{
		document.getElementById("precioDescuento").value=preciofinal*descuento5a;

	}
	else 
		{ 
			document.getElementById("precioDescuento").value=preciofinal*descuento5b;
		}
		if (lamparasbc==4)
		{
			document.getElementById("precioDescuento").value=preciofinal*descuento4a;
		}
		else 
		{

		}
	


}
}



/*Las lámparas están al mismo precio de $35 pesos final. 
A.	Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%. 
C.	Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%. 
D.	Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%. 
E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.*/