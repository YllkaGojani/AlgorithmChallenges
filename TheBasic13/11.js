function negativeTo0(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] < 0)
			arr[i] = 0;
	}
	console.log(arr);
}

negativeTo0([2,-4,6,9,-5,-8]);