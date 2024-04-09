/* Javascript String Method */

/* String toUpperCase And toLowerCase Method */

{
    let str = "Dog is very danger and dog is honest but Cat is very cute and cat is lazy!"

    let UpperStr = str.toUpperCase()

    let LowerStr = str.toLowerCase()

    console.log(UpperStr);

    console.log(LowerStr);
}

/* String Slice And Substring Method */

{
    let str = "this is morning upon us!"

    let SliceStr = str.slice(10)
    // let SliceStr = str.slice(0)
    // let SliceStr = str.slice(-10)
    let SliceStr1 = str.slice(10, 22)
    let SliceStr2 = str.slice(10 - 5)

    console.log(SliceStr1);
    console.log(SliceStr2);

    let Substr = str.substring(10, -20)
    let Substr1 = str.slice(10 - 5)

    console.log(Substr);
    console.log(Substr1);
}

/* Javascript replace And replaceAll Method */

/* 

repalce (Regx) 
replaceAll(Regx) 

*/

{
    let str = "Dog is very danger and Dog is dog honest but Cat is very cute and cat is lazy!"
    let replaceStr = str.replace("Dog", "Cat")
    // let replaceStr = str.replace("dog", "Cat")
    // let replaceStr = str.replace(/dog/gi, "Cat")
    console.log(replaceStr);
    let replaceAll = str.replaceAll("Dog", "Cat")
    // let replaceAll = str.replaceAll(/Dog/gi, "Cat")
    console.log(replaceAll);
}

/* Javascript CharCodeAt() */

{
    let str = "Hello";
    let CharStr = str.charCodeAt(10)
    let CharStr2 = str.charCodeAt(2)
    let repeatStr = str.repeat(2)
    console.log(CharStr);
    console.log(CharStr2);
    console.log(repeatStr);
}