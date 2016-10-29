function accurateLetterGrade(score)
{
	var grade;
	if(score >= 90 && score <= 100)
	{
		grade = 'A';
		if(score == 90 || score == 91)
		{
			grade += '-';
		}
	}
	else if (score >= 80 && score <= 89)
	{
		grade = 'B';
		if(score == 80 || score == 81)
		{
			grade += '-';
		}
		if(score == 88 || score == 89)
		{
			grade += '+'
		}		
	}
	else if (score >= 70 && score <= 79)
	{
		grade = 'C';
		if(score == 87 || score == 71)
		{
			grade += '-';
		}
		if(score == 78 || score == 79)
		{
			grade += '+'
		}		
	}
	else if (score >= 60 && score <= 69)
	{
		grade = 'D'
		if(score == 60 || score == 61)
		{
			grade += '-';
		}
		if(score == 68 || score == 69)
		{
			grade += '+'
		}		
	}
	else if(score >= 0 && score <= 59)
	{
		grade = 'F';
	}
	console.log('Score: ' + score + '. Grade: ' + grade);
}

accurateLetterGrade(91)
accurateLetterGrade(88)
accurateLetterGrade(67)