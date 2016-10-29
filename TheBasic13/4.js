function odds1to255()
{
	var i = 1;
	while(i <= 255)
	{
		if(i % 2 != 0)
		{
			console.log(i);
		}
		i++;
	}
}

odds1to255()