import React from 'react';
import './planet.css';

import planet from '../../images/planet.png';
const Planet = props => {

	
		return (<div className="planet">
					<img src={planet} width="420" height="243" alt="Planet" />
				</div>

		);
 
}

export default Planet;
