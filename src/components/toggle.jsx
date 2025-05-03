import { useState } from 'react';

function Togle() {
  const [toggle, setToggle] = useState('ON');

  return (
    <div className='text-xl flex flex-col justify-center items-center'>
      
      <h1 className='mt-8 font-bold text-center'>{toggle}</h1>

      <button className='bg-blue-700 py-1 px-2  rounded-2xl my-4 text-white' onClick={() => setToggle(toggle === 'ON' ? 'OFF' : 'ON')}>
        Toggle
      </button>
    </div>
  );
}

export default Togle;