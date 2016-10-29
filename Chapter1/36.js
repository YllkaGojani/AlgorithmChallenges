function swapTowardCenter(arr)
{
	console.log(arr);
	for(var i = 0; i < arr.length/2; i++)
	{
		if(i % 2 == 0)
		{
			temp = arr[i];
			arr[i] = arr[arr.length - 1 - i];
			arr[arr.length - 1 - i] = temp;
		}
	}
	console.log(arr);
}

swapTowardCenter([1,2,3,4,5,6]);
swapTowardCenter(['me',2,5,8,6,'hey','you',5,'live']);