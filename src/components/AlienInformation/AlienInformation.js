import React from 'react';

import './alien_information.css';
import ResultMessage from '../ResultMessage/ResultMessage';
import MeetAlienButtons from '../MeetAlienButtons/MeetAlienButtons';

const AlienInformation = props => {

		const resultMessageIsDisplayed= props.resultMessageIsDisplayed;

		let resultMessageArea = null;
    	if (resultMessageIsDisplayed) {
      		resultMessageArea = <ResultMessage userChoseToMeetAlien={props.userChoseToMeetAlien} 
      									cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived}
      									giftAreaIsDisplayed={props.giftAreaIsDisplayed}
      									alienTribeName={props.alienTribeName}
      									userGaveLove={props.userGaveLove}
      									userClickedGiftArea={props.userClickedGiftArea}
      									/>;
    	} else {

      		resultMessageArea = <MeetAlienButtons meetAlien={props.meetAlien} />;
    	}

		return (<div>
					<p className='normal_text'>Hi {props.firstName}!!
						<br />You are related to the <span className='large_text'>{props.alienTribeName}</span> Alien Tribe! 
						<br />These are friendly creatures and one of them would like to meet you. Would you like to meet him?
					</p>
					{resultMessageArea}
				</div>	
		);
}

export default AlienInformation;
