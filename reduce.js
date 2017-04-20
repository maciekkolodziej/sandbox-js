let fs = require('fs');

let cl = console.log;

let output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split(' '))
  .reduce((customers, line) => {
    customers[line[0]] = { number: line[1], color: line[2] };
    return customers;
  }, {});
cl("Output:", JSON.stringify(output, null, 2));
