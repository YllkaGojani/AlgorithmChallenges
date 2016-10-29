function shiftval(arr)
{
	for(var i = 1; i <arr.length; i++)
	{
		arr[i-1] = arr[i];
	}
	arr[arr.length-1] = 0;
	console.log(arr);
}

shiftval([2,1,5,3,4,6]);