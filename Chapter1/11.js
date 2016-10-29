function yourBday(num1,num2)
{
	var month=9;
	var day=28;
	if((day == num1 && month == num2)||(day == num2 && month == num1))
	{
		console.log('How did you know?');
	}
	else
	{
		console.log('Just another day...');
	}
}

yourBday(13,2);
yourBday(9,28);
yourBday(28,9);