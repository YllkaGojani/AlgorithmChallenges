function challenge1()
{
	var q = ['2+3','4*5','6/3'];
	var a = ['5','20','2'];
	var person = prompt("Please enter your name", "Name");
	
	if (person != null) 
	{
		for(var i = 0; i < q.length; i++)
		{
			console.log("Hello " + person + '! What is ' + q[i] + '?');
			var answer = prompt("Please enter your answer", "...");
			if( answer == a[i])
			{
				console.log('Correct answer!');
			}
			else
			{
				console.log('Your answer was incorrect!');
			}
		}
	}
}

challenge1()