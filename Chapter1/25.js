function bigSize(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] >= 0)
		{
			arr[i] = 'big';
		}
	}
	return arr;
}

console.log(bigSize([-3,5,-8,-6,0,2]));