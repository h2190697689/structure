/**
 * @desc 图
 * @detail 深度优先遍历算法口诀
 * 1. 访问根节点  2. 对根节点的没访问过的相邻节点挨个进行深度优先遍历
 */

 const graph = {
     0: [1, 2],
     1: [2],
     2: [0,3],
     3: [3]
 }

const visited = new Set();
const deep=(n)=>{
    console.log(n);
    visited.add(n);
    graph[n].forEach(item=>{
        if(!visited.has(item)){
            deep(item)
        }
    })
}
deep(2);



/**
 * @desc 广度优先遍历
 * 1.新建一个队列，把根节点入队  2.把队头出队并访问  3.把队头的没访问过的相邻节点入队
 */
const rangeVisited = new Set();
const q = [2];
rangeVisited.add(2)
while(q.length){
    const n = q.shift();
    console.log(n);
    // rangeVisited.add(n);
    graph[n].forEach(item=>{
        if(!rangeVisited.has(item)){
            q.push(item);
            rangeVisited.add(item);
        }
    })
}

