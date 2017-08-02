import React from 'react';


import './form_area.css';
import OriginalForm from '../OriginalForm/OriginalForm';
import AlienInformation from '../AlienInformation/AlienInformation';

const FormArea = props => {
    //This is a stateless component used in the Content component
    //This component contains the HTML to display the area where the form is displayed and also the feedback message.

    //To this component, we pass in the following states as properties (These states are defined in AppContainer):
    //originalFormIsDisplayed (boolean)
    //alienTribeName (string)
    //firstName (string)
    //userChoseToMeetAlien (boolean)
    //resultMessageIsDisplayed (boolean)
    //cupAndSaucerHaveArrived (boolean)
    //giftAreaIsDisplayed (boolean)
    //userGaveLove (boolean)
    //userClickedGiftArea (boolean)
    //And we pass in the following method as a property (defined in AppContainer):
    //submitForm
    //meetAlien (This method takes in true or false as a parameter)
		const originalFormIsDisplayed = props.originalFormIsDisplayed;

		let userInterativeArea = null;
    	if (originalFormIsDisplayed) {
      		userInterativeArea = <OriginalForm submitForm={props.submitForm} />;
    	} else {
      		userInterativeArea = <AlienInformation alienTribeName={props.alienTribeName} 
      											firstName={props.firstName} meetAlien={props.meetAlien} 
      											userChoseToMeetAlien={props.userChoseToMeetAlien} 
      											resultMessageIsDisplayed={props.resultMessageIsDisplayed}
      											cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived}
                            giftAreaIsDisplayed={props.giftAreaIsDisplayed}
                            userGaveLove={props.userGaveLove}
                            userClickedGiftArea={props.userClickedGiftArea}
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
