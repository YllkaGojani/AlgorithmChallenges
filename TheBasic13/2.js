function sum0to255()
{
	var sum = 0;
	for(var i = 0; i <= 255; i++)
	{
		sum += i;
		console.log('Sum so far: ' + sum);
	}
}

sum0to255()