let numberOfSolutions;
let result = [];

const button = document.getElementById("submit-button");
let answer = document.getElementById("result");

function quadraticFormulaSolver() {
    let a = parseInt(document.getElementById("value-of-a").value);
    let b = parseInt(document.getElementById("value-of-b").value);
    let c = parseInt(document.getElementById("value-of-c").value);

    let solution1;
    let solution2;
    let discriminant;

    discriminant = Math.sqrt(b * b - (4 * a * c));
    solution1 = (-b + discriminant) / (2 * a);
    solution2 = (-b - discriminant) / (2 * a);
    console.log(solution1);
    console.log(solution2);
   
   // identifying the possible cases

    if (Number.isNaN(solution1) && Number.isNaN(solution2)) {
        numberOfSolutions = 0;
        result = [];
        answer.innerHTML = "This equation has no solutions.";
    }
    else if (solution1 === solution2) {
        numberOfSolutions = 1;
        result.push(solution1);
        answer.innerHTML = `This equation has ${numberOfSolutions} solution, which is ${result}`;
    }
    else if (Number.isNaN(solution1)) {
        numberOfSolutions = 1;
        result.push(solution2);
        answer.innerHTML = `This equation has ${numberOfSolutions} solution, which is ${result}`;
    }
    else if (Number.isNaN(solution2)) {
        numberOfSolutions = 1;
        result.push(solution1);
        answer.innerHTML = `This equation has ${numberOfSolutions} solution. The 2 roots have the same value: ${result}`;
    }
    else {
        numberOfSolutions = 2;
        if (solution1 > solution2) {
            result.push(solution1);
            result.push(solution2);
        }
        else {
            result.push(solution2);
            result.push(solution1);
        }
        answer.innerHTML = `This equation has ${numberOfSolutions} solutions, which are ${result}`;
    }
};

button.onclick = function () {
    quadraticFormulaSolver();
};
