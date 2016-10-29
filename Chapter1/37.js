function incrementSec(arr)
{
	console.log(arr);
	for(var i = 0; i < arr.length; i++)
	{
		if(i % 2 != 0)
		{
			arr[i] += 1;
		}
		console.log(arr[i]);
	}
	return arr;
}

console.log(incrementSec([2,6,9,4,3,5]));