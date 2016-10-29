function prevLen(arr)
{
	console.log(arr);
	for(var i = arr.length - 1; i > 0; i--)
	{
		var temp = arr[i-1].length;
		arr[i] = temp;
	}
	console.log(arr);
}

prevLen(['agsd','dafgfaer','sdwes','dskjfb']);