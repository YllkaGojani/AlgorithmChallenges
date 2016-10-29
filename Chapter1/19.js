function greaterThanSec()
{
	var count = 0;
	var arr = [1,3,5,7,9,13];
	for (var i = 0; i < arr.length; i++) 
	{
		if(arr[i] > arr[1])
		{
			console.log(arr[i]);
			count++;
		}
	}
	return count;
}	

console.log(greaterThanSec());