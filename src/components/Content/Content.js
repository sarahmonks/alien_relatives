import React from 'react';
import Planet from '../Planet/Planet';
import CupAndSaucer from '../CupAndSaucer/CupAndSaucer';
import AlienTribeNameArea from '../AlienTribeNameArea/AlienTribeNameArea';
import FormArea from '../FormArea/FormArea';
import AlienGiftsArea from '../AlienGiftsArea/AlienGiftsArea';
import SpeechBubble from '../SpeechBubble/SpeechBubble';

import './content.css';


const Content = props => {

		//This is a stateless component used in the AppContainer container
		//This component contains several other components.

   		//To this component, we pass in the following states as properties (These states are defined in AppContainer):	
		//firstName (string)
		//alienTribeName (string)
		//alienTribeImage (string)
		//alienTribeImageHands (string)
		//wisdomMessageEnglish (string)
		//qtyOfLoveReceived (integer)

		//originalFormIsDisplayed (boolean)
		//userChoseToMeetAlien (boolean)
		//resultMessageIsDisplayed (boolean)
		//cupAndSaucerHaveArrived (boolean)

		//userChoseToPlayMessage (boolean)
		//giftAreaIsDisplayed (boolean)
		//userClickedGiftArea (boolean)
		//userGaveLove (boolean)

		//And we pass in the following methods as a property (defined in AppContainer):
		//submitForm (parameters: none)
		//meetAlien (parameter: userChoseToMeetAlien (boolean))
		//playAlienMessage (parameters: none)	
		//giveLove (parameters: userGaveLove (boolean))

		return (<div id="container">
					<div id="content">
						<Planet />
						<CupAndSaucer alienTribeImage={props.alienTribeImage}
								alienTribeImageHands={props.alienTribeImageHands} 
								userChoseToMeetAlien={props.userChoseToMeetAlien} 
								cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived}
								playAlienMessage={props.playAlienMessage} />
						<AlienTribeNameArea alienTribeName={props.alienTribeName}/>
						<FormArea firstName={props.firstName} 
								alienTribeName={props.alienTribeName} 
								originalFormIsDisplayed={props.originalFormIsDisplayed} 
								userChoseToMeetAlien={props.userChoseToMeetAlien}
								resultMessageIsDisplayed={props.resultMessageIsDisplayed} 
								cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived} 

								giftAreaIsDisplayed={props.giftAreaIsDisplayed}	
								userClickedGiftArea={props.userClickedGiftArea}
								userGaveLove={props.userGaveLove}	

								submitForm={props.submitForm} 
								meetAlien={props.meetAlien} 
						/>
						<AlienGiftsArea qtyOfLoveReceived={props.qtyOfLoveReceived}
								giftAreaIsDisplayed={props.giftAreaIsDisplayed} 
								userGaveLove={props.userGaveLove}
								giveLove={props.giveLove}
								/>
						<SpeechBubble wisdomMessageEnglish={props.wisdomMessageEnglish}
								userChoseToPlayMessage={props.userChoseToPlayMessage} 
								userClickedGiftArea={props.userClickedGiftArea}
								userGaveLove={props.userGaveLove}
								/>
					</div>
				</div>
		);
}

export default Content;
