import './App.css'
import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PageChatList from './pages/PageChatList/PageChatList'
import PageChat from './pages/PageChat/PageChat'
import PagePublicChat from './pages/PageChat/PagePublicChat'
import PageProfile from './pages/PageProfile/PageProfile'
import PageLogin from './pages/PageLogin/PageLogin'
import PageError from './pages/PageError/PageError'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            logged_in: undefined,
            error: ''
        }
    }

    if_allowed (Page) {
        const logged_in = this.state.logged_in
        if (logged_in && Page === PageLogin) {
            return <Navigate to="/chats" />
        }
        if (!logged_in && Page === PageLogin) {
            return <PageLogin />
        }
        if (logged_in) {
            return <Page />
        }
        return <Navigate to="/login" />
    }

    componentDidMount () {
        fetch('/is_logged_in/')
            .then(response => {
                if (response.status !== 200) {
                    const error = new Error(`${response.status} ${response.statusText}`)
                    throw error
                }
                return response.json()
            })
            .then(data => this.setState({ logged_in: data.logged_in }),
                error => this.setState({ error: error.message })
            )
    }

    render () {
        if (this.state.error) { // Если fetch завершился с ошибкой, отображаем страницу PageError на которой отображаем статус ошибки
            return (
                <div className="App">
                    <PageError error_message={this.state.error} />
                </div>
            )
        }

        if (this.state.logged_in === undefined) { // logged_in равен underfined, пока не пройдет запрос в componentDidMount
            return null // Пока мы не знаем пользователь авторизован или нет, App ничего не рендерит (пустая страница)
        } // Иначе, если пользователь авторизован, будет промигивать страница авторизации

        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Navigate to="/chats" />} />
                        <Route path="/chats" element={this.if_allowed(PageChatList)} />
                        <Route path="/chats/:id" element={this.if_allowed(PageChat)} />
                        <Route path="/public_chat" element={this.if_allowed(PagePublicChat)} />
                        <Route path="/profile" element={this.if_allowed(PageProfile)}/>
                        <Route path="/login" element={this.if_allowed(PageLogin)}/>
                        <Route path="*" element={<PageError error_message="404 Not Found" />}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}

export default App
