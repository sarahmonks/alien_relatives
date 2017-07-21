import React from 'react';
import './result_message.css';


const ResultMessage = function(props) {
		//This is a stateless component used in the AlienInformation component
		//This component has a property called userChoseToMeetAlien which is a state defined in the main AppContainer class.


		const cupAndSaucerHaveArrived = props.cupAndSaucerHaveArrived;

		let output = null;
    	if (cupAndSaucerHaveArrived) {
    		output = 'He has a wisdom message for you';

    	} else {
      		output = (props.userChoseToMeetAlien === true ? 'Here comes the flying saucer' : 'Awwwwww no');
    	}

		return (<div id='result_message_area'>
						<p className='large_text'>
							{output}!!!
						</p>
				</div>
		);
}

export default ResultMessage;
