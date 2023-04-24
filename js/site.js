function getValue(){
    let fizzValue = document.getElementById('fizzValue').value;
    let buzzValue = document.getElementById('buzzValue').value;
    let stopValue = document.getElementById('stopValue').value;

    let fizzNumber = parseInt(fizzValue);
    let buzzNumber = parseInt(buzzValue);
    let stopNumber = parseInt(stopValue);

    if (Number.isInteger(fizzNumber) && Number.isInteger(buzzNumber) && Number.isInteger(stopNumber))
    {
        let numberArray = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber)
        displayFizzBuzz(numberArray);
    } else {
        //display error message
        Swal.fire({
                icon:'error',
                title: 'Oops,',
                text: 'Please enter a valid number for the start and end value'

        });
    }

}

function generateFizzBuzz(fizz, buzz, stop){
        let resultsArray = [];

    for(let number = 1; number<= stop; number = number + 1) {

        if (number % fizz == 0 && number  % buzz == 0)
            resultsArray.push('FizzBuzz');
        else if (number % buzz == 0) {
             resultsArray.push('Buzz');
        }
         else if (number % buzz == 0) {
             resultsArray.push('Buzz');
        }
        else{
            resultsArray.push(number);
        }
    }

    return resultsArray; // => [0, 1, 2, 3. ..., 100]
}

function displayFizzBuzz(numbers) {
    let results = "";

    for (let index = 0; index < numbers.length; index = index + 1) {
      let currentNumber = numbers[index];
  
      if (currentNumber % 2 == 0) {
        results += `<tr><td>${currentNumber}</td></tr>`;
      } else {
        results += `<tr><td>${currentNumber}</td></tr>`;
      }
    }

    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;

}