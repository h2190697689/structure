/**
 *
 * @param {*} arr
 */

function quick(arr){
	if(arr.length===0){
		return []
	}
	let left = [];
	let right = [];
	let middle = [];
	let now = arr[0];
	for(let i=0; i<arr.length; i++){
		if(arr[i]<now){
			left.push(arr[i])
		}else if(arr[i]>now){
			right.push(arr[i])
		} else{
			middle.push(arr[i])
		}
	}
	return quick(left).concat(middle,quick(right))
}

// function quick(arr){
// 	if(arr.length <=1){
// 		return arr;
// 	}
// 	let pivotIndex = Math.floor(arr.length /2);
// 	let pivot = arr.splice(pivotIndex, 1)[0];
// 	let left = [];
// 	let right = [];
// 	arr.forEach(el=>{
// 		if(el<pivot){
// 			left.push(el)
// 		} else{
// 			right.push(el)
// 		}
// 	})
// 	return quick(left).concat(pivot,quick(right))
// }


var a =[3,6,9,3, 4,5,3,6];
console.log(quick(a));
// console.log([].concat(1,[5,6]))
