import './App.css';
import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';
import PagePublicChat from './pages/PageChat/PagePublicChat';
import PageProfile from './pages/PageProfile/PageProfile';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navigate to={"/chats"}/>} />
                        <Route path="/chats" element={<PageChatList />} />
                        <Route path="/chats/:id" element={<PageChat />} />
                        <Route path="/public_chat" element={<PagePublicChat />} />
                        <Route path="/profile" element={<PageProfile />}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
