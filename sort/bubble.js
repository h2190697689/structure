function bubble(arr){
	var i, j, temp;
	for(i=arr.length;i>1;i--){
		for(j=0;j<i-1;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j]= arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr
}

var a =[3,6,9,4,5,3,6 ];
console.log(bubble(a));