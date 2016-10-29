function whatHappensToday()
{	
	var p = [10,15,20,25,30];
	var arr = ['volcano','tsunami','earthquake','blizzard','meteor strike'];
	for(var i = 0; i < arr.length; i++)
	{
		//a random number between 1 and 100
		var percentage = Math.floor((Math.random() * 100) + 1);
		if(percentage == p[i])
		{
			console.log(percentage+'% chance of ' +arr[i]);
		}
	}	
}

whatHappensToday()