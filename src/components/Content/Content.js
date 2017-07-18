import React from 'react';

import Planet from '../Planet/Planet';
import CupAndSaucer from '../CupAndSaucer/CupAndSaucer';
import AlienTribeNameArea from '../AlienTribeNameArea/AlienTribeNameArea';
import FormArea from '../FormArea/FormArea';
import './content.css';

const Content = function(props) {

	
		return (<div id="content">
			<Planet />
			<CupAndSaucer alienTribeName={props.alienTribeName} alienTribeImage={props.alienTribeImage}
					alienTribeImageHands={props.alienTribeImageHands} alienWisdomMessageMp3={props.alienWisdomMessageMp3}/>
			<AlienTribeNameArea alienTribeName={props.alienTribeName}/>
			<FormArea submitForm={props.submitForm}/>
			</div>
		);
 
}

export default Content;
