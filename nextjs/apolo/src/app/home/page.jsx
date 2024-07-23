'use client';

import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function Inc() {
    setCount(function (prevCount) {
      return (prevCount + 1);
    });
  }

  function Dec() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount - 1);
      } else {
        return (prevCount = 0);
      }
    });
  }


  function Res() {
    setCount(function (prevCount) {
      return (prevCount = 0);
    });
  }

  return (
    <div className='flex justify-center items-center h-96'>
      <div className='mt-10 border-4 border-gray-400'>
        <div className=''>
          <h1 className=' border text-center border-black px-2 py-1 bg-green-700 text-white textxl4 font-bold mx-28'>{count}</h1>
          <div className='flex'>
            <button className='border border-black px-5 py-1 bg-green-300 font-bold mr-20' onClick={Inc}>Increment</button>
            <button className='flex justify-center border border-black px-5 py-1 bg-green-300 font-bold mr-20' onClick={Res}>Reset</button>
            <button className='border border-black px-5 py-1 bg-green-300 font-bold ' onClick={Dec}>Decrement</button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}