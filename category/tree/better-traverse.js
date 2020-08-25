const {bt} = require("./traverse.js");

console.log("------------------")
/**
 * 二叉树,前中后遍历,非递归版
 */
/**
 * 先序遍历
 * @description 1. 访问根节点  2. 对根节点的左子树进行先序遍历  3. 对根节点的右子树进行先序遍历
 */
const preorder = (root) =>{
    let stack = [root];
    while(stack.length>0){
        const p = stack.pop();
        console.log(p.val);
        if(p.left) stack.push(p.right);
        if(p.right) stack.push(p.left);
    }
}
// preorder(bt)

/**
 * 中序遍历
 * @description 1. 对根节点的左子树进行中序遍历  2. 访问根节点  3. 对根节点的右子树进行中序遍历
 */
const inorder = (root) =>{
    let stack = [];
    let p = root;
    while(stack.length || p){
        while(p){
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val);
        p = n.right;
    }
}
inorder(bt)


/**
 * 后序遍历
 * @description 1. 对根节点的左子树进行后序遍历  2.对根节点的右子树进行后序遍历  3.访问根节点
 */
const postorder = (root) =>{
    if(!root) { return; }
    let stack = [root];
    const outputStack = [];
    while(stack.length){
        const n = stack.pop();
        outputStack.push(n);
        if(n.left) stack.push(n.left);
        if(n.right) stack.push(n.right);
    }
    while(outputStack.length){
        const n = outputStack.pop();
        console.log(n.val)
    }
}


