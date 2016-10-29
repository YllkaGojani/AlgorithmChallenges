function reverseArray(arr){
	var temp;
	for(var i = 0; i < arr.length/2; i++)
	{	
		var temp = arr[i];
		arr[i] = arr[arr.length-i-1];
		arr[arr.length-i-1] = temp;
	}
	console.log('Reversed array',arr);
}

reverseArray([2,3,5,6,4,7]);