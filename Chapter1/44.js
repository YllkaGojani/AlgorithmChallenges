function letterGrade(score)
{
	var grade;
	if(score >= 90 && score <= 100)
	{
		grade = 'A';
	}
	else if (score >= 80 && score <= 89)
	{
		grade = 'B';
	}
	else if (score >= 70 && score <= 79)
	{
		grade = 'C';
	}
	else if (score >= 60 && score <= 69)
	{
		grade = 'D'
	}
	else if(score >= 0 && score <= 59)
	{
		grade = 'F';
	}
	console.log('Score: ' + score + '. Grade: ' + grade);
}

letterGrade(57);
letterGrade(101);
letterGrade(85);