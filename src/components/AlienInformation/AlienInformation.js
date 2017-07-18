import React from 'react';

import './alien_information.css';


const AlienInformation = function(props) {
		return (<div>
					<p className='normal_text'>Hi {props.firstName}!!
						<br />You are related to the <span className='large_text'>{props.alienTribeName}</span> Alien Tribe! 
						<br />These are friendly creatures and one of them would like to meet you. Would you like to meet him?
					</p>
					<div id='result_message_area'>
						<span id='meet_alien_button_yes' className='button_style'>Yes</span>
						<span id='meet_alien_button_no' className='button_style'>No</span>
					</div>
				</div>
				
		);
 
}

export default AlienInformation;
