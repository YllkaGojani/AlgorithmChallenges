function negative(arr)
{
	var arr1 = [];
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] <= 0)
		{
			arr1[i] = arr[i];
		}
		else if(arr[i] > 0)
		{
			arr1[i] = arr[i] * (-1);
		}
	}
	return arr1;
}

console.log(negative([2,0,-3,0,-5,6]));