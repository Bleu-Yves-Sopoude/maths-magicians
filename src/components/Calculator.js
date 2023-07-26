import React from 'react';
import calculate from '../logic/calculate';
import { useState } from 'react';




const Calculator = () => {

  const [state, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClickEvent = (buttonName) => {
    const newState = calculate(state, buttonName);
    setCalculatorData(newState);
  };

  
  return(
  <div className="h-screen flex items-center justify-center bg-blue-600">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-0.5">
      <div
      className="col-span-4 text-right py-2 px-4 text-3xl border rounded bg-gray-700 text-white"
      type="text"
      readOnly> {state.next || state.total || '0'}</div>
    
        <button onClick={() => handleClickEvent('AC')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          AC
        </button>
        <button  onClick={() => handleClickEvent('+/-')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          +/-
        </button>
        <button onClick={() => handleClickEvent('%')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          %
        </button>
        <button onClick={() => handleClickEvent('÷')} className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          ÷
        </button>
        <button onClick={() => handleClickEvent('7')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          7
        </button>
        <button onClick={() => handleClickEvent('8')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          8
        </button>
        <button onClick={() => handleClickEvent('9')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          9
        </button>
        <button onClick={() => handleClickEvent('x')} className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          x
        </button>
        <button onClick={() => handleClickEvent('4')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          4
        </button>
        <button onClick={() => handleClickEvent('5')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          5
        </button>
        <button onClick={() => handleClickEvent('6')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          6
        </button>
        <button onClick={() => handleClickEvent('-')} className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          -
        </button>
        <button onClick={() => handleClickEvent('1')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          1
        </button>
        <button onClick={() => handleClickEvent('2')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          2
        </button>
        <button onClick={() => handleClickEvent('3')}className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          3
        </button>
        <button onClick={() => handleClickEvent('+')} onClick={() => handleClickEvent('+')} className="col-span-1  bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          +
        </button>
        <button onClick={() => handleClickEvent('0')} className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          0
        </button>
        <button onClick={() => handleClickEvent('.')} className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          .
        </button>
        <button onClick={() => handleClickEvent('=')}className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          =
        </button>
      </div>
    </div>
  </div>
);
  };
export default Calculator;
