/**
 * @desc 二分搜索算法
 * 前提：数组是有序的
 */
function binary(arr, value){
    let low = 0;
    let high = arr.length -1;
    while(low<=high){
        const mid = Math.floor((low + high)/2);
        const element = arr[mid];
        if(element < value){
            low = mid + 1;
        } else if(element>value){
            high = mid -1;
        } else{
            return mid
        }
    }
    return -1;

    // if(value<arr[mid]){
    //     binary(arr.slice(0,mid))
    // } if(value>arr[mid]){
    //     binary(arr.slice(mid+1, arr.length))
    // }else{
    //     return mid
    // }
}

