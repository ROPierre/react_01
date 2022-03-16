import React from 'react';
import Task from './Task';

const Tasks = ({ tasks, handleTaskClick, hadleTaskDelete }) => {
    return (
        <>
            {
                tasks.map((task) => { 
                    return (<Task 
                        task={task} 
                        key={task.id} 
                        handleTaskClick={handleTaskClick}
                        hadleTaskDelete={hadleTaskDelete}    
                    />)
                })
            }
        </>
    )
}

export default Tasks;