/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
   
    var pLeft = Math.floor(p/2);
    
    if(p % 2 == 0){
        
        var pRight = Math.floor((n-p)/2)
    }else{
        var pRight = Math.ceil((n-p)/2)
    }
    return(Math.min(pLeft,pRight));
}