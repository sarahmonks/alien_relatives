import React from 'react';

import './alien_tribe_name_area.css';


const AlienTribeNameArea = props => {
		//This is a stateless component used in the Content component
		//This component contains the HTML for the area where the alien tribe name will be displayed in Huge text.

		//To this component, we pass in the following states as properties (These states are defined in AppContainer):
		//alienTribeName (string)

	
		return (<div>
					<p id="alien_tribe_name" className="huge_text">{props.alienTribeName}</p>
				</div>
				
		);
 
}

export default AlienTribeNameArea;
