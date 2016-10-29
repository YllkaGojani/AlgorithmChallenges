function fitFirstVal(arr)
{
	if(arr[0] > arr.length)
	{
		console.log('Too big!');
	}
	else if(arr[0] < arr.length)
	{
		console.log('Too small!')
	}
	else
	{
		console.log('Just right!');
	}
}

fitFirstVal([4,2,1]);
fitFirstVal([2,3,1]);
fitFirstVal([3,2,1]);