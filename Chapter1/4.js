function multOfSix()
{
	var n = 6;
	while(n <= 60000)
	{
		if(n % 6 == 0)
		{
			console.log(n);
		}
		n++;
	}
}

multOfSix();