import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Addsub from './components/Addsub';
import Viewsub from './components/Viewsub';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchsub from './components/Searchsub';
import Deletesub from './components/Deletesub';

function App() {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addsub/>}/>
        <Route path='view' element={<Viewsub/>}/>
        <Route path='search' element={<Searchsub/>}/>
        <Route path='delete' element={< Deletesub/>}/>
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
