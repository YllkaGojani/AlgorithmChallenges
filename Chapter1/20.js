function greaterThanSec(arr)
{
	var count = 0;
	if(arr.length > 1)
	{
		for (var i = 0; i < arr.length; i++) 
		{
			if(arr[i] > arr[1])
			{
				console.log(arr[i]);
				count++;
			}
		}	
	}
	else
	{
		console.log('Array should contain more than one element!')
	}
	return 'count: ' + count;
}	

console.log(greaterThanSec([1,3,5,7,9,13]));
console.log(greaterThanSec([1]));