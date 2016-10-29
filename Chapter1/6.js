function counting()
{
	for(var i = 1; i <= 100; i++)
	{
		if(i % 5 == 0)
		{
			if(i % 10 == 0)
			{
				console.log('coding dojo');
			}
			else
			{
				console.log('coding');
			}
		}
		else
		{
			console.log(i);
		}
	}
}

counting();