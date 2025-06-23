function exchangeWith(a, b) {
  // your code here
  const copyA = [...a].reverse();
  const copyB = [...b].reverse();

  a.length = 0;
  b.length = 0;

  a.push(...copyB);
  b.push(...copyA);
   
}


let a = [6,7]; 
let b = [2,0];


exchangeWith(a,b);

console.log(a);
console.log(b); 