const fs = require('fs');
const data_string = fs.readFileSync("data.json", 'utf-8');
const data = JSON.parse(data_string);

  function filterAndPrintData(data) {
    const filtered = data.filter(item => item.txt === "Доходи, усього" || item.txt === "Витрати, усього");
    
    filtered.forEach(item => {
      console.log(`${item.txt}:${item.value}`);
    });
  }
  
  filterAndPrintData(data);
  