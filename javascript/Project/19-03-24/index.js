/* 1. Check if a number is positive, negative, or zero */

let num = 0;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

/* 2. Check if a person is eligible to vote */

let age = 18;
let voterID = "yes";

if (age >= 18) {
    if (voterID >= "yes") {
        console.log("You are eligible for vote");
    }
    else {
        console.log("You are not eligible to vote because you have no ID ");
    }
}
else {
    console.log("You are not eligible for vote, due age");
}


/* 3. Determine the largest of three numbers */

let a = 15;
let b = 10;
let c = 20;

if (a >= b) {
    if (a >= c)
        console.log("A is the largest number.");
    else
        console.log("C is the largest number.");
}
else {
    if (b >= c)
        console.log("B is the largest number.");
    else
        console.log("C is the largest number.");
}


/* 4. Check if a year is a leap year */

let year = 2024    ;

if (year % 4 == 0) {
    console.log("Yes, It is a leap year.");
}
else {
    console.log("No, It is Not a leap year.");
}


/* 5. Determine the grade based on a score */

let marks = 50;

if (marks <= 34) {
    console.log("You are fail");
}
else {
    if (marks >= 95) {
        console.log("Yot get Grade = A");
    }
    else if (marks >= 80) {
        console.log("Yot get Grade = B");
    }
    else if (marks >= 60) {
        console.log("Yot get Grade = C");
    }
    else if (marks >= 40) {
        console.log("Yot get Grade = D");
    }
    else if (marks >= 35) {
        console.log("Yot get Grade = E");
    }
}
