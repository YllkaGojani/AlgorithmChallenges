function arrayOdds()
{
	var oddArr = [];
	for(var i = 1; i <= 255; i++)
	{
		if(i % 2 == 1)
			oddArr.push(i);
	}
	console.log(oddArr);
}

arrayOdds()