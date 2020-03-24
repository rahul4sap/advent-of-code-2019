const fs = require("fs");

fs.readFile("./inputFile", (err, data) => {
  if (err) console.log(err);
  else {
    const massInput = [] = data.toString().split(/\r\n/);    
    let result = 0;
    for (let i = 0; i < massInput.length; i++) {   
        result += Math.floor(Number(massInput[i])/3) - 2;      
    }
    console.log(result);
  }
});

