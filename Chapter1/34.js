function hungry(arr)
{
	var count = 0;
	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i] == "food")
		{
			console.log("yummy!")
			count++;
		}
	}
	if(count == 0)
	{
		console.log("I'm hungry!");
	}
}

hungry([1,'food',3,'food']);
hungry([2,3,5]);