import React from 'react';

import './alien_tribe_name_area.css';


const AlienTribeNameArea = function(props) {

	
		return (<div>
					<p id="alien_tribe_name" className="huge_text">{props.alienTribeName}</p>
				</div>
				
		);
 
}

export default AlienTribeNameArea;
