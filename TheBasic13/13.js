function negativeToDojo(arr)
{
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] < 0)
			arr[i] = 'Dojo';
	}
	console.log(arr);
}

negativeToDojo([2,-1,6,8,-7,4])