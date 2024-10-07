// 1. Разработайте компонент Counter, который отображает число и
// две кнопки: одна для увеличения значения на 1, а другая для
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui
import { useEffect, useState } from 'react'
import { Button } from "@mui/material";

function Counter() {
    const [number, setState] = useState(0);

    const updateMinus = () => {
        if (number <= 0) {
            return
        }
        setState(prevCount => prevCount - 1)
    }

    const updatePlus = () => {
        setState(prevCount => prevCount + 1)

    }
    const clear = () => {
        setState(0)
    }

    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        if (number > 0) {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }, [number]);
    return (
        <div>
            <Button variant="contained" color='primary' onClick={updateMinus} disabled={disabled}>Уменьшить</Button>
            <p>{number}</p>
            <Button variant="contained" color='secondary' onClick={updatePlus
            }>Увеличить</Button>
            <Button variant="outlined" onClick={clear
            }>Очистить</Button>
        </div>
    )

}

export default Counter;