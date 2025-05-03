import React, { useState } from 'react';

function Toggler() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Toggler: {toggle ? '0(ON)' : '1(OFF)'}</h2>
    
      <button
        className={`py-2 mb-4 px-4 rounded text-xl ${
          toggle ? 'bg-blue-500' : 'bg-gray-500'
        } text-white mt-4`}
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
    </div>
  );
}

export default Toggler;