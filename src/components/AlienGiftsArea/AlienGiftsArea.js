import React from 'react';
import './alien_gifts_area.css';


const AlienGiftsArea = props => {
	console.log(props.userGaveLove);
		//This is a stateless component used in the AlienInformation component
		//To this component, we pass in a property called meetAlien (which is a method defined in the main AppContainer class).
		return (<div id="alien_gifts_area" className={(props.giftAreaIsDisplayed === true ? 'show': '')}>
					<div className="background_color"></div>

					<div className="gifts_area_content">
						<p className="large_text">Give some love?</p>

						<span id="gift_love" onClick={props.giveLove.bind(null, true)} className="button_style main_button_style">
							<i className="fa fa-heart"></i>
							<span id="qty_of_love">({props.qtyOfLoveReceived})</span>
						</span>

						<span id="no_thanks" onClick={props.giveLove.bind(null, false)} className={"large_text " + (props.userGaveLove === true ? 'hide': '')}>No Thanks</span>
						<span id="thank_you" className={"large_text pink_text " + (props.userGaveLove === true ? 'show': '')}>Thank you!</span>

					</div>
				</div>
				
		);
 
}

export default AlienGiftsArea;
