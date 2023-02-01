import {
    GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE,
    SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE
} from '../constants/ActionTypes'

const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages
})

const getMessagesFailure = (error) => ({
    type: GET_MESSAGES_FAILURE,
    payload: error
})

const sendMessageSuccess = (message) => ({
    type: SEND_MESSAGE_SUCCESS,
    payload: message
})

const sendMessageFailure = (error) => ({
    type: SEND_MESSAGE_FAILURE,
    payload: error
})

export const getMessages = () => {
    return (dispatch) => {
        fetch('/chats/1/messages/')
            .then(response => response.json())
            .then(data => dispatch(getMessagesSuccess(data)))
            .catch(err => dispatch(getMessagesFailure(err)))
    }
}

export const sendMessage = (message) => {
    return async (dispatch) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(message)
        }
        try {
            const response = await fetch('/chats/1/messages/', options)
            const created_message = await response.json()
            dispatch(sendMessageSuccess(created_message))
        } catch (err) {
            dispatch(sendMessageFailure(err))
        }
    }
}
