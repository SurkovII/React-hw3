// Задание 4 (тайминг 25 минут)
// Создать React компонент TextDisplayForm, который позволяет пользователю ввести
// текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию
// кнопки.
// ● Создание поля ввода (TextField)
// ○ Добавить TextField для ввода текста пользователем.
// ○ Установить метку (label) поля ввода на "Введите текст".
// ○ Сделать поле ввода на всю ширину (fullWidth).
// ● Разместить кнопку под полем ввода.
// ○ Установить текст кнопки на "Отобразить текст".
// ○ При нажатии на кнопку введенный текст должен отображаться под
// кнопкой.
// Отображение введенного текста
// ○ Использовать состояние для хранения введенного и отображаемого текста.
// ○ При нажатии на кнопку текст из поля ввода должен отображаться в
// стилизованной карточке (Card) под кнопкой.
// ● Стилизация отображаемого текста
// ○ Для отображения текста использовать компонент Typography с вариантом
// h5.
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react'


// import TextField from '@mui/material/TextField';

function TextDisplayForm() {
    const [text, setText] = useState("");
    const [displayedText, setDisplayedText] = useState("");

    const updateText = (e) => {
        setText(text => e.target.value)
    }

    const bottonClick = () => {
        setDisplayedText(text)
        setText("")
    }

    return (
        <>
            <div>
                <TextField sx={{ '& > :not(style)': { m: 1, width: '25ch' } }} fullWidth variant="filled" value={text} onChange={updateText} />
            </div>
            <Button variant="contained" color='primary' onClick={bottonClick}>Отобразить текст</Button>
            <Card sx={{ display: 'flex' }} variant="outlined" className={displayedText ? 'active' : 'hidden'}>
                <Box sx={{ display: 'flex', flexDirection: 'column', '& > :not(style)': { m: 1, width: '25ch' } }}>
                    <CardContent>
                        <Typography variant="h5" component='div'>{displayedText}</Typography>
                    </CardContent>
                </Box>
            </Card>
        </>
    )

}
export default TextDisplayForm;