
import { useState } from 'react'
import './App.css'

function App() {
const [show, setShow] = useState(false)
 //show true nki false hobe seita useState ar modde dawya thakbe
 //jehetu useSate er modde false diye initialize korechi, tai prothome menu ta show hobe na
 //setShow ta show ar update korar jonno use hoyeche , update value ta setshow te thakbe
const handleBtn=()=>{
  setShow(!show)
  //ar mane holo jodi show na thake tahole 
  //setShow true kore dibe, ar jodi show thake tahole setShow false kore dibe
}

  return (
<>
<div className="">
  <div className="bg-teal-300">
   {/* Desktop menu */}
    <div>
      <ul className="lg:flex lg:justify-center lg:items-center gap-x-5 lg:block hidden">
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>Service</li>
        <li>Desktop</li>
      </ul>
    </div>
    {/* Desktop menu  */}
    {/* mobile menu */}
     <div>
      <p className="bg-red-300 p-5 px-2 lg:hidden" onClick={handleBtn}>click</p>
      {/* onClick er modde handleBtn function ta call korbe */}
      {/* {show && 
      ar modde show true holei ul ta show hobe aita dite hobe*/}
     
    { show && 
      <ul className="lg:hidden">
        
        <li>Home</li>
        <li>About</li>
        <li>contact</li>
        <li>Service</li>
        <li>Desktop</li>
      </ul>}
      {/* aita akta condition {show && <component/>} aita disi deikha e amon hoise j ture hole false hobe false hole true hobe jodi aita na ditam tahole js a if else condition dite hoto*/}
    </div>
    {/* mobile menu */}
  </div>
</div>

</>
  )
}

export default App
