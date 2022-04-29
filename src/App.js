import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/AppBar';
import Tour from './pages/Tour';

function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:id' element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
