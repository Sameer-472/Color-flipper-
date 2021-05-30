

let num = 14;
let n = num.toString(16);
console.log(n)

var color = '#';
for (let i = 0; i < 16; i++) {
    // const element = i[i];
    let count = Math.floor(Math.random()* Math.pow(256,3)).toString(16);
    let clr = color+
    count;
    console.log(clr)
}


color += (sub.length == 1 ? "0" + sub : sub);