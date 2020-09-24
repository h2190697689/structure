/**
 * 1. 比较所有相邻元素, 如果第一个比第二个大,则交换他们
 * 2. 一轮下来, 可以保证最后一个数是最大的
 */

// function bubble(arr){
// 	var i, j, temp;
// 	for(i=arr.length;i>1;i--){
// 		for(j=0;j<i-1;j++){
// 			if(arr[j]>arr[j+1]){
// 				temp = arr[j];
// 				arr[j]= arr[j+1];
// 				arr[j+1] = temp;
// 			}
// 		}
// 	}
// 	return arr
// }

var a =[3,6,9,4,5,3,6];
console.log(bubble(a));

function bubble(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}


Array.prototype.bubbleSort = function(){
    for(let i=0;i<this.length -1; i++){
        for(let j=0; j<this.length-1-i;j++){
            if(this[j]>this[j+1]){
                const temp = this[j];
                this[j] = this[j+1];
                this[j+1] = temp;
            }
        }
    }
}
