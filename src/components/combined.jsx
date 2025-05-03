import React, {useEffect, useState} from 'react';
function SuperCounter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      console.log(count);
      document.title =`You Clicked ${count} times`;

    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button className='bg-amber-50 ' onClick={() => setCount(count + 1)}>+1</button>
        {count === 5 && <p>🎉 You reached 5! 🎉</p>}
      </div>
    );
  }
export default SuperCounter;  