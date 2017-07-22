import React from 'react';
import Planet from '../Planet/Planet';
import CupAndSaucer from '../CupAndSaucer/CupAndSaucer';
import AlienTribeNameArea from '../AlienTribeNameArea/AlienTribeNameArea';
import FormArea from '../FormArea/FormArea';
import AlienGiftsArea from '../AlienGiftsArea/AlienGiftsArea';
import SpeechBubble from '../SpeechBubble/SpeechBubble';

import './content.css';


const Content = function(props) {
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
								cupAndSaucerHaveArrived={props.cupAndSaucerHaveArrived} />
						<AlienGiftsArea giftAreaIsDisplayed={props.giftAreaIsDisplayed} 
								giveLove={props.giveLove}/>
						<SpeechBubble wisdomMessageEnglish={props.wisdomMessageEnglish}
								userChoseToPlayMessage={props.userChoseToPlayMessage} />
					</div>
				</div>
		);
}

export default Content;
