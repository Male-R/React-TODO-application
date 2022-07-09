import React, { useState } from "react";

const Todo = () => {
	
	const [taskList, setTaskList] = useState(["clean the floor", "blah blah", "sacar al perro"]);
	const [inputValue, setInputValue] = useState("")

	//handle submit adds a task to the task list and resets the input
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue != "") {
			setTaskList([...taskList, inputValue]);
			setInputValue("");
		}
	};

	const deleteTask = (i) => {
		setTaskList(taskList.filter((_, index) => {
			return index != i
		}))
	}

	return (
		<div className="container center">
			<h1>ToDo's</h1>
			<form onSubmit={handleSubmit}>
				<input
					onChange={(e) => { setInputValue(e.target.value) }}
					value={inputValue}
					type="text"
					placeholder="No tasks, add a task"
				/>
				<ul className="list-group">
					{taskList.map((task, index) => (
						<li key={index} className="list-group-item">
							<span>
								{task}
							</span>
							<button
								type="button"
								className="btn-close"
								onClick={() => {deleteTask(index)}
								}>
							</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
};

export default Todo;
