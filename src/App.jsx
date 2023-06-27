import { useState } from 'react'
//import './App.css'
import styles from './style'
import React from 'react'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)
  //const styles = styles

  return (
    <div className='bg-blue-950 w-full overflow-hidden'>
      <div className='sm:mx-16 mx-6, flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>
      
    </div>
  );
}

export default App
