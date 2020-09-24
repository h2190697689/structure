/**
 * @desc 选择排序
 * 1. 一轮比较找出最小的数放在该轮数据首位
 */

var a =[3,6,9,4,5,3,6];

function select(arr){
    for(let i=0; i< arr.length;i++){
        let minIndex =i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(arr[i]>arr[minIndex]){
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr
}
console.log(select(a))
