// Задание 3 (тайминг 25 минут)
// ● Создайте компонент MessagesList, который отображает список
// сообщений. Каждое сообщение должно иметь уникальный id и
// текст.
// ● Используйте проп key при рендеринге списка, чтобы
// обеспечить оптимальную производительность.

import Message from "./Message";

function MessagesList({messages}) {
    return (
        <>
            <ul>
                {messages.map((message) => <Message key={message.key} message={message.text} heading={message.heading}/>)}
                
            </ul>
        </>
    )

}

export default MessagesList;