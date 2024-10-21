const { program } = require('commander');
const fs = require('fs');
const path = require('path');

program
    .option('-i, --input <char>')
    .option('-o, --output <char>')
    .option('-d, --display');

program.parse();

const options = program.opts();
if (options.input == null) {
    console.log('Please, specify input file');
    return;
}
if (!fs.existsSync(options.input)) {
    console.log('Cannot find input file');
    return;
}
const filePath = options.input;
const data = options.output;



if (options.input != null && options.output != null) {
    const inputData = fs.readFileSync(options.input, 'utf-8');
    const outputFIlePath = path.resolve(options.output);


    try {
        fs.writeFileSync(outputFIlePath, inputData, 'utf-8');
        console.log("Successfully added to file");
    } catch (error) {
        console.log('error writing file');
    }

    if(options.display != null)
        console.log(inputData);
}
const data_string = fs.readFileSync("data.json", 'utf-8');
const data2 = JSON.parse(data_string);

  function filterAndPrintData(data2) {
    const filtered = data2.filter(item => item.txt === "Доходи, усього" || item.txt === "Витрати, усього");
    
    filtered.forEach(item => {
      console.log(`${item.txt}:${item.value}`);
    });
  }
  
  filterAndPrintData(data2);
  