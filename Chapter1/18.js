function fisrtPlusLen(arr)
{
	var sum = arr[0] + arr.length;
	return sum;
}


console.log(fisrtPlusLen([2,5,3]));
// adds the first value and the length
console.log(fisrtPlusLen(['hi',5,3]));
// concatenates the string with the length
console.log(fisrtPlusLen([false,5,3]));
// adds 0 to length
console.log(fisrtPlusLen([true,5,3]));
// adds 1 to length 