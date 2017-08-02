import React from 'react';

const ShowSomeLovePrompt = props => {
		//This is a stateless component used in the ResultMessage component

        //To this component, we pass in the following states as properties (These states are defined in AppContainer):
        //alienTribeName (string)
       
		return (<span>Want to show some love to the 
					<span className='pink_text'> {props.alienTribeName}</span> tribe?!
				</span>
		);
}

export default ShowSomeLovePrompt;
