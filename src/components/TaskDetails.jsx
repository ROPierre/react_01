import React from 'react';
import Button from './Button';
import { useParams, useHistory } from 'react-router-dom'


import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams()
    const history = useHistory()

    const handleBackButtonClick = () => {
        history.goBack()
    }

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt debitis quasi veritatis, labore adipisci explicabo?
                </p>
            </div>
        </> 
    );
}
 
export default TaskDetails;