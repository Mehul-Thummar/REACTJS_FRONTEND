/* Given an integer n, return a counter function. 
This counter function initially returns n and then 
returns 1 more than the previous value every subsequent 
time it is called (n, n + 1, n + 2, etc). */


{
    function Counter(n) {
        let num = n;

        function counter1() {
            const currentCount = num;
            num++;
            return currentCount;
        }

        return counter1;
    }

    const Counter2 = Counter(15);
    console.log(Counter2());
    console.log(Counter2());
    console.log(Counter2());
}



/* 2. Write a function createHelloWorld. It should return a new function that always returns "Hello World". */

{
    function hello() {
        return function () {
            return "Hello World";
        };
    }

    let helloWorld = hello();

    console.log(helloWorld());
}
