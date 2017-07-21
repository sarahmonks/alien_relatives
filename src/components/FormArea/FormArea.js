import React from 'react';


import './form_area.css';
import OriginalForm from '../OriginalForm/OriginalForm';
import AlienInformation from '../AlienInformation/AlienInformation';

const FormArea = function(props) {
		const originalFormIsDisplayed = props.originalFormIsDisplayed;

		let userInterativeArea = null;
    	if (originalFormIsDisplayed) {
      		userInterativeArea = <OriginalForm submitForm={props.submitForm} />;
    	} else {
      		userInterativeArea = <AlienInformation alienTribeName={props.alienTribeName} 
      											firstName={props.firstName} meetAlien={props.meetAlien} 
      											userChoseToMeetAlien={props.userChoseToMeetAlien} 
      											resultMessageIsDisplayed={props.resultMessageIsDisplayed}
      							/>;
    	
    	}

		return (<div id="main_content_area">
					<div className="background_color"></div>
					<div id="user_interactive_area">	
						{userInterativeArea}	
					</div>
				</div>
		);
 
}

export default FormArea;
