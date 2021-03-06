import React from 'react';

import './alien_information.css';
import ResultMessage from '../ResultMessage/ResultMessage';
import MeetAlienButtons from '../MeetAlienButtons/MeetAlienButtons';

const AlienInformation = props => {
    //This is a stateless component used in the FormArea component
    //This component contains the HTML to display information about the related Alien tribe.
    
    //To this component, we pass in the following states as properties (These states are defined in AppContainer):
    //firstName (string)
    //alienTribeName (string)
    //userChoseToMeetAlien (boolean)
    //resultMessageIsDisplayed (boolean)
    //cupAndSaucerHaveArrived (boolean)
    //giftAreaIsDisplayed (boolean)
    //userClickedGiftArea (boolean)
    //userGaveLove (boolean)

    //And we pass in the following method as a property (defined in AppContainer):
    //meetAlien (parameter: userChoseToMeetAlien (boolean))

		const resultMessageIsDisplayed= props.resultMessageIsDisplayed;

		let resultMessageArea = null;
    	if (resultMessageIsDisplayed) {
      		resultMessageArea = <ResultMessage  alienTribeName={props.alienTribeName}
                        userChoseToMeetAlien={props.userChoseToMeetAlien} 
                        resultMessageIsDisplayed={props.resultMessageIsDisplayed}
      									cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived}
      									giftAreaIsDisplayed={props.giftAreaIsDisplayed}
      									userClickedGiftArea={props.userClickedGiftArea}
                        userGaveLove={props.userGaveLove}
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
