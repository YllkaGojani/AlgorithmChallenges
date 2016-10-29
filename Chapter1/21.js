function lenAndVal(num1, num2)
{
	var arr = [];
	for(var i = 0;i < num1; i++)
	{
		arr[i] = num2;
	}
	if(num1 == num2)
	{
		console.log('Jinx!');
	}
	console.log(arr);
}

lenAndVal(2,7);
lenAndVal(3,3);