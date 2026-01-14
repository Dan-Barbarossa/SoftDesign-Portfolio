import './css/App.css';
import Favorites from './pages/Favorites'
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom';
import {MovieProvider} from "./contexts/MovieContext";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
      <MovieProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />

        </Routes>
      </main>

    </MovieProvider>
  );
}

export default App;
