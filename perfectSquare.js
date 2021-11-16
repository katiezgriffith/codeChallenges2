function nextPerfectSquare(N)
{
    let nextN = Math.floor(Math.sqrt(N)) + 1;
 
    return nextN * nextN;
}


console.log(nextPerfectSquare(4))