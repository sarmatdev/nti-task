const fs = require('fs');
const arrayDepth = 30000;
const strings = {
  strings: [],
};

const makeid = (length = 100) => {
  let result = '';
  // let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
console.time('Execution time took');
let i = 0;
while (i <= arrayDepth) {
  strings.strings.push(makeid());
  const jsonContent = JSON.stringify(strings);
  console.log(arrayDepth - i);
  fs.writeFileSync('./db.json', jsonContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });

  i++;
}

console.timeEnd('Execution time took');
