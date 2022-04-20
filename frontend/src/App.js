import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/NavBar';

// Pages
import HomePage from './pages/HomePage';
import ForumPage from './pages/forum/ForumPage';
import PostListPage from './pages/forum/PostListPage';
import PostDetailsPage from './pages/forum/PostDetailsPage';
import MembersPage from './pages/members/MembersPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage/> } />
          <Route path="/forum" element={ <ForumPage/> } />
          <Route path="/forum/:section" element={ <PostListPage /> } />
          <Route path="/forum/:section/:postId" element={ <PostDetailsPage /> } />
          <Route path="/members" element={ <MembersPage/> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
