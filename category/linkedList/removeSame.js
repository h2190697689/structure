/**
 * @desc 给定一个排序链表，删除所有重复的元素
 */
function ListNode(val){
    this.val = val;
    this.next = null;
}

var deleteDuplicates = function(head){
    var p = head;
    while(p && p.next){
        if(p.val === p.next.val){
            p.next = p.next.next
        }else {
            p = p.next
        }
    }
    return head;
}
