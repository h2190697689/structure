/**
 * 1. 从第二个数开始往前比  2. 比它大往后排  3. 以此类推进行到最后一个数
 */
function insert(arr) {
	var len =arr.length;
    for (var i=1;i<len; i++) {
        var temp=arr[i];
        var j=i-1;//默认已排序的元素
        while (j>=0 && arr[j]>temp) {  //在已排序好的队列中从后向前扫描
            arr[j+1]=arr[j]; //已排序的元素大于新元素，将该元素移到一下个位置
            j--;
        }
        arr[j+1]=temp;
   	}
    return arr
}
var a =[3,6,9,4,5,3,6 ];
console.log(insert(a));



Array.prototype.insertionSort = function(){
    for(let i=1;i<this.length;i++){
        const temp = this[i];
        let j = i;
        while(j>0 && arr[j-1]>temp){
            arr[j] = arr[j-1];
            j--;
        }
        this[j] = temp;
    }

}
