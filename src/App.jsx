import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor,setBgColor] = useState('white')
  const changeColor = () => { const colors = ['red']; 
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
  setBgColor(randomColor);
 };
 const changeColor1 = () => { const colors = ['yellow']; 
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
  setBgColor(randomColor);
 };
 const changeColor2 = () => { const colors = ['green']; 
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
  setBgColor(randomColor);
 };
 
 const changeColor3 = () => { const colors = ['blue']; 
  const randomColor = colors[Math.floor(Math.random() * colors.length)]; 
  setBgColor(randomColor);
 };
 

  return (
    <>
    <div className='head'style={{textAlign:"center", marginTop:'100px'}}>
    <h1 >List of Colorssssss</h1>
    <div className="App " style={{ backgroundColor: bgColor, height: '40vh', marginTop:'50px',width:'50%', marginLeft:'400px', border:'solid'}}>
      
         
       <button onClick={changeColor} style={{ padding: '20px 20px', fontSize: '16px', backgroundColor:'red',borderRadius:'50%'}}> 
        RED
         </button>
         <button onClick={changeColor1} style={{ padding: '20px 20px', fontSize: '16px', marginLeft:'30px',backgroundColor:'yellow',borderRadius:'50%'}}> 
        YELLOW
         </button>
         <button onClick={changeColor2} style={{ padding: '20px 20px', fontSize: '16px', marginLeft:'30px',backgroundColor:'green',borderRadius:'50%' }}> 
        GREEN
         </button>
         <button onClick={changeColor3} style={{ padding: '20px 20px', fontSize: '16px', marginLeft:'30px',backgroundColor:'blue',borderRadius:'50%' }}> 
        BLUE
         </button>
        
          </div>
          </div>
    </>
  )
}

export default App
