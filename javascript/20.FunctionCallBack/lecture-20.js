/* Javascript Object Method */

/* is() Method */

{
    let obj = [10, 20, 30, 40]

    let obj2 = [10, 20, 30, 40]

    let Is = Object.is('obj', 'obj')

    console.log(Is);

    let Is2 = Object.is('obj', 'obj2')

    console.log(Is2);

    let Is3 = Object.is([], [])

    console.log(Is3);
}

/* Object.getown PropertyNames() Method */

{
    const object1 = {
        a: 1,
        b: 2,
        c: 3,
    };
    console.log(Object.getOwnPropertyNames(object1));
    console.log(Object.keys(object1));
}


/* Object.from Entries () Method*/

{
    let obj = new Map([["option-1", 20], ["option-2", 30]])

    let DataEntries = Object.fromEntries(obj)

    console.log(DataEntries);
}


/* Object.Define Properties() Method */
{
    let object = {}

    let Props2 = Object.defineProperties(
        object, {
        obj1: {
            name: "Object1",
            value: 560
        },
        obj2: {
            value: 100
        }
    }
    )
    console.log(object);

    let obj = {
        name: "Object",
        value: 20
    }

    let Props = Object.defineProperties(obj, {})

    console.log(obj);
}

/* Object.Prototype Method */

{
    let obj = []

    let obj1 = { key1: 20, key2: 30, key3: 50, key4: 100 }

    console.log(obj1.key1);

    let DataObject = Object.create(obj1)


    console.log(DataObject.key2);

    let ProtoObject = Object.getPrototypeOf(DataObject)

    console.log(ProtoObject === obj1);
}

/* Javascript Call Back Function */

{
    // function() {}

    function sayHello() {
        console.log('Hello');
    }

    function sayHi() {
        console.log("Hi")
    }

    function sum(a, b, callback) {
        callback()
        return console.log(a + b)
    }

    console.log(sum(10, 20, sayHello));
    console.log(sum(30, 40, sayHi));
}

/* Javascript arrow Function */

{
    // function foo() {
    //     return console.log("This is basic function!");
    // }

    // foo()

    // const foo = () => { return console.log('This is Arrow Funtion'); }
    // foo()

    // const foos = () => console.log("This is Arrow Function");

    // foos()

    // const fo = a => a + a
    // console.log(fo(10));

    // const fool = (a, b) => a + b

    // console.log(fool(10, 20));
}