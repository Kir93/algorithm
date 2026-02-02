const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'run/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const s = input[0];

if (s == "fdsajkl;" || s == "jkl;fdsa") {
  console.log("in-out");
} else if (s == "asdf;lkj" || s == ";lkjasdf") {
  console.log("out-in");
} else if (s == "asdfjkl;") {
  console.log("stairs");
} else if (s == ";lkjfdsa") {
  console.log("reverse");
} else {
  console.log("molu");
}