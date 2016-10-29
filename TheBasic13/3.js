function findPrintMax(arr)
{
	if(arr.length == 0)
	{
		console.log('Empty array!');
	}
	var max = arr[0];
	for(var i = 1; i < arr.length; i++)
	{
		if(arr[i] > max)
		{
			max = arr[i];
		}
	}
	console.log('Max value in the array: ' + max);
}

findPrintMax([2,3,2,6,7])