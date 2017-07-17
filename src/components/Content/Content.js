import React from 'react';

import Planet from '../Planet/Planet';
import CupAndSaucer from '../CupAndSaucer/CupAndSaucer';
import FormArea from '../FormArea/FormArea';
import './content.css';

const Content = function(props) {

	
		return (<div id="content">
			<Planet />
			<CupAndSaucer />
			<FormArea />
			</div>
		);
 
}

export default Content;
