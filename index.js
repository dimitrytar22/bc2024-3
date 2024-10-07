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



if (options.output != null && options.output != null) {
    const inputData = fs.readFileSync(options.input, 'utf-8');
    const outputFIlePath = path.resolve(options.output);


    try {
        fs.writeFileSync(outputFIlePath, inputData, 'utf-8');
        console.log("Successfully added to file");
    } catch (error) {
        console.log('error writing file');
    }

    console.log(inputData);
}
