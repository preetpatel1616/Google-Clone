import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/search/:input" element={<SearchPage/>}/>
    ``</Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
