const sides = document.querySelectorAll(".side");
const buttonCalculateArea = document.querySelector("#calculate-area");
const outputMessage = document.querySelector("#output-message");

function findPerimeter(sides) {
    let sum = 0;
    for(let side of sides) {
        sum = sum + Number(side.value);
    }
    return sum;
};

function substract(perimeter, side) {
    const sub = perimeter - side;
    // console.log("sub", sub );
    return sub;
};



function calculateArea() {
    const perimeter = findPerimeter(sides)
    let area = 0;
    let temp = 1
    for(let side of sides) {
        temp = Math.abs(temp*substract(perimeter/2, Number(side.value)));
        // console.log("temp", temp);
    }
    if(temp > 0) {
        area = Math.pow(((perimeter/2)*temp), 0.5);
    }
    // console.log(area);
    outputMessage.innerText = `The area of your triangle is ${area.toFixed(2)}`;
};



buttonCalculateArea.addEventListener("click", calculateArea);