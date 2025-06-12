function cupVolume(d1, d2, height) {
  const r1 = d1 / 2;
  const r2 = d2 / 2;
  return (1 / 3) * Math.PI * height * (r1 ** 2 + r1 * r2 + r2 ** 2);
}


console.log(cupVolume(1, 1, 1));          
console.log(cupVolume(10, 8, 9));         
console.log(cupVolume(1000, 1000, 1000)); 
console.log(cupVolume(12, 123, 1));       
console.log(cupVolume(6, 12, 33));        
