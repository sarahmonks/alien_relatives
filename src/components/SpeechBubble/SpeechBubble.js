import React from 'react';
import './speech_bubble.css';


const SpeechBubble = function(props) {
		//This is a stateless component which displays the english translation of the wisdom message the alien brings to the user.

		return (<div id="english_translation" className={(props.userChoseToPlayMessage === true ? 'fade_in' : '')}>
					<span className="bubble small"></span>
					<span className="bubble"></span>
					<div className="speech_bubble">
						<p id="speech_bubble_text" className="large_text">{props.wisdomMessageEnglish}</p>
					</div>
				</div>
				
		);
}

export default SpeechBubble;
