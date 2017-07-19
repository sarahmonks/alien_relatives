import React from 'react';

import './result_message.css';


const ResultMessage = function(props) {
		return (<div id='result_message_area'>
						<p className='large_text'>
							{(props.userChoseToMeetAlien === true ? 'Here comes the flying saucer' : 'Awwwwww no')}!!!
						</p>
				</div>
		);
 
}

export default ResultMessage;
