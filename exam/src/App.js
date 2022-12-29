import './App.css';
import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PageTranslate from './pages/PageTranslate/PageTranslate';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/translator" />} />
                    <Route path="/translator" element={<PageTranslate />} />
                    <Route path="/history" element={<></>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
