import React from 'react';

import './original_form.css';


const OriginalForm = props => {
	 //This is a stateless component used in the FormArea component
    //This component contains the HTML for the original form where the user submits their name.

    //To this component, we pass in the following method as a property (defined in AppContainer):
    //submitForm (parameters: none)

		return (<div>
					<h2>What Alien tribe are you related to?</h2>
					<form id="alien_tribe_form" name="alien_tribe_form" method="post" action="">
			
						<label>Please enter your first name:</label>
						<input id="first_name" name="first_name" type="text" placeholder="Enter your first name" />
							
					</form>
					<div id="submit_form" className="button_style main_button_style" onClick={props.submitForm}>Submit</div>
				</div>
		);
 
}

export default OriginalForm;
