export default function formatTime (datetime) {
    if (datetime === undefined) {
        return ''
    }
    const message_datetime = new Date(datetime)
    const now = new Date()
    if (message_datetime.toLocaleDateString() === now.toLocaleDateString()) { // Если сообщение сегодняшнее, то возвращаем только время, иначе дату + время
        return message_datetime.toLocaleTimeString('ru').slice(0, '00:00'.length)
    }
    return message_datetime.toLocaleString('ru').slice(0, '00.00.0000, 00:00'.length)
}
