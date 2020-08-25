var tree = {
    val: "1",
    children: [
        {
            val: "2",
            children: [
                {
                    val: "3"
                }
            ]
        },
        {
            val: "4"
        }
    ]
}

/**
 * @description 深度遍历
 */
function deepEach(root){
    let res = [];
    function each(p){
        res.push(p.val);
        if(p.children){
            p.children.forEach(item => {
                each(item)
            });
        }
    }
    each(root);
    return res;
}

// console.log(deepEach(tree))


const rangeEach = (root)=>{
    let res = []
    const q = [root];
    while(q.length > 0){
        const n = q.shift();
        // console.log(n.val);
        res.push(n.val)
        n.children.forEach(child=>{
            q.push(child)
        })
    }
}

console.log(rangeEach(tree))
