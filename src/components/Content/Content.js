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
		return (<div id="container">
					<div id="content">
						<Planet />
						<CupAndSaucer alienTribeName={props.alienTribeName} 
								alienTribeImage={props.alienTribeImage}
								alienTribeImageHands={props.alienTribeImageHands} 
								alienWisdomMessageMp3={props.alienWisdomMessageMp3} 
								userChoseToMeetAlien={props.userChoseToMeetAlien} 
								cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived}
								playAlienMessage={props.playAlienMessage} />
						<AlienTribeNameArea alienTribeName={props.alienTribeName}/>
						<FormArea submitForm={props.submitForm} 
								originalFormIsDisplayed={props.originalFormIsDisplayed} 
								alienTribeName={props.alienTribeName} 
								firstName={props.firstName} 
								meetAlien={props.meetAlien} 
								userChoseToMeetAlien={props.userChoseToMeetAlien}
								resultMessageIsDisplayed={props.resultMessageIsDisplayed} 
								cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived} 
								giftAreaIsDisplayed={props.giftAreaIsDisplayed}	
								userGaveLove={props.userGaveLove}
								userClickedGiftArea={props.userClickedGiftArea}
						/>
						<AlienGiftsArea giftAreaIsDisplayed={props.giftAreaIsDisplayed} 
								giveLove={props.giveLove}
								userGaveLove={props.userGaveLove}
								qtyOfLoveReceived={props.qtyOfLoveReceived}
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
