/**
 * @author hejiamin
 * @description 替换空格
 */

 const str = "We Are Happy";
 function replaceSpace(str){
    return str.replace(/\s/g,"%20")
 }

 console.log(replaceSpace(str))

