/* 'use strict';

const temperatures = [-1, 20, 'error', -20, 23, -65, 54];

const calcTemperatureAmplitude = (temp) => {
    let mini = temp[0];
    let maxi = temp[0];
    for(let i = 1 ; i < temp.length ; i++){
        if(typeof temp[i] !== 'number');

        if(temp[i] < mini) mini = temp[i];
        if (temp[i] > maxi) maxi = temp[i];
    }

    
    for (let i = 1; i < temp.length; i++) {
      
    }

    return (maxi - mini);
}

console.log(calcTemperatureAmplitude(temperatures)); */


'use strict'
const printForecast = function (arr){
    let str = "... ";
    for(let i = 0 ; i < arr.length ; i++){
        str = str + `${arr[i]}°C in ${i + 1} days ... `;
    }
    return str;
}
 
console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));