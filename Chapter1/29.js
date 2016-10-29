function oneAndAnother(arr)
{
	var arr1 = [];
	console.log('Second-to-last',arr[arr.length-2]);
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] % 2 != 0)
		{
			arr1.push(arr[i]);
		}
	}
	return arr1[0];
}

console.log(oneAndAnother([2,5,9,3,4,7]));