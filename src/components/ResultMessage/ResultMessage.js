import React from 'react';
import './result_message.css';

import ShowSomeLovePrompt from '../ShowSomeLovePrompt/ShowSomeLovePrompt';

const ResultMessage = props => {
		//This is a stateless component used in the AlienInformation component
		//This component has a property called userChoseToMeetAlien which is a state defined in the main AppContainer class.

		const userChoseToMeetAlien = props.userChoseToMeetAlien;
		const cupAndSaucerHaveArrived = props.cupAndSaucerHaveArrived;
		const giftAreaIsDisplayed= props.giftAreaIsDisplayed;
		const userGaveLove= props.userGaveLove;
		const userClickedGiftArea=props.userClickedGiftArea;
		const resultMessageIsDisplayed=props.resultMessageIsDisplayed;
		let output = null;
    	if (cupAndSaucerHaveArrived) {
    		if (giftAreaIsDisplayed) {
    			if(userClickedGiftArea){
    		
    				output = (userGaveLove === true ? "He's all loved up!!!" : "He's a bit upset!!!");
    			}else{
					output = <ShowSomeLovePrompt alienTribeName={props.alienTribeName} />;

    			}
    		}else{
    			//giftAreaIsDisplayed is false here.
    			if(userClickedGiftArea){
    				//We should come here after the hideGifts method is called in AppContainer.js as we will have set giftAreaIsDisplayed to false again.
    				output = 'Have a good day!!!';

    			}else{

    				output = 'He has a wisdom message for you!';
    			}
    		}
    	} else {
      		output = (userChoseToMeetAlien === true ? 'Here comes the flying saucer!' : 'Awwwwww no');
    	}

		return (<div id='result_message_area' className={(props.resultMessageIsDisplayed === true ? 'full_width' : '')} >
						<p className={"large_text text_center " + (props.userGaveLove === true ? 'pink_text' : '')}>
							{output}
						</p>
				</div>
		);
}

export default ResultMessage;
