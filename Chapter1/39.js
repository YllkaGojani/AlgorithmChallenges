function lastFew(arr,num)
{	
	var x = num;
	console.log(arr);
	for(var i = 0; i <arr.length; i++)
	{
		arr[i] = arr[arr.length-num];
		num--;
	}
	arr.length = x;
	console.log(arr);
}

lastFew([2,4,6,8,10],4);