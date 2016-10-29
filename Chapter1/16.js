function countdown(num)
{
	var arr = [];
	for(var i = num; i >= 0; i--)
	{
		arr[i] = num-i;
	}
	console.log(arr + '. Length of arr:' + arr.length);
}

countdown(3);