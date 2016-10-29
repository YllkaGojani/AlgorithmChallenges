function finalDown(par1,par2,par3,par4)
{
	var i = par2;
	while(i <= par3 && i >= par2)
	{
		if(i % par1 == 0 && i != par4)
		{
			console.log(i);
		}
		i++;
	}
}

finalDown(3,5,17,9);