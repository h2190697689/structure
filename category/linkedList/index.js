/**
 * @default 链表
 * @author hejiamin
 * @date 2020/8/17
 */

 /**
  * 单项链表
  */
function ListNode (value,next){
    this.value = value;
    this.next = next;
}

var a = { value: "log-a" };
var b = { value: "log-b" }
var c = { value: "log-c" };
a.next = b;
b.next = c;
b = c;
console.log(b);
console.log(c);

function print(){
    var p = a;
    // b = c;
    while(p){
        console.log(p);
        p = p.next;
    }
}

print()
