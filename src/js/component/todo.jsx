import React, { useState } from "react";


const Todo = () => {
	const [taskList, setTaskList] = useState(["clean the floor", "blah blah", "sacar al perro"]);
	const [inputValue, setInputValue] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault();
		if (e.keyCode == 13 && inputValue !== "") {
			setTaskList([...taskList, e.target.value]);
		};
	};

	// const filter = (task) => {
	// 	console.log('task', task)
	// 	return task !== taskList
	// }

	const deleteTask = (index) => {

	}

	return (
		<div className="container center">
			<h1>ToDo's</h1>
			<form>
				<input onChange={(e) => { setInputValue(e.target.value) }} value={inputValue} type="text" placeholder="No tasks, add a task" onKeyDown={handleSubmit} />
				<ul className="list-group">
					{taskList.map((task, index) => (
						<li key={index} className="list-group-item">
							<span>
								{task}
							</span>
							<button
								type="button"
								className="btn-close"
								onClick={() => deleteTask(index)}>
							</button>
						</li>
					))}
				</ul>
			</form>
		</div>
	);
};

export default Todo;
