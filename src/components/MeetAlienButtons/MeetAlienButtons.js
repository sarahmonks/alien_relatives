import React from 'react';
import './meet_alien_buttons.css';


const MeetAlienButtons = props => {
		//This is a stateless component used in the AlienInformation component

        //It contains the HTML to display the 'yes' and 'no' buttons when the user is asked whether they want to meet the alien or not.

        //To this component, we pass in the following method as a property (defined in AppContainer):
    	//meetAlien (This method takes in true or false as a parameter)
    	
		return (<div id='result_message_area'>
						<span id='meet_alien_button_yes' onClick={props.meetAlien.bind(null, true)} className='button_style main_button_style'>Yes</span>
						<span id='meet_alien_button_no'  onClick={props.meetAlien.bind(null, false)} className='button_style main_button_style'>No</span>
				</div>
		);
 
}

export default MeetAlienButtons;
