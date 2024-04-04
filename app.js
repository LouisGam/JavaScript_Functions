console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
 //Exercise 1

 function printOdds(count); {
    for (i=0;i<=10;i++){
        printOdds(function(count){
            $(".test").html(i);
        },10000);
        console.log (printOdds);
      }
      ​
 }


 //Exercise 2 Section

 function checkAge( userName, age) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you are 16 years old.`;
    if (age <16) {
        console.log(belowSixteen);
    } else if  (age >=16) { 
        console.log(aboveSixteen);
    } else { 
        console.log("Invalid age");
    }  
    }

checkAge("Clark Kent");

// Exercise 3
function getQuadrant(x, y) {
if (x == undefined || y == undefined) {
console.log("Invalid (x, y) location");
return null;
}

if (x == 0 && y== 0 ) {
    console.log("Origin Point");
} else if (x == 0) {
    console.log("Y-axis");
} else if (y == 0) {
    console.log("X-axis");
} else if ( x > 0 && y > 0) {
    console.log("Quadrant One");
} else if ( x < 0 && y > 0) {
    console.log("Quadrant Two");
} else if ( x < 0 && y < 0) {
    console.log("Quadrant Three");
} else if ( x > 0 && y < 0) {
    console.log("Quadrant Four");
}
}

// Exercise 4

function getTriangleType(a, b, c,) {
    if (a + b < c || b + c < a || a + c < b) {
        
        return "Ivalid triangle length";
    }

    if ( a == b && b == c) {
        return "Equilateral";
    } else if (a == b || b == c || a == c)  {

        return "Isosceles";
        
        

    } else {

        return "Scalene";
    }

    
}

console.log(getTriangleType(3, 4, 5));
console.log(getTriangleType(4, 1, 2));
console.log(getTriangleType(3, 3, 3));

