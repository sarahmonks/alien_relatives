import React from 'react';
import './result_message.css';


const ResultMessage = function(props) {
		//This is a stateless component used in the AlienInformation component
		//This component has a property called userChoseToMeetAlien which is a state defined in the main AppContainer class.
		return (<div id='result_message_area'>
						<p className='large_text'>
							{(props.userChoseToMeetAlien === true ? 'Here comes the flying saucer' : 'Awwwwww no')}!!!
						</p>
				</div>
		);
}

export default ResultMessage;
