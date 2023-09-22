import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import List from './components/List';
import AddList from './components/AddList';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route Component={Home} path='/'></Route>
      <Route Component={AddList} path='/addList'></Route>
      <Route Component={List} path='/list'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
