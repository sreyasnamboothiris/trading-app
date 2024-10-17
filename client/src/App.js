
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestApi from './components/TestApi';
import Marketfeed from './Pages/marketfeed/Marketfeed';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<TestApi />} />
          <Route path='/marketfeed' element={<Marketfeed/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
