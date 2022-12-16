import './App.css';
import React from 'react';
import PageChatList from './pages/PageChatList/PageChatList';
import PageChat from './pages/PageChat/PageChat';

class App extends React.Component {
    constructor(props) {
        super(props);
        const isChatPage = JSON.parse(localStorage.getItem("isChatPage"));
        this.state = {isChatPage: isChatPage};
        this.handleGoToChatClick = this.handleGoToChatClick.bind(this);
        this.handleChatExitClick = this.handleChatExitClick.bind(this);
    }

    handleGoToChatClick() {
        this.setState({isChatPage: true});
        localStorage.setItem("isChatPage", true);
    }

    handleChatExitClick() {
        this.setState({isChatPage: false});
        localStorage.setItem("isChatPage", false);
    }    

    render() {
        let page;
        if (this.state.isChatPage) {
            page = <PageChat onClick={this.handleChatExitClick} />;
        } else {
            page = <PageChatList onClick={this.handleGoToChatClick} />;
        }

        return (
            <div className="App">
                {page}
            </div>
        );
    }
}

export default App;
