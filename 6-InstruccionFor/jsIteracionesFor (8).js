function Mostrar()
{

var cont=0;
var num=prompt ("ingrese un numero");
for (var i=1;i<=num ;i++)
{
	if (num%i==0)
	{
		cont++
	}
	if (cont>2)
	{
		break;
	}


}

	if (cont<=2)
		{
			alert ("es primo");
			
		}
	while (isNaN(num))
	{
		num=prompt();
		num=parseInt(num);
	}
}//FIN DE LA FUNCIÓN