import React from 'react';


import './form_area.css';
import OriginalForm from '../OriginalForm/OriginalForm';
import AlienInformation from '../AlienInformation/AlienInformation';

const FormArea = props => {
    //This is a stateless component used in the Content component
    //This component contains the HTML to display the area where the form is displayed and also the feedback message.

    //To this component, we pass in the following states as properties (These states are defined in AppContainer):

    //firstName (string)
    //alienTribeName (string)

    //originalFormIsDisplayed (boolean)
    //userChoseToMeetAlien (boolean)
    //resultMessageIsDisplayed (boolean)
    //cupAndSaucerHaveArrived (boolean)
    //giftAreaIsDisplayed (boolean)
    //userClickedGiftArea (boolean)
    //userGaveLove (boolean)

    //And we pass in the following method as a property (defined in AppContainer):
    //submitForm (parameters: none)
    //meetAlien (parameter: userChoseToMeetAlien (boolean))
		const originalFormIsDisplayed = props.originalFormIsDisplayed;

		let userInterativeArea = null;
    	if (originalFormIsDisplayed) {
      		userInterativeArea = <OriginalForm submitForm={props.submitForm} />;
    	} else {
      		userInterativeArea = <AlienInformation firstName={props.firstName} 
                                                  alienTribeName={props.alienTribeName} 
                                                  userChoseToMeetAlien={props.userChoseToMeetAlien} 
                                                  resultMessageIsDisplayed={props.resultMessageIsDisplayed}
                                                  cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived}
                                                  giftAreaIsDisplayed={props.giftAreaIsDisplayed}
                                                  userClickedGiftArea={props.userClickedGiftArea}
                                                  userGaveLove={props.userGaveLove}
                                                  meetAlien={props.meetAlien} 
                                />;
    	
    	}

		return (<div id="main_content_area">
      					<div className="background_color"></div>
      					<div id="user_interactive_area">	
      						  {userInterativeArea}	
      					</div>
				  </div>
		);
 
}

export default FormArea;
