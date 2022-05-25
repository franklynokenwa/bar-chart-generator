import DataRange from './components/DataRange';
import Form from './components/Form';
import BarChart from './components/BarChart';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/global.css'
import './styles/App.module.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/chart' element={<BarChart/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
