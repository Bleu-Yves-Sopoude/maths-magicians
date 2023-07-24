import React from 'react';
import './App.css';

const App = () => (
  <div className="h-screen flex items-center justify-center bg-blue-600">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-0.5">
        <input
          className="col-span-4 text-right py-2 px-4 text-3xl border rounded bg-gray-700 text-white"
          type="text"
          readOnly
          placeholder="0"
        />
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          AC
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          +/-
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          %
        </button>
        <button className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          ÷
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          7
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          8
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          9
        </button>
        <button className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          x
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          4
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          5
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          6
        </button>
        <button className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          -
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          1
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          2
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          3
        </button>
        <button className="col-span-1  bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          +
        </button>
        <button className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          0
        </button>
        <button className="col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          .
        </button>
        <button className="col-span-1 bg-yellow-400 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded" type="button">
          =
        </button>
      </div>
    </div>
  </div>
);

export default App;
