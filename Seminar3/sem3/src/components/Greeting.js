// Создайте функциональный компонент Greeting, который
// принимает проп name и отображает сообщение Привет, {name}!.
// ● Используйте компонент Greeting в вашем основном компоненте
// App, передавая разные имена в качестве пропсов.


import PropTypes from 'prop-types';

function Greeting({name}) {
    const timeDate = new Date().getHours();
    let resultTimeDate;
    switch (timeDate) {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            resultTimeDate = "Доброе утро"
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            resultTimeDate = "Добрый день"
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            resultTimeDate = "Добрый вечер"
            break; 
        default:
            resultTimeDate = "Доброй ночи"
            break;
    }

    return (
        <div>
            <h2>
                {resultTimeDate}, {name}
            </h2>
        </div>
    )
}
Greeting.propTypes = {
    name: PropTypes.string.isRequired
}


export default Greeting;