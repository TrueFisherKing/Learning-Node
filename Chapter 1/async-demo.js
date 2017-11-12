fs = require('fs');

function phoneNumber(eer, data) {
  console.log('data:', data);
}

fs.readdir('c:/', phoneNumber);

console.log("this comes first");
