// //'use strict';

// function first(){
//     var firstName = "modi"
//     function second(){
//         var firstName = "putin"
//     }

//     second();
//     console.log(firstName);
// }
// first()

// 'use strict';

// const jonas = {
//     year : 1999,
//     calAge : function(){
//         console.log(this);
//         console.log(this.year);

//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1991 && this.year <= 1999)
//         }

//         isMillenial();
//     }
// }

// jonas.calAge();

// 'use strict';

// const addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }

// addExpr(2, 3);
// addExpr(1, 2, 3, 4);

'use strict';

const jessica = {
    firstName : 'Jes',
    age : 30,
    family : ["akhi", "kumar"]
}

const jessicaCopy = Object.assign({}, jessica);
jessicaCopy.firstName = "Mankad";
jessicaCopy.family.push("gigi");
jessicaCopy.family.push('Holland');

console.log("jes : ", jessica);
console.log("copy of jes : ", jessicaCopy)