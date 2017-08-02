import React from 'react';
import cn from 'classnames';

import './cup_and_saucer.css';
import cup_back from '../../images/cup-back.png';
import cup_front from '../../images/cup-front.png';
import saucer from '../../images/saucer.png';

const CupAndSaucer = props => {
		//This is a stateless component used in the Content component
		//It displays the cup and saucer and alien image files. We use CSS classes to animated the cup and saucer after a user chooses to "meet"
		//their related alien tribe.

  		//To this component, we pass in the following states as properties (These states are defined in AppContainer):
		//alienTribeImage (string)
		//alienTribeImageHands (string)
		//userChoseToMeetAlien (boolean)
		//cupAndSaucerHaveArrived (boolean)

  		//And we pass in the following method as a property (defined in AppContainer):
		//playAlienMessage (parameters: none)		

		//use the 'classnames' module to output different CSS classes depending on the current state.
 	const className = cn('some-default-class', {
      					'rotate_cup_and_saucer_animation move_animation': (props.userChoseToMeetAlien === true  && props.cupAndSaucerHaveArrived === false),
      					'full_position': (props.userChoseToMeetAlien === true  && props.cupAndSaucerHaveArrived === true)
    });

	return (<div id="cup_and_saucer_container" className={className}>
				<img src={cup_back} width="453" height="453" />
					
				<img id="alien_figure" className={"alien_figure "  + (props.cupAndSaucerHaveArrived === true ? 'show_alien' : '')} 
							src={props.alienTribeImage} width="453" height="453" />
				<img className={"saucer_solo " + ((props.userChoseToMeetAlien === true && props.cupAndSaucerHaveArrived === false) ? 'saucer_shake' : '')} 
							src={saucer} width="453" height="453" />
				<img src={cup_front} width="453" height="453" />
				<img id="alien_figure_hands" className={"alien_figure_hands "  + (props.cupAndSaucerHaveArrived === true ? 'show_alien' : '')} 
							src={props.alienTribeImageHands} width="453" height="453" />

				<span id="play_message" onClick={props.playAlienMessage} className={"play_message button_style " + (props.cupAndSaucerHaveArrived === true ? 'show_play_button' : '')}>
							Play Wisdom Message
				</span>
			</div>
	);
 
}

export default CupAndSaucer;
