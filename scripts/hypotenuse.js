const base = document.querySelector("#base");
const height = document.querySelector("#height");
const buttonCalculateHypotenuse = document.querySelector("#calculate-hypotenuse");
const outputMessage = document.querySelector("#output-message");


function calculateHypotenuse () {
    const hypotenuse = Number(base.value) + Number(height.value);
    outputMessage.innerText = `The hypotenuse of this triangle is: ${hypotenuse}`;
}


buttonCalculateHypotenuse.addEventListener("click", calculateHypotenuse);