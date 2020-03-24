const fs = require("fs");

const totalFuelRequired = (massModule) => {  
  let newMassModule = (Math.floor(Number(massModule)/3)) - 2;
  if(newMassModule <= 0) {
    return 0;
  } 
    return newMassModule + totalFuelRequired(newMassModule);
}

fs.readFile("./inputFile", (err, data) => {
  if (err) console.log(err);
  else {
    const massInput = [] = data.toString().split(/\r\n/);    
    let result = 0;
    for (let i = 0; i < massInput.length; i++) {   
        result += totalFuelRequired(massInput[i]);      
    }
    console.log(result);
  }
});

