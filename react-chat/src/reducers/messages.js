import {
    GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE,
    SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE
} from '../constants/ActionTypes'

const initialState = {
    messages: [],
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
    case GET_MESSAGES_SUCCESS:
        return {
            messages: action.payload,
            error: ''
        }
    case GET_MESSAGES_FAILURE:
        return {
            messages: state.messages,
            error: action.payload
        }
    case SEND_MESSAGE_SUCCESS:
        if (action.payload.id > state.messages.at(-1).id) { // если сообщения нет в массиве, то добавляем и возвращаем новое состояние
            return {
                messages: [...state.messages, action.payload],
                error: ''
            }
        }
        return state
    case SEND_MESSAGE_FAILURE:
        return {
            messages: state.messages,
            error: action.payload
        }
    default:
        return state
    }
}
