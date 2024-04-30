/* Javascript Function apply(), call() and bind() Method */

/* apply method */
{
    const human = {
        firstName: "john",
        lastName: "walker",
        age: 55
    }

    const person = {
        firstName: "rohit",
        lastName: "sharma"
    }

    function intro(messge, pro) {
        console.log(`${messge} My FirstName is ${this.firstName} And My LastName is ${this.lastName} ${pro} `);
    }

    // console.log(intro());

    let result = intro.apply(person["Hi", "I am Cricketer"])

    console.log(result);
}



/* call() Method */
{
    function sum(a, b) {
        return a + b
    }

    let result = sum.call(null, 10, 20)

    console.log(result);
}
{
    let human = {
        firstName: "john",
        lastName: "walker",
        age: 55
    }

    function intro(message) {
        console.log(message + this.firstName + this.lastName);
    }

    let result = intro.call(human, "hi")

    console.log(result);
}


/* bind() method */
{
    const human = {
        firstName: "john",
        lastName: "walker",
        intro: function () {
            console.log(`${this.firstName} ${this.lastName}`);
        }
    }

    const person = {
        firstName: "rohit",
        lastName: "sharma"
    }


    let result = human.intro.bind(person)

    console.log(result());
}


/* Asyncronous Function */

/*
setInterval
setTimeout
clearInterval
clearTimeout
*/

// setTimeout
// setTimeout(multi, 4000, arg1, arg2, argN...)

{
    setTimeout(() => console.log("Hello"), 5000)
    setTimeout(() => {
        console.log("Hello")
    }, 5000)
    setInterval(() => console.log("Hi"), 3000)
}

{
    function multi() {
        console.log("setTimeout");
    }

    setTimeout(multi, 4000)
    console.log("after setTimeout");
}

