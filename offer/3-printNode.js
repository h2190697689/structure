/**
 * @author hejiamin
 * @description 输入一个链表，从尾到头打印链表每个节点的值
 */

 function Node(value){
     this.value = value;
     this.next = null
 }


 function printListFromTailToHead(head){
     const res = [];
     let presetNode = head;
     while(presetNode.next){
         res.unshift(presetNode.value);
         presetNode = presetNode.next;
     }
     return res;
 }
