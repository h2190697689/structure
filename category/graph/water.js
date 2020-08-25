/**
 * @desc 太平洋水流问题
 */

 var pacificAtlantic = function(matrix){
     if(!matrix || !matrix[0]) { return []; }
     const m = matrix.length;
     const n = matrix[0].length;
     const flow1 = Array.from({length: m}, ()=> new Array(n).fill(false));
     const flow2 = Array.from({length: m}, ()=> new Array(n).fill(false));
 }
