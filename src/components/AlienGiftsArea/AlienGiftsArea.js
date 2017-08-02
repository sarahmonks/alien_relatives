import React from 'react';
import './alien_gifts_area.css';


const AlienGiftsArea = props => {

		//This is a stateless component used in the Content component
		//This component contains the HTML to display the area where the user can give a gift(love) or not.
		//To this component, we pass in the following states as properties (These states are defined in AppContainer):
		//giftAreaIsDisplayed (true or false)
		//qtyOfLoveReceived (integer)
		//userGaveLove (true or false)
		//And we pass in the following method as a property (defined in AppContainer)
		//giveLove (This method takes in true or false as a parameter)

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
