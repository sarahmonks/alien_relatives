import React from 'react';

import './form_area.css';


const FormArea = function(props) {

	
		return (<div id="main_content_area">
					<div className="background_color"></div>

					<div id="user_interactive_area">
						
						<h2>What Alien tribe are you related to?</h2>
						<form id="alien_tribe_form" name="alien_tribe_form" method="post" action="">
			
							<label>Please enter your first name:</label>
							<input id="first_name" name="first_name" type="text" placeholder="Enter your first name" />
							
						</form>
						<div id="submit_form" className="button_style" onClick={props.submitForm}>Submit</div>
							
					</div>
				</div>
		);
 
}

export default FormArea;
