let first_Operand = "";
let second_Operand = "";
isOperatorEntered = false;
let operator = "";
let finalResult;

function operatorEntered(enteredText) {
    isOperatorEntered = true;
    operator = enteredText;
    document.getElementById('result').value = enteredText;
}

function resetValues() {
    first_Operand = "";
    second_Operand = "";
    isOperatorEntered = false;
    finalResult = "";
}

function onButtonClick(event, action='operands') {
    debugger
    let enteredText = (event.type === 'keyup') ? event.key : event.target.textContent;
    switch (action) {
        case 'clear':
            document.getElementById('result').value = "";
            resetValues();
            break;
        case 'backspace':
            if(first_Operand != "" && !isOperatorEntered) {
                first_Operand = first_Operand.slice(0, first_Operand.length-1);
                document.getElementById('result').value = first_Operand;
            }
            if(second_Operand != "" && isOperatorEntered) {
                second_Operand = second_Operand.slice(0, second_Operand.length-1);
                document.getElementById('result').value = second_Operand;
            }
            break;
        case 'equal':
            if(operator === '+') {
                finalResult = (+first_Operand) + (+second_Operand);
            }
            if(operator === '-') {
                finalResult = (+first_Operand) - (+second_Operand);
            }
            if(operator === '*') {
                finalResult = (+first_Operand) * (+second_Operand);
            }
            if(operator === '/') {
                finalResult = (+first_Operand) / (+second_Operand);
            }
            document.getElementById('result').value = finalResult;
            // resetValues();
            first_Operand = finalResult.toString();
            second_Operand = "";
            isOperatorEntered = false;
            finalResult = "";
            break;
            case 'Enter':
                if(operator === '+') {
                    finalResult = (+first_Operand) + (+second_Operand);
                }
                if(operator === '-') {
                    finalResult = (+first_Operand) - (+second_Operand);
                }
                if(operator === '*') {
                    finalResult = (+first_Operand) * (+second_Operand);
                }
                if(operator === '/') {
                    finalResult = (+first_Operand) / (+second_Operand);
                }
                document.getElementById('result').value = finalResult;
                // resetValues();
                first_Operand = finalResult.toString();
                second_Operand = "";
                isOperatorEntered = false;
                finalResult = "";
                break;
            
            case 'dot':
            if(!isOperatorEntered) {
                first_Operand = first_Operand.concat(enteredText);
                    document.getElementById('result').value = first_Operand;
            } else {
                second_Operand = second_Operand.concat(enteredText);
                    document.getElementById('result').value = second_Operand;
            }
            break;
        case 'add':
            operatorEntered(enteredText);
            break;
        case 'subtract':
            operatorEntered(enteredText);
            break;
        case 'division':
            operatorEntered(enteredText);
            break;
        case 'multiply':
            operatorEntered(enteredText);
            break;
        case 'operands':
            if(!isOperatorEntered) {
                first_Operand = first_Operand.concat(enteredText);
                if(!(event.type === 'keyup')) {
                    document.getElementById('result').value = first_Operand;
                }
            } else {
                second_Operand = second_Operand.concat(enteredText);
                if(!(event.type === 'keyup')) {
                    document.getElementById('result').value = second_Operand;
                }
            }
            
            break;
        default:
            break;
    }
}

