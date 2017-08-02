import React from 'react';
import './planet.css';

import planet from '../../images/planet.png';
const Planet = props => {
		//This is a stateless component used in the Content component
		//This component contains the HTML for the area where the planet image is displayed to the left hand side of the screen.

		return (<div className="planet">
					<img src={planet} width="420" height="243" alt="Planet" />
				</div>

		);
 
}

export default Planet;
