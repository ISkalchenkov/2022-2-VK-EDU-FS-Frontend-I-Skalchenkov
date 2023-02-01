import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getMessages, sendMessage } from '../../actions/messages'
import PropTypes from 'prop-types'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import Chat from '../../components/Chat/Chat'
import Form from '../../components/Form/Form'
import jenniferAvatar from '../../assets/avatars/jennifer.jpg'

function PageChat (props) {
    const [text, setText] = useState('')

    useEffect(() => {
        props.getMessages() // Отображение сообщений при монтировании страницы
        const timer_id = setInterval(props.getMessages, 1000) // Запуск поллинга с периодичностью в 1с

        return () => { clearInterval(timer_id) } // освобождение ресурсов при размонтировании
    }, [])

    function handleSubmit (event) {
        event.preventDefault()
        if (text === '') { return }
        const message = {
            body: text,
            chat: 1,
            sender: 2
        }
        props.sendMessage(message)
        setText('')
    }

    function handleChange (event) {
        setText(event.target.value)
    }

    function onClickEmoji (name) {
        const emoji_code = `:${name}:`
        setText(text + emoji_code)
    }

    return (
        <React.Fragment>
            <ChatHeader
                img_path={jenniferAvatar}
                profile_name='Дженнифер'
                profile_last_seen='был(-а) 2 часа назад'
            />
            <Chat messages={props.messages} />
            <Form
                onSubmit={handleSubmit}
                onChange={handleChange}
                onClickEmoji={onClickEmoji}
                value={text}
                name='message_text'
                placeholder='Напишите сообщение...'
            />
        </React.Fragment>
    )
}

PageChat.propTypes = {
    messages: PropTypes.array,
    getMessages: PropTypes.func,
    sendMessage: PropTypes.func
}

const mapStateToProps = (state) => {
    return ({
        messages: state.messages.messages
    })
}

export default connect(mapStateToProps, { getMessages, sendMessage })(PageChat)
