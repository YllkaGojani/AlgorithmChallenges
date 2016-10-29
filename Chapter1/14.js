function flexibleDown(low,high,mult)
{
	for(var i = high; i >= low; i--)
	{
		if(i % mult == 0)
		{
			console.log(i);
		}
	}
}

flexibleDown(2,9,3);