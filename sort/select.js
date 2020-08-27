/**
 * @desc 选择排序
 */

var a =[3,6,9,4,5,3,6];

function select(arr){
    for(let i=0; i< arr.length;i++){
        var min = arr[i];
        var temp = arr[i];
        var index = 0;
        for(let j=i+1; j<arr.length; j++){
            if(min > arr[j]){
                min = arr[j];
                index = j;
            }
        }
        if(temp > min){
            arr[i] = min;
            arr[index] = temp;
        }
    }
    return arr
}
console.log(select(a))
