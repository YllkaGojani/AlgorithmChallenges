function scaleArr(arr,num)
{
	console.log(arr);
	for(var i = 0; i < arr.length; i ++)
	{
		arr[i] *= num;
	}
	return arr;
}

console.log(scaleArr([2,3,4,5,6],3));