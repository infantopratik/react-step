import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

	constructor(props){
		super(props);
		this.state = {
			activeStep: 1,
			stepData: this.props.stepData,
			stepsCount: this.props.stepData.length
		}
	}

	goToStep(step) {
		this.setState({
			activeStep: step
		});
	}

	handleSubmit(e, step) {
		e.preventDefault();
		(step)?
			this.goToStep(step)
		:
			alert('Form Submitted!')
	}

	createFormFields(data) {
		return data.map((val,i) => <div className="form-item" key={i}>
						<div>{val.label}</div>
						{(val.type)?<input type={val.type}/>:<input type="text"/>}
					</div>);
	}

	render() {

		const stepIndicators = this.state.stepData.map((step, i) => 
				<div className={(this.state.activeStep===(i+1))?'step-indicator active-step':'step-indicator'} onClick={e => this.goToStep(i+1)} key={i}>{step.title}</div>
			);

		const stepContent = this.state.stepData.map((step, i) => {
			return (this.state.activeStep === i+1)?<form className="form" onSubmit={e => this.handleSubmit(e, i+2)} key={i}>
				{this.createFormFields(step.formData)}
				<div className="form-item">
					{(this.state.stepsCount === i+1)?<input type="submit" value="Submit"/>:<input type="submit" value="Next"/>}
				</div>
			</form>:null;
		});

		return (
		  	 <div>
		  	 	<div className="step-indicator-bar">
		  	 		{stepIndicators}
		  	 	</div>

		  	 	<div className="step-content">
		  	 		{stepContent}
		  	 	</div>
		  	</div>
		);
	}
}

export default Step;