function createDivElement(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
  }

  function createButton(className, idAttrValue, action) {
    const button = document.createElement('button');
    button.className = className;
    button.id = idAttrValue;
    button.addEventListener('click', (event) => {
      onButtonClick(event, action)
    })
    return button
  }

  const main_div = createDivElement('main');
  const container_div = createDivElement('container');
  const row_div = createDivElement('row');
  const column_div = createDivElement('col-lg-12 col-md-6');

  const header = document.createElement('h1');
  header.id = "title";
  header.innerHTML = "Calculator Task";

  const paragraph = document.createElement('p');
  paragraph.id = 'description';
  paragraph.innerHTML = 'This is a simple Calculator to perform mathematical operations.';

  const calculator_div = createDivElement('calculator');

  const input = document.createElement('input');
  input.id = 'result';
  input.type = 'text';

  input.addEventListener('keyup', (event) => {
    let action = 'operands';
    if(event.key === '+') action = 'add';
    if(event.key === '-') action = 'subtract'
    if(event.key === '*') action = 'multiply'
    if(event.key === '/') action = 'division'
    if(event.key === '.') action = 'dot'
    if(event.key === 'Enter') action = 'equal'
    if(event.key === 'Backspace') action = 'backspace'
    onButtonClick(event, action)
  })

  const operators = createDivElement('row operators');

  const clear_button_div = createDivElement('col-lg-3 cells');
  const clear_button = createButton('btn btn-secondary', 'clear', 'clear')
  clear_button.innerHTML = "C";
  const backspace_button_div = createDivElement('col-lg-3 cells');
  const backspace_button = createButton('btn btn-secondary', 'backspace', 'backspace')
  const icon = document.createElement('i');
  icon.className = 'fa fa-long-arrow-left';
  const dot_button_div = createDivElement('col-lg-3 cells');
  const dot_button = createButton('btn btn-secondary', 'dot', 'dot');
  dot_button.innerHTML = "."
  const multiply_button_div = createDivElement('col-lg-3 cells');
  const multiply_button = createButton('btn btn-secondary', 'multiply', 'multiply')
  multiply_button.innerHTML = "*";
  const seven_button_div = createDivElement('col-lg-3 cells');
  const seven_button = createButton('btn btn-secondary', '7');
  seven_button.innerHTML = "7";
  const eight_button_div = createDivElement('col-lg-3 cells');
  const eight_button = createButton('btn btn-secondary', '8')
  eight_button.innerHTML = "8";
  const nine_button_div = createDivElement('col-lg-3 cells');
  const nine_button = createButton('btn btn-secondary', '9')
  nine_button.innerHTML = "9";
  const division_button_div = createDivElement('col-lg-3 cells');
  const division_button = createButton('btn btn-secondary', 'division', 'division')
  division_button.innerHTML = "/";
  const four_button_div = createDivElement('col-lg-3 cells');
  const four_button = createButton('btn btn-secondary', '4')
  four_button.innerHTML = "4";
  const five_button_div = createDivElement('col-lg-3 cells');
  const five_button = createButton('btn btn-secondary', '5')
  five_button.innerHTML = "5";
  const six_button_div = createDivElement('col-lg-3 cells');
  const six_button = createButton('btn btn-secondary', '6')
  six_button.innerHTML = "6";
  const subtract_button_div = createDivElement('col-lg-3 cells');
  const subtract_button = createButton('btn btn-secondary', 'subtract', 'subtract')
  subtract_button.innerHTML = "-";
  const one_button_div = createDivElement('col-lg-3 cells');
  const one_button = createButton('btn btn-secondary', '1')
  one_button.innerHTML = "1";
  const two_button_div = createDivElement('col-lg-3 cells');
  const two_button = createButton('btn btn-secondary', '2')
  two_button.innerHTML = "2";
  const three_button_div = createDivElement('col-lg-3 cells');
  const three_button = createButton('btn btn-secondary', '3')
  three_button.innerHTML = "3";
  const add_button_div = createDivElement('col-lg-3 cells');
  const add_button = createButton('btn btn-secondary', 'add', 'add')
  add_button.innerHTML = "+";
  const zero_button_div = createDivElement('col-lg-3 cells');
  const zero_button = createButton('btn btn-secondary', '0')
  zero_button.innerHTML = "0";
  const doubleZero_button_div = createDivElement('col-lg-3 cells');
  const doubleZero_button = createButton('btn btn-secondary', '00')
  doubleZero_button.innerHTML = "00";
  const equal_button_div = createDivElement('col-lg-6 cells');
  const equal_button = createButton('btn btn-primary', 'equal', 'equal')
  equal_button.innerHTML = "=";


  clear_button_div.append(clear_button);
  backspace_button.append(icon)
  backspace_button_div.append(backspace_button);
  dot_button_div.append(dot_button);
  multiply_button_div.append(multiply_button);
  seven_button_div.append(seven_button);
  eight_button_div.append(eight_button);
  nine_button_div.append(nine_button);
  division_button_div.append(division_button);
  four_button_div.append(four_button);
  five_button_div.append(five_button);
  six_button_div.append(six_button);
  subtract_button_div.append(subtract_button);
  one_button_div.append(one_button);
  two_button_div.append(two_button);
  three_button_div.append(three_button);
  add_button_div.append(add_button);
  zero_button_div.append(zero_button);
  doubleZero_button_div.append(doubleZero_button);
  equal_button_div.append(equal_button)

  operators.append(clear_button_div, backspace_button_div, dot_button_div, multiply_button_div,
    seven_button_div, eight_button_div, nine_button_div, division_button_div, four_button_div, five_button_div, six_button_div,
    subtract_button_div, one_button_div, two_button_div, three_button_div, add_button_div,
    zero_button_div, doubleZero_button_div, equal_button_div
  );

  calculator_div.append(input, operators);
  column_div.append(header, paragraph, calculator_div);
  row_div.append(column_div);
  container_div.append(row_div);
  main_div.append(container_div);

  document.body.append(main_div)