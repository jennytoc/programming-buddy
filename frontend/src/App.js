import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/NavBar';

// Pages
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import MembersPage from './pages/MembersPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/forum" element={ <ForumPage/> } />
          <Route path="/members" element={ <MembersPage/> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
