/* javascript Array Method */

/*

fill
some
every
reduce
reduceRight
find
findIndex
findLastIndex
include
Array.isArray
flat
flatMap

*/

/* fill Method in array */

{
    let array = ["java", "html", "react", "css", "node"]

    let fill = array.fill("skillqode", 2)

    console.log(fill);
}

/* some / every method */

{
    let array = ["java", "html", "react", "CSS", "node"]

    let some = array.some(item => item === "java")
    let every = array.every(item => item === "java")

    console.log(some);
    console.log(every);
}

/* reduce Method */

{
    // let Num = [12, 21, 36, 10]

    // let reduce = Num.reduce((current, previ) => current + previ)
    // let reduceRight = Num.reduceRight((current, previ) => current + previ)

    // console.log(reduce);

    // console.log(reduceRight);
}

/* findIndex findlastindex */

{
    // let array = ["java", "html", "react", "CSS", "node"]
    // let array = [45, 35, 456, 65, 21]

    // let arrays = array.findIndex(item => item.length < 4)
    // let arrays1 = array.findLastIndex(item => item.length < 4)

    // let Num1 = array.findIndex(item => item > 30)

    // console.log(arrays);
    // console.log(arrays1);

    // console.log(Num1);
}

/* include method in array */

{
    // let Num = [56, 21, 45, 36, 21]

    // let include Num.includes(21)

    // console.log(include);
}

/* Array.isArray */

{
    // let ArrayOject = new Array(45, 635, 24, 325)

    // console.log(ArrayOject);

    // let Array = [12, 15, 36]

    // let isArray = Array.isArray()

    // console.log(Array);

    // console.log(Array.isArray([]));
    // console.log(Array.isArray('12'));
    // console.log(Array.isArray(new Array(45, 635, 24, 325)));
    // console.log(Array.isArray(new Array()));
}


/* flat / flatmap Method in Array */

{
    // let NewArray = [12, 15, 36, [45, 98, 42, [15, 25, 101]]]

    // console.log(NewArray);

    // let Flat = NewArray.flat()

    // console.log(Flat);

    // let Flat1 = NewArray.flat(2)

    // console.log(Flat1);

    // let array = [10, 20, 10, 20]

    // let flatmap = array.flatMap(item => (item === 10 ? [10, [10, 10]] : 20))

    // console.log(flatmap);
}

/* at() method */

{
    // let arry = ["data", "disk", "number", "value"]

    // let at = arry.at(4)

    // console.log(at);
}

/* join array Method */

{
    // let arry = ["data", "disk", "number", "value"]

    // let join = arry.join("\"")

    // console.log(join);

    // console.log(typeof join);
}

/* MathObject Method in Javascript */

// console.log(Math);

let Maths1 = Math.PI
console.log(Maths1);

let Maths2 = Math.sqrt(1024)

console.log(Maths2);

let Maths3 = Math.log(10)
let Maths4 = Math.log2(10)
let Maths5 = Math.log10(10)

console.log(Maths3);
console.log(Maths4);
console.log(Maths5);

// https://byjus.com/maths/logarithm-table/

let Maths6 = Math.ceil(26.47)

let Maths7 = Math.floor(26.67)

console.log(Maths6);
console.log(Maths7);

let fix = 10.476

let tofix = fix.toFixed(2)

console.log(tofix);

let Maths8 = Math.trunc(101.99)

console.log(Maths8);
let Maths9 = Math.pow(5, 3)
console.log(Maths9);