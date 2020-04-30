import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function SearchDisplay(props) {
	const { taskList } = props;
	const [searchStr, setSearchStr] = useState('');
	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		setFilteredList(taskList);
	}, [taskList]);
	const search = (str) => {
		if (str.trim() === '') {
			setFilteredList(taskList);
		} else {
			let tmpArr = taskList.filter(
				(item) =>
					item.taskName.includes(str) ||
					item.diffLevel.includes(str) ||
					item.estTime.includes(str)
			);
			setFilteredList(tmpArr);
		}
	};
	const getDisplayTable = () => {
		return filteredList.map((item, i) => {
			return (
				<tr key={i}>
					<td>{item.taskName}</td>
					<td>{item.diffLevel}</td>
					<td>{item.estTime}</td>
				</tr>
			);
		});
	};
	return (
		<div className={styles.container}>
			<div className={styles.searchComponent}>
				<input
					onChange={(e) => {
						setSearchStr(e.target.value);
						search(e.target.value);
					}}
				/>
				<button
					onClick={(e) => {
						search(searchStr);
					}}
				>
					Search
				</button>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<td>TASK NAME</td>
							<td>DIFFICULTY LEVEL</td>
							<td>ESTIMATED TIME</td>
						</tr>
					</thead>
					<tbody>{getDisplayTable()}</tbody>
				</table>
			</div>
		</div>
	);
}

export default SearchDisplay;
