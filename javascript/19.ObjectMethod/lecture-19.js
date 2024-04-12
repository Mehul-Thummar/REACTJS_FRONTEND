/* Javascript Object Method */

/* isForzen Method */

{
    let obj = { key1: 56, key2: 65, key3: 98, key4: 100 }

    obj.key1 = 20

    delete obj.key1

    Object.freeze(obj)

    obj.key1 = 40

    delete obj.key2

    let Data = Object.isFrozen(obj)

    console.log(obj);

    console.log(Data);
}


/* Object.seal() Method */
{
    let obj = { key1: 56, key2: 65, key3: 98, key4: 100 }

    Object.seal(obj)

    delete obj.key1

    console.log(obj);

    let Data = Object.isSealed(obj)
    console.log(Data);
}


/* hasOwn () Method */
{
    let obj = { key1: "javascript", key2: "html", key3: "bootstrap", key4: "nodejs" }

    let Data = Object.hasOwn(obj, "html")

    console.log(Data);

    console.log(obj.hasOwnProperty("key1"));
}


/* Object.entries() Method */

{
    let obj = { key1: "javascript", key2: "html", key3: "bootstrap", key4: "nodejs" }

    for (const [key, value] of Object.entries(obj)) {
        console.log(`This Object Key are ${key} and It's Value is ${value}`);
    }

    let array = [12, 24, 15, 68, 69]

    for (const value of array) {
        console.log(`${value}`);
    }
}


/* Object.keys() */

{
    let obj = { key1: "javascript", key2: "html", key3: "bootstrap", key4: "nodejs" }

    let Data = Object.keys(obj)

    console.log(Data);
}

/* Object.values() Method */

{
    let obj = { key1: "javascript", key2: "html", key3: "bootstrap", key4: "nodejs" }

    let Data = Object.values(obj)

    console.log(Data);
}

/* Object.groupby() Method */

{
    let Grosserys = [
        { name: "potato", type: "vegetable", price: 40, quntity: 25 },
        { name: "ladyfingures", type: "vegetable", price: 20, quntity: 30 },
        { name: "mango", type: "fruit", price: 1200, quntity: 5 },
        { name: "orange", type: "fruit", price: 200, quntity: 0 },
        { name: "fish", type: "meat", price: 2000, quntity: 10 }
    ]
    console.log(Grosserys);

    let Data = Object.groupBy(Grosserys, ({ name }) => name)

    console.log(Data);

    let Datal = Object.groupBy(Grosserys, ({ type }) => type)

    console.log(Data1);


    function Stock({ quntity }) {
        return quntity > 10 ? "enough Stock" : "Restock"
    }

    let Data3 = Object.groupBy(Grosserys, Stock)

    console.log(Data3);
}