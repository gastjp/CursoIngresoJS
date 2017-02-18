function Mostrar()
{

	var primera=true;
	// declarar variables
	var num;
	var max;
	var min;
	
	while(confirm(""))
	{
		num= prompt ("Ingrese un numero");
		num=parseInt (num);
		if (primera) {
			primera=false;
			max=num;
			min=num;

		}
		else 
		{

		
			if (num>max)
			{
				max=num;
			}
			if (num<min);
			{
				min=num;
			}
		}	
	}
}