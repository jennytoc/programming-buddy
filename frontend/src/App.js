import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

// Components


// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <HashRouter>
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
