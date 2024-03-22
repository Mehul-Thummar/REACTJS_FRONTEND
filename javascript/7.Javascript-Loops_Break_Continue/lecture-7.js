/* Javascript Nested Loop */

// for (initi; condition; afterthought) {
//     for (initi; condition; afterthought) {
//     }
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main Loop`);
//     for (let j = 0; j < 5; j++) {
//         console.log(`${j} Child Loop`);
//     }
// }

/* Javascript Break Statements */

// for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main Loop`);
//     if (i == 2) {
//         break;
//     }
//     for (let j = 0; j < 5; j++) {
//         console.log(`${j} Child Loop`);
//     }
// }


// Loops: for (let i = 0; i < 10; i++) {
//     console.log(`${i} Hello Main Loop`);
//     for (let j = 0; j < 5; j++) {
//         if (i == 2) {
//             break Loops;
//         }
//         console.log(`${j} Child Loop`);
//     }
// }


/* Javascript continue Statements */

// Loops: for (let i = 1; i < 10; i++) {
//     console.log(`${i} Main Loop`);
//     for (let j = 1; j < 10; j++) {
//         if (j == 3) {
//             continue Loops;
//         }
//         console.log(`${j} Child Loop`);
//     }
// }


/* Javascript for....in Loop */

// let Object = { FirstName: "joe", Lastname: "Biden", Age: 79, Gender: "Male" };

// let Datal = Object.FirstName
// let Data2 = Object.LastName
// let Data3 = Object.Age
// let Data4 = Object.Gender

// console.log(Data1);
// console.log(Data2);
// console.log(Data3);
// console.log(Data4);
// console.log(Object);

// for (let key in Object) {
//     console.log(`${key} = ${Object[key]}`);
// }


/* Javascript for.....of loop */

// let NewArray = ["Joe", "Biden", 79, "Male"];

// let Data5 = NewArray[0]
// let Data6 = NewArray[1]
// let Data7 = NewArray[2]
// let Data8 = NewArray[3]

// console.log(Data5);
// console.log(Data6);
// console.log(Data7);
// console.log(Data8);

// for (let value of NewArray) {
//     console.log(`${value}`);
// }

// let String = "Javascript!";

// for (let char of String) {
//     console.log(`${char}`);
// }