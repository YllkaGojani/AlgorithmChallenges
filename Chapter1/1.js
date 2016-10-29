function settingAndSwapping()
{
	myNumber = 42;
	myName = 'Yllka';
	console.log(myName + myNumber)
	temp = myNumber;
	myNumber = myName;
	myName = temp;
	console.log(myName + myNumber)
}

settingAndSwapping();