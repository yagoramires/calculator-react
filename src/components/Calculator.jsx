import React, { useState } from 'react';
import './Calculator.css';

import { FaBackspace } from 'react-icons/fa';

const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [firstValue, setFirstValue] = useState();
  const [operator, setOperator] = useState();

  const handleDelete = () => {
    const str = `${inputValue}`;
    const str2 = str.substring(0, str.length - 1);
    setInputValue(Number(str2));
  };

  const handleClickNumber = (number) => {
    let str;
    if (number === '.') {
      str = `${inputValue}${number}`;
    } else {
      str = `${inputValue}${number}`;
    }
    console.log(str);

    setInputValue(Number(str));
  };

  const handleClickOperator = (button) => {
    setFirstValue(inputValue);
    setOperator(button);
    setInputValue(0);
  };

  const handleClickElevate = () => {
    setInputValue(inputValue ** 2);
  };

  const handleClickPercent = () => {
    setInputValue(inputValue / 100);
  };

  const handleCalculate = () => {
    console.log(firstValue, operator, inputValue);
    if (operator === '+') {
      setInputValue(firstValue + inputValue);
    } else if (operator === '-') {
      setInputValue(firstValue - inputValue);
    } else if (operator === '*') {
      setInputValue(firstValue * inputValue);
    } else if (operator === '/') {
      setInputValue(firstValue / inputValue);
    }
  };

  return (
    <section className='calculatorContainer'>
      <div className='calculator'>
        <input
          type='number'
          value={inputValue || ''}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className='optionsContainer'>
          <button onClick={handleClickElevate}>x^2</button>
          <button onClick={handleClickPercent}>%</button>
          <button onClick={() => handleClickOperator('/')}>/</button>
          <button onClick={handleDelete}>
            <FaBackspace />
          </button>
        </div>
        <div className='optionsContainer'>
          <button onClick={(e) => handleClickNumber(7)}>7</button>
          <button onClick={(e) => handleClickNumber(8)}>8</button>
          <button onClick={(e) => handleClickNumber(9)}>9</button>
          <button onClick={() => handleClickOperator('*')}>x</button>
        </div>
        <div className='optionsContainer'>
          <button onClick={(e) => handleClickNumber(4)}>4</button>
          <button onClick={(e) => handleClickNumber(5)}>5</button>
          <button onClick={(e) => handleClickNumber(6)}>6</button>
          <button onClick={() => handleClickOperator('-')}>-</button>
        </div>
        <div className='optionsContainer'>
          <button onClick={(e) => handleClickNumber(1)}>1</button>
          <button onClick={(e) => handleClickNumber(2)}>2</button>
          <button onClick={(e) => handleClickNumber(3)}>3</button>
          <button onClick={() => handleClickOperator('+')}>+</button>
        </div>

        <div className='optionsContainer'>
          <button
            onClick={() => {
              setInputValue(0);
            }}
          >
            C
          </button>
          <button onClick={(e) => handleClickNumber(0)}>0</button>
          <button onClick={(e) => handleClickNumber('.')}>,</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
