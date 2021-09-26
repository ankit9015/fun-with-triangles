const angles = document.querySelectorAll(".angle");
const buttonIsTriangle = document.querySelector("#is-triangle");
const outputMessage = document.querySelector("#output-message");

function sumAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
};


function isTriangle() {   
    const totalAngle = sumAngles(
        Number(angles[0].value),
        Number(angles[1].value),
        Number(angles[2].value)
      ); 
    if (totalAngle === 180) {
        outputMessage.innerText = "This is a triangle.";
    } else {
        outputMessage.innerText = "This is not a triangle";
    }
};


buttonIsTriangle.addEventListener("click", isTriangle);