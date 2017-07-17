import React from 'react';

import './cup_and_saucer.css';
import cup_back from '../../images/cup-back.png';
import cup_front from '../../images/cup-front.png';
import saucer from '../../images/saucer.png';

const CupAndSaucer = function(props) {

	
		return (<div id="cup_and_saucer_container" className="full_position">
					<img src={cup_back} width="453" height="453" />
					
					<img id="alien_figure" className="alien_figure" src="" width="453" height="453" />
					<img className="saucer_solo" src={saucer} width="453" height="453" />
					<img src={cup_front} width="453" height="453" />
					<img id="alien_figure_hands" className="alien_figure_hands" src="" width="453" height="453" />
					<span id="play_message" className="play_message button_style">Play Wisdom Message</span>
				</div>
		);
 
}

export default CupAndSaucer;
