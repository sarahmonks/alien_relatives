import React from 'react';

import './meet_alien_buttons.css';


const MeetAlienButtons = function(props) {
		return (<div id='result_message_area'>
						<span id='meet_alien_button_yes' onClick={props.meetAlien.bind(null, true)} className='button_style'>Yes</span>
						<span id='meet_alien_button_no'  onClick={props.meetAlien.bind(null, false)} className='button_style'>No</span>
				</div>
		);
 
}

export default MeetAlienButtons;
