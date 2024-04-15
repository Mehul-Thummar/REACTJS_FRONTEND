/* Function as Constructor */

{
    function sum() {

    }
    const sum = () => { }

    const result = new Function("a", "b", "return a+b")
    console.log(result(10, 20));

}

/*Function.length */

{
    function greet(a, b, c, d, e) {
    }

    console.log(greet.length);
}


/* Function.toStirng()*/

{
    function sum(a, b) {
        return a * b
    }
    console.log(sum.toString());
}


/* Function.name()*/

{
    const sum = () => { }

    console.log(sum.name());

    const name = function () { }

    console.log(name.name);
}


/* Function apply Method */

{
    function multi(a, b, c) {
        return a * b * c

    }

    let result = multi.apply(null, [10, 10, 20])

    console.log(multi(10, 10));
    console.log(result);

    const max = Math.max.apply(null, [10, 20, 30, 40, 50])
    const min = Math.min.apply(null, [10, 20, 30, 40, 50])

    console.log(max);

    console.log(min);

}

/* apply arg with loop */

{
    let num = [10, 20]
    function sum() {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }

    let result = sum.apply(null, num)

    console.log(result);
}


/* Array Method */

{
    let num1 = [10, 20, 30, 40]

    let num2 = [50, 60, 70, 80]

    console.log(num1.concat(num2));

    let result = num1.push.apply(num1, num2)

    console.log(result);

    console.log(num1);

    let result1 = num1.push(...num2)

    console.log(result1);

    console.log(num1);
}