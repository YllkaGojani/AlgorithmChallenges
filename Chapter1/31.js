function double(arr)
{
	var arr1 = [];
	for(var i = 0; i < arr.length; i++)
	{
		arr1[i] = arr[i] * 2;
	}
	return arr1;
}

console.log(double([2,3,4]));