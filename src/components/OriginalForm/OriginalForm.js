import React from 'react';

import './original_form.css';


const OriginalForm = function(props) {
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
