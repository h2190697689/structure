/**
 * @default 队列
 * @author hejiamin
 * @date 2020/8/17
 * @desc  打印近3秒的请求数量
 */
function team(){
    this.que = []
}

team.prototype.print=function(t){
    this.que.push(t);
    while(this.que[0]<t-3000){
        this.que.shift();
    }
    return this.que.length
}
