function squareVal(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		arr[i] *= arr[i];
	}
	console.log(arr);
}

squareVal([2,5,4,3,6,1])