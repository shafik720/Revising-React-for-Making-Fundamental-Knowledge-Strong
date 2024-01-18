import { useState } from 'react'
import './App.css'

function App() {
  // using object inside usestate
  const [user, setUser] = useState({
    name : 'Anonymouse',
    age : 21,
    profession : 'toto'
  })

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }

  return (
    <div className='text-center w-screen ' >
      <h2 className='text-red-700 text-4xl '>Name : {user.name}</h2>
      <h2 className='text-black-700 text-4xl '>Age : {user.age}</h2>
      <h2 className='text-black-700 text-4xl '>Profession : {user.profession}</h2>
      <form className='my-5' onSubmit={handleSubmit}>
        <input className='border-2' type="text" name="name" id="" />
        <input className='border-2 ms-3' type="text" name="age" id="" />
        <button className='btn-sm btn ms-3 btn-primary' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
