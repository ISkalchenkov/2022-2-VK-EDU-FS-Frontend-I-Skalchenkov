import React, { useState, useEffect } from 'react'
import ChatHeader from '../../components/ChatHeader/ChatHeader'
import PublicChat from '../../components/Chat/PublicChat'
import Form from '../../components/Form/Form'
import publicChatAvatar from '../../assets/avatars/public_chat.jpg'

export default function PagePublicChat () {
    const [messages, setMessages] = useState([])
    const [text, setText] = useState('')

    function getMessages () {
        fetch('https://tt-front.vercel.app/messages')
            .then(response => response.json())
            .then(data => setMessages(data))
    }

    async function sendMessage (message) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(message)
        }
        const response = await fetch('https://tt-front.vercel.app/message', options)
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getMessages() // Отображение сообщений при монтировании страницы
        const timer_id = setInterval(getMessages, 1000) // Запуск поллинга с периодичностью в 1с

        return () => { clearInterval(timer_id) } // освобождение ресурсов при размонтировании
    }, [])

    async function handleSubmit (event) {
        event.preventDefault()
        if (text === '') { return }
        const message = {
            text,
            author: 'Ivan Skalchenkov'
        }
        const created_message = await sendMessage(message)
        if (created_message.timestamp > messages[messages.length - 1].timestamp) { // если timestamp созданного свежее, чем последний имеющийся
            setMessages(messages.concat(created_message)) // то добавляем сообщение в список
        }
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
                img_path={publicChatAvatar}
                profile_name='Общий чат'
            />
            <PublicChat messages={messages} />
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
