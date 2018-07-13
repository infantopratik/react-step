import React, { Component } from 'react';
import './App.css';

import Step from './Components/Step/Step';

class App extends Component {

	render() {

		const stepData = [
			{
				title: 'Student Info',
				formData: [
					{
						isRequired: true,
						label: 'Name'
					},
					{	
						type: 'number',
						label: 'Age'
					},
					{
						type: 'email',
						label: 'Email',
						isRequired: true
					},
					{
						type: 'password',
						label: 'Password'
					}
				]
			},
			{
				title: 'Select Course',
				formData: [
					{
						isRequired: true,
						label: 'Preferred Course'
					},
					{	
						type: 'number',
						label: 'Work Experince'
					}
				]
			}
		]

		return (
		  	<div className="main-container">
		  		<Step stepData={stepData}/>
		  	</div>
		);
	}
}

export default App;
