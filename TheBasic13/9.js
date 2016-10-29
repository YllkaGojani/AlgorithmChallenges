function maxMinAvg(arr)
{
	if(arr.length == 0)
		console.log('Empty array!');

	var max = arr[0];
	var min = arr[0];
	var sum = 0;
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] < min)
			min = arr[i];
		if(arr[i] > max)
			max = arr[i];
		sum += arr[i];
	}
	var avg = sum/arr.length;
	console.log('Max value: ' + max);
	console.log('Min value: ' + min);
	console.log('Avg value: ' + avg);
}

maxMinAvg([2,5,6,7,1,5,9]);