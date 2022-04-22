import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// Components
import NavBar from './components/NavBar';
import LoginBar from './components/LoginBar';

// Pages
import HomePage from './pages/HomePage';
// authenticate
import SignUpPage from './pages/authenticate/SignUpPage';
import LoginPage from './pages/authenticate/LoginPage';
// forum
import ForumPage from './pages/forum/ForumPage';
import PostListPage from './pages/forum/PostListPage';
import PostDetailsPage from './pages/forum/PostDetailsPage';
// members
import MembersPage from './pages/members/MembersPage';
import ProfilePage from './pages/members/ProfilePage';
import CreatePost from './pages/forum/CreatePost';
import EditPost from './pages/forum/EditPost';
// compiler
import IDEPage from './pages/coding/IDEPage';
import SelectIDE from './pages/coding/SelectIDE';

function App() {
  // state
  const [username, setUsername] = useState("")
  return (
    <div className="App">
      <HashRouter>
        <LoginBar username= { username } setUsername={ setUsername }/>
        <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage/> } />

          <Route path="/signup" element={ <SignUpPage /> } />
          <Route path="/login" element={ <LoginPage setUsername={ setUsername }/> } />

          <Route path="/forum" element={ <ForumPage/> } />
          <Route path="/forum/:section" element={ <PostListPage /> } />
          <Route path="/forum/:section/create-post" element={ <CreatePost username={ username } /> } />
          <Route path="/forum/:section/:postId/edit-post" element={ <EditPost username={ username } /> } />
          <Route path="/forum/:section/:postId" element={ <PostDetailsPage username={ username }/> } />

          <Route path="/members" element={ <MembersPage/> } />
          <Route path="/members/:memberId" element={ <ProfilePage/> } />

          <Route path="/compiler" element={ <SelectIDE /> } />
          <Route path="/compiler/:language/:level" element={ <IDEPage /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
