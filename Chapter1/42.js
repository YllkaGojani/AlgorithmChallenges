function whatReallyHappensToday()
{	
	var arr = ['volcano','tsunami','earthquake','blizzard','meteor strike'];
	for(var i = 0; i < arr.length; i++)
	{
		var percentage = Math.floor((Math.random() * 100) + 1);
		console.log(percentage+ '% chance of ' + arr[i]);
	}	
}
whatReallyHappensToday()