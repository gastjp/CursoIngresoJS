function Mostrar()
{
var contpares=0;
var num=prompt ("ingrese un numero");
for (var i=1;i<=num ;i++)
{
	if (i%2==0)
	{
		console.log(i);
		contpares++;
	}
}

console.log(contpares);



}//FIN DE LA FUNCIÓN