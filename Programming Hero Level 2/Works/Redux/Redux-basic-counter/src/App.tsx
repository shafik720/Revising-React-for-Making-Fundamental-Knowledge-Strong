import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='my-5 flex justify-center items-center gap-4'>
        <button className='border border-4 px-5 py-2 rounded-md bg-slate-700 text-white '>Decrement</button>
        <h2 className='text-4xl'>0</h2>
        <button className='border border-4 px-5 py-2 rounded-md bg-purple-900 text-white'>Increment</button>
      </div>
    </>
  )
}

export default App
