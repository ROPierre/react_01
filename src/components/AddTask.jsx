import React, { useState } from 'react';

import Button from './Button'

import './AddTask.css';

const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        inputData.length > 0 ? handleTaskAddition(inputData) : setInputData("");
        setInputData("")
    }

    return (
        <div className='add-task-container'>
            <input
                className='add-task-input'
                value={inputData}
                type="text"
                onChange={handleInputChange}
            />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;