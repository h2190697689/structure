const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

/**
 * 先序遍历
 * @description 1. 访问根节点  2. 对根节点的左子树进行先序遍历  3. 对根节点的右子树进行先序遍历
 */
const preorder = (root) =>{
    console.log(root.val);
    if(root.left) preorder(root.left);
    if(root.right) preorder(root.right)
}
// preorder(bt)

/**
 * 中序遍历
 * @description 1. 对根节点的左子树进行中序遍历  2. 访问根节点  3. 对根节点的右子树进行中序遍历
 */
const inorder = (root) =>{
    if(root.left) inorder(root.left);
    console.log(root.val);
    if(root.right) inorder(root.right)
}
inorder(bt)


/**
 * 后序遍历
 * @description 1. 对根节点的左子树进行后序遍历  2.对根节点的右子树进行后序遍历  3.访问根节点
 */
const postorder = (root) =>{
    if(!root) { return; }
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}
// postorder(bt)


module.exports = { bt }
