
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';

function App() {
  return (
    <>
  

  <Navbar title="TEXTUTILS" About="ABOUT US"></Navbar>
  <div className='container my-3 '>
  <Textform heading="Enter Your Text"></Textform>
  </div>
  
    </>
  );
}

export default App;
