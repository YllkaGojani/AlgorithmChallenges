function addSeven(arr)
{
	var arr1 = [];
	for(var i = 1; i < arr.length; i++)
	{
		arr1[i-1] = arr[i] + 7;
	}
	return arr1;
}

console.log(addSeven([2,6,4,8]));
