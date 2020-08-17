/**
 * @author hejiamin
 * @des 二叉树前序遍历
 * @date 2020/8/13
 */

var Node = function(value){
    this.value = value;
    this.left = this.right = null;
}
var headerNode = {

}

/**
 * @method 递归
 */
function recursionEach(){
    let list = [];
    function each (node){
        if(node){
            list.push(node.value);
            each(node.left);
            each(node.right)
        }
    }
    each(headerNode);
    return list
}

/**
 * @method 栈
 */
function stackEach(){
    let list = [];
    let stack = [];
    stack.push(headerNode);
    while(stack.length){
        let nowNode = stack.pop();
        list.push(nowNode.value);
        if(nowNode.right) stack.push(nowNode.right);
        if(nowNode.left) stack.push(nowNode.left);
    }
}
