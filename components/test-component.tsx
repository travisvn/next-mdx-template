'use client'

import { useState } from 'react'

const TestComponent = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        Here it is! Count {count}

        <button
          onClick={() => setCount(b => b + 1)}
          className="px-3 py-2 rounded-md bg-slate-700/30 hover:bg-slate-700/40"
        >
          Increment
        </button>
      </div>
    </>
  )
}

export default TestComponent