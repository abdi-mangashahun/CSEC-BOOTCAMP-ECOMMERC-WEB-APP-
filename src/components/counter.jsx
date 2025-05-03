import React, { useEffect, useState } from 'react';


function Counter({ initialValue, step }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  useEffect(()=>
{
console.log(count);
},[count]
);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Counter: {count}</h2>
      <p className="text-lg">{count % 2 === 0 ? 'Even' : 'Odd'}</p>
      <div className="flex gap-4 justify-center mt-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded text-xl"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded text-xl"
          onClick={decrement}
        >
          Decrement
        </button>
       
      </div>
      <button className='bg-sky-300 text-white py-1 px-1 rounded text-xl' onClick={()=> setCount(initialValue)}>Reset</button>
    </div>
  );
}

export default Counter;