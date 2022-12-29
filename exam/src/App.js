import './App.css';
import React from 'react';
import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import PageTranslate from './pages/PageTranslate/PageTranslate';
import PageHistory from './pages/PageHistory/PageHistory';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Navigate to="/translate" />} />
                    <Route path="/translate" element={<PageTranslate />} />
                    <Route path="/history" element={<PageHistory />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
