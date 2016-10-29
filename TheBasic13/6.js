function getPrintAvg(arr)
{
	if(arr.length == 0)
	{
		console.log('Empty array!')
	}
	var sum=0;
	for(var i = 0; i < arr.length; i++)
	{
		sum += arr[i];
	}
	var avg = sum/arr.length;
	console.log('Average: ' + avg);
}

getPrintAvg([1,2,3,4,5,6])