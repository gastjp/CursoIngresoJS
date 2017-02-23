function Mostrar()
{
var contdiv=0;
var num=prompt ("ingrese un numero");
for (var i=1;i<=num ;i++)
{
	if (num%i==0)
	{
		console.log(i);
		contdiv++;
	}
}
alert (contdiv);
}//FIN DE LA FUNCIÓN