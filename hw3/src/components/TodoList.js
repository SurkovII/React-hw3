import { Button, Card, IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react"


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState();

    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask])
            setNewTasks('')
        }
    }

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    const inputChange = (e) => {
        setNewTasks(e.target.value)
    }

    return (
        <div>
            <TextField value={newTask} onChange={inputChange} label="Add new Taask"/>
            <Button onClick={handleAddTask} variant="contained">Add Task</Button>
            {tasks.map((task, index) => (
                <Card key={index}>
                    <ListItem>
                        <ListItemText primary={task}/>
                        <IconButton ><DeleteIcon onClick={() => handleDeleteTask(index)}></DeleteIcon>
                        </IconButton>
                    </ListItem>
                </Card>
            ))}
        </div>
    )
}

export default TodoList;