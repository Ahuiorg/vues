
var memory = []

function fabonacci(n) {
  if (memory[n] !== undefined) {
    return memory [n]
  }
  return memory[n] = (n === 0 || n === 1) ? n : fabonacci(n - 1) + fabonacci(n - 2)
}

// var start  = new Date();
// var result = fabonacci(500);
// var end    = new Date();

// console.log('fabonacci(%d) = %d, use time %dms.',   50,  result, end.getTime() - start.getTime());

for (let i = 0; i <= 50; i++) {
  console.log(fabonacci(i))
}