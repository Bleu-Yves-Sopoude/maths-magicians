// src/App.js
import React from 'react';
import Calculator from './Calculator';
 // Make sure to use the correct path to Calculator.js
 export default function NavBar() {
  return (
<div className="shadow bg-white">
  <div class="h-16 mx-auto px-5 flex items-center justify-between">
      <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Math Magicians</a>

      <ul class="flex items-center gap-5">
        <li><a class="hover:text-cyan-500 transition-colors" href="">Home </a></li>
       
        
         <li> <a class="hover:text-cyan-500 transition-colors" href="">Quotes</a></li>
      </ul>
  </div>
</div>
  );
}