import React, { useState } from 'react';
import styles from './styles.module.css';

function DataFeeder(props) {
	const { onSubmit } = props;
	const [taskDetails, setTaskDetails] = useState({
		taskName: '',
		diffLevel: '',
		estTime: '',
	});
	return (
		<div className={styles.dataForm}>
			<div className={styles.inputFields}>
				<label>Task Name</label>{' '}
				<input
					onChange={(e) => {
						setTaskDetails({ ...taskDetails, taskName: e.target.value });
					}}
				/>
			</div>
			<div className={styles.inputFields}>
				<label>Difficulty level</label>{' '}
				<input
					onChange={(e) => {
						setTaskDetails({ ...taskDetails, diffLevel: e.target.value });
					}}
				/>
			</div>
			<div className={styles.inputFields}>
				{' '}
				<label>Estimated Time</label>{' '}
				<input
					onChange={(e) => {
						setTaskDetails({ ...taskDetails, estTime: e.target.value });
					}}
					placeholder="ex: 2.5h or 150mins"
				/>
			</div>

			<button
				className={styles.submitButton}
				onClick={(e) => {
					onSubmit(taskDetails);
				}}
			>
				Submit
			</button>
		</div>
	);
}

export default DataFeeder;
