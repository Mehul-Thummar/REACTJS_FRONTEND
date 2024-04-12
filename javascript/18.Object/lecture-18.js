/* Javascript Object And It's Method */

{
    const obj = { id: 1, firstName: "John", lastName: "doue", gender: "male", age: 25 }
    const Obj = new Object()

    console.log(obj);
    console.log(Obj);

    let Data = obj.firstName

    let Datal = obj["id"]
    console.log(Data);
    console.log(Data1);

    obj.address = "united states"

    console.log(obj);

    obj.id = 2

    console.log(obj);
}


/* Object Method :- Object.assign() Method */

{
    const obj = { id: 1, firstName: "John", lastName: "doue", gender: "male", age: 25 }

    const num = { key1: 56, key2: 23, key3: 36, key4: 100 }

    let Assign = Object.assign(obj, num)

    console.log(Assign);

    console.log(obj);

    let Assign1 = Object.assign({}, num, obj)

    console.log(Assign1);
}


/* Object Method :- Object.freeze() Method */

{
    const obj = { id: 1, firstName: "John", lastName: "doue", gender: "male", age: 25 }

    obj.id = 10;

    console.log(obj);

    let data = Object.freeze(obj)

    console.log(obj);

    obj.id = 30

    console.log(obj);

    obj.key1 = 100

    console.log(obj);
}

/* Object Method: Object.create() Method */


{
    const obj = {
        id: 1, firstName: "John", lastName: "doue", gender: "male", age: 25,
        NewObj: function () {
            console.log(`my first name is ${this.firstName}and i am ${this.occupation}`);
        }
    }

    let NewObject = Object.create(obj)

    NewObject.occupation = "Developer"


    console.log(NewObject.occupation);

    console.log(NewObject.NewObj());

    console.log(obj);
}

