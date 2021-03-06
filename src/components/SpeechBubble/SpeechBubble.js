import React from 'react';
import './speech_bubble.css';


const SpeechBubble = props => {
		//This is a stateless component used in the Content component
		//It contains the HTML which displays the english translation of the wisdom message the alien brings to the user.

   		//To this component, we pass in the following states as properties (These states are defined in AppContainer):	
		//wisdomMessageEnglish (string)
		//userChoseToPlayMessage (boolean)
		//userClickedGiftArea (boolean)
		//userGaveLove (boolean)

	const userClickedGiftArea = props.userClickedGiftArea;
	const userGaveLove = props.userGaveLove;
	let speechBubbleText = null;
	if(userClickedGiftArea){
		
		speechBubbleText = (userGaveLove === true ? "Thank youuuu!!" : "Boo hoo!");
	}else{
		speechBubbleText = props.wisdomMessageEnglish;
	}
		return (<div id="english_translation" className={(props.userChoseToPlayMessage === true ? 'fade_in' : '')}>
					<span className="bubble small"></span>
					<span className="bubble"></span>
					<div className="speech_bubble">
						<p id="speech_bubble_text" className="large_text">{speechBubbleText}</p>
					</div>
				</div>
				
		);
}

export default SpeechBubble;
