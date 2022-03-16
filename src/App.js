import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';

import "./App.css";
import TaskDetails from './components/TaskDetails';

const App = () => {
	// const msg = "Olá, eu sou uma mensagem"

	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: 'Estudar Programação',
			completed: false
		},
		{
			id: 2,
			title: 'Ler Livros',
			completed: true
		},
	])

	const handleTaskAddition = (taskTitle) => {
		const newTask = [...tasks, {
			id: uuidv4(),
			title: taskTitle,
			completed: false
		}]

		setTasks(newTask)
	}

	const handleTaskClick = (taskId) => {
		const newTask = tasks.map(task => {
			if (task.id === taskId) return { ...task, completed: !task.completed }

			return task
		})

		setTasks(newTask)
	}

	const hadleTaskDelete = (taskId) => {
		const newTask = tasks.filter(task => {
			return task.id !== taskId
		})

		setTasks(newTask)
	}

	return (
		<Router>
			<div className='container'>
				<Header />
				<Route
					exact
					path='/'
					render={() => (
						<>
							<AddTask handleTaskAddition={handleTaskAddition} />
							<Tasks
								tasks={tasks}
								handleTaskClick={handleTaskClick}
								hadleTaskDelete={hadleTaskDelete}
							/>
						</>
					)}
				/>
				<Route 
					exact
					path="/:taskTitle"
					component={TaskDetails}
				/>

			</div>
		</Router>
	)
}

export default App
