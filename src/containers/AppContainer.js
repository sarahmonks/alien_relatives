import React, { Component } from 'react';



import Header from '../components/Header/Header';

import Content from '../components/Content/Content';

class AppContainer extends Component {
  
	//This class is the main component of the application.
	constructor(props) {
    		super(props);
    		this.state = {
			//sidePanelIsOpen: false
			
		};
		//this.toggleSidePanel = this.toggleSidePanel.bind(this);
  	}	
	componentDidMount() {
		console.log('mounted');
    	}
	
	goToNextSound (){
		
	}
	render() {
    

		return(<div>
			<Header />
				<div id="container_wrapper" className="scrollable">
					<div id="container">
					<Content />
					</div>
				</div>
			</div>
		);	
	}

}



export default AppContainer;
