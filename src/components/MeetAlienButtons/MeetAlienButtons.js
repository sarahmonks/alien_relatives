import React from 'react';
import './meet_alien_buttons.css';


const MeetAlienButtons = props => {
		//This is a stateless component used in the AlienInformation component
		//To this component, we pass in a property called meetAlien (which is a method defined in the main AppContainer class).
		return (<div id='result_message_area'>
						<span id='meet_alien_button_yes' onClick={props.meetAlien.bind(null, true)} className='button_style main_button_style'>Yes</span>
						<span id='meet_alien_button_no'  onClick={props.meetAlien.bind(null, false)} className='button_style main_button_style'>No</span>
				</div>
		);
 
}

export default MeetAlienButtons;
