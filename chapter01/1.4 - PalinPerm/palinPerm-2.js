// Bitwise solution uses less space
function palinPerm(s, offset = 'a'.charCodeAt()) {
  var bitVector = 0;
  
  for (var i = 0; i < s.length; i++) {
    var pos = s[i].charCodeAt() - offset;
    let mask = (1 << pos);
    if (mask > 0) {
      bitVector ^= mask;
    }
  }
  return (((bitVector - 1) & bitVector) === 0)
}

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
