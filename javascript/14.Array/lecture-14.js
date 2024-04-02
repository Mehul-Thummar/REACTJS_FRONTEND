/* Javascript Array And It's Method */

{
    let array = [10, 50, 89, 101, 452]

    array[0] = 30

    console.log(array);

    let Newarray = new Array(10, 50, 89, 101, 452)

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);

    console.log(typeof array);

    console.log(typeof Newarray);
}

{
    let array = [10]

    let Newarray = new Array(10)

    console.log(array);

    console.log(Newarray);

    console.log(array.length);

    console.log(Newarray.length);
}

{
    let array = ["Javascript", 46, false, undefined, null]

    console.log(array);

    console.log(array.length);

    console.log(array[0]);

    /* Array push Method */

    array.push("Html")
    array.push("Css")

    console.log(array);

    /* Array unshift Method */

    array.unshift("Sass")
    array.unshift("TailwindCss")

    console.log(array);

    /* Array pop Method */

    array.pop()
    array.pop()

    console.log(array);

    /* Array shift Method */

    array.shift()
    array.shift()

    console.log(array);

    /* Array toString Method */

    let string = array.toString()

    console.log(string);

    /* Array reverce Method */

    let Reverce = array.reverse()

    console.log(Reverce);

    /*Array for Each method */

    array.forEach((item) => console.log(item))

    /*Array concat Method */

    {
        let array1 = [12, 45, 787]
        let array2 = [true, false]
        let array3 = ["reactjs", "nodejs"]

        let Newarray = array1.concat(array2, array3)

        console.log(Newarray);
    }
}

