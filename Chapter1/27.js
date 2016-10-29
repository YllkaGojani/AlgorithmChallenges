function lowAndHigh(arr)
{
	var min = 0;
	var max = 0;
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] < min)
		{
			min = arr[i];
		}
		if(arr[i] > max)
		{
			max = arr[i];
		}
	}
	console.log(min);
	return max;
}

console.log(lowAndHigh([2,-3,4,-6,9,-1]));