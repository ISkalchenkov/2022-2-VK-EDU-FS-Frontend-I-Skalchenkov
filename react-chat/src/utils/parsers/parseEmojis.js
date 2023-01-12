import { EMOJIS } from '../../constants/emojis'
import styles from '../../components/EmojiKeyboard/EmojiKeyboard.module.scss'
import classNames from 'classnames'

export default function parseEmojis (text) {
    if (text === undefined) {
        return
    }

    const result = []
    let emoji_end
    let emoji_start = text.indexOf(':')

    while (true) {
        emoji_start = text.indexOf(':')
        emoji_end = text.indexOf(':', emoji_start + 1)

        if (emoji_end < 0) {
            result.push(text)
            break
        }

        if ((emoji_end - emoji_start) === 1) {
            result.push(text.slice(0, emoji_end))
            text = text.slice(emoji_end)
            continue
        }
        const emoji_name = text.slice(emoji_start + 1, emoji_end)
        if (EMOJIS.includes(emoji_name)) {
            emoji_start && result.push(text.slice(0, emoji_start))
            result.push(
                <div
                    key={result.length}
                    className={classNames(styles.emoji, styles[emoji_name])}
                    style={{ display: 'inline-block', verticalAlign: 'text-bottom', margin: '0px 1px' }}
                />
            )
            text = text.slice(emoji_end + 1)
        } else {
            result.push(text.slice(0, emoji_end))
            text = text.slice(emoji_end)
        }
    }
    return result
}
