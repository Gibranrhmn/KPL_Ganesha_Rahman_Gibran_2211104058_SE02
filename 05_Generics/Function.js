function swap(a, b) {
    return [b, a];
}
 
let x = 3, y = 7;
[x, y] = swap(x, y);
console.log(x, y); 