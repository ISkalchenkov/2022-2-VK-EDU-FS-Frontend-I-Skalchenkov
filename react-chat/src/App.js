import './App.css';
import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';
import PagePublicChat from './pages/PageChat/PagePublicChat';
import PageProfile from './pages/PageProfile/PageProfile';
import PageLogin from './pages/PageLogin/PageLogin';


function if_allowed(Page) {
    let req = new XMLHttpRequest();
    req.open('GET', '/is_logged_in/', false); // Вьюха возвращает {'logged_in': true}, если пользователь авторизован
    req.send();

    const response = JSON.parse(req.responseText);
    if (response.logged_in && Page === PageLogin) {
        return <Navigate to="/chats" />
    }
    if (!response.logged_in && Page === PageLogin) {
        return <PageLogin />
    }
    if (response.logged_in) {
        return <Page />
    }
    return <Navigate to="/login" />
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navigate to="/chats" />} />
                        <Route path="/chats" element={if_allowed(PageChatList)} />
                        <Route path="/chats/:id" element={if_allowed(PageChat)} />
                        <Route path="/public_chat" element={if_allowed(PagePublicChat)} />
                        <Route path="/profile" element={if_allowed(PageProfile)}/>
                        <Route path="/login" element={if_allowed(PageLogin)}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
