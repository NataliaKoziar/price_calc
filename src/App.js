import {MUISlider} from './components/MUISlider'
import './App.scss';
import { useState } from 'react';
import { Box } from '@mui/material';

function App() {
  const[dependencies, setDependencies] = useState({storage:0, transfer:0})
   

  const handleChangeDep = ( newValue, title)=>{
    if(title == 'storage'){
      setDependencies({...dependencies, storage : newValue })
   }else{
     setDependencies({...dependencies, transfer:newValue})
   }
  }
  

  return (
    <div className="App">
      <div className='slidersBox'>
      <MUISlider title={"storage"} value={dependencies.storage} handleChangeDep={handleChangeDep}/>
      <MUISlider title={"transfer"} value={dependencies.transfer} handleChangeDep={handleChangeDep}/>
      </div>
     
    </div>
  );
}

export default App;
