import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DataFeeder from './Components/DataFeeder';
import SearchDisplay from './Components/SearchDisplay';
import styles from './styles.module.css';

function App() {
	const [taskList, setTaskList] = useState([]);
	const pushTaskDetails = (item) => {
		setTaskList([...taskList, item]);
	};
	return (
		<div className={styles.wrapper}>
			<DataFeeder onSubmit={pushTaskDetails} />
			<SearchDisplay taskList={taskList} />
		</div>
	);
}

export default App;
