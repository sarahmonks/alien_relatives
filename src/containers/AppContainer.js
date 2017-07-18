import React, { Component } from 'react';



import Header from '../components/Header/Header';

import Content from '../components/Content/Content';
import AudioPlayers from '../components/AudioPlayers/AudioPlayers';

var xmlhttpSubmitForm;
var app_root_url = 'http://www.gamuzic.com/alien_relatives/';
class AppContainer extends Component {
  
	//This class is the main component of the application.
	constructor(props) {
    		super(props);
    		this.state = {
			//sidePanelIsOpen: false
			originalFormIsDisplayed: true,
			firstName: '',
			alienTribeName: '',
			alienTribeImage: '',
			alienTribeImageHands: '',
			alienWisdomMessageMp3: '',
			wisdomMessageEnglish: '',
			qtyOfLoveReceived: 0

		};
		this.submitForm = this.submitForm.bind(this);
		this.submitFormCallback = this.submitFormCallback.bind(this);
		this.createXHR = this.createXHR.bind(this);
		//this.toggleSidePanel = this.toggleSidePanel.bind(this);
  	}	
	componentDidMount() {
		console.log('mounted');
    	}
	createXHR(){
	    try{

	        return new XMLHttpRequest();

	    }catch(e){
	    	//console.log(e);
	        //try{
	         //  return new ActiveXObject("Microsoft.XMLHTTP");
	        //}catch(e){
	        //   return new ActiveXObject("Msxml2.XMLHTTP");
	       //}
	    }
	}

	submitForm (){
		console.log("submit");
		var firstName = document.getElementById('first_name').value;
		this.setState({firstName: firstName}); 

		console.log("submit " + firstName);
		if(firstName != "" && firstName != null){
			xmlhttpSubmitForm = this.createXHR(); 
			xmlhttpSubmitForm.onreadystatechange = this.submitFormCallback;
			xmlhttpSubmitForm.open("POST", "http://localhost/alien_relatives/formHandler.php", true);		
			xmlhttpSubmitForm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			//send the firstName variable to our formHandler.php file
			xmlhttpSubmitForm.send('firstName=' + firstName);
		}
	}
	submitFormCallback (){
	
		console.log("submit call");
			if(xmlhttpSubmitForm.readyState == 4 && xmlhttpSubmitForm.status == 200){
				//split the response into substrings at the string [BRK] and store into an array-responseDataArray
				var responseDataArray = xmlhttpSubmitForm.responseText.split("[BRK]");
				var alienTribeHtmlOutput = responseDataArray[0];

				//save the alien information into variables for use later on.
				var alienTribeResultsArray = JSON.parse(responseDataArray[1]);

				//store alien tribe id so we can use it later when updating alien love
				var alienTribeId = alienTribeResultsArray['alienTribeId']; 
				this.setState({alienTribeName: alienTribeResultsArray['alienTribeName']}); 
				this.setState({alienTribeImage: app_root_url + alienTribeResultsArray['alienTribeImage']});
				console.log(alienTribeResultsArray['alienTribeImage']);
				this.setState({alienTribeImageHands: app_root_url + alienTribeResultsArray['alienTribeImageHands']});

				this.setState({alienWisdomMessageMp3: app_root_url + alienTribeResultsArray['alienWisdomMessageMp3']}); 

				this.setState({wisdomMessageEnglish: alienTribeResultsArray['wisdomMessageEnglish']}); 
				this.setState({qtyOfLoveReceived: alienTribeResultsArray['qtyOfLoveReceived']}); 
				this.setState({originalFormIsDisplayed: false}); 


				//create array of the sounds we received from the database
				var alienSoundMp3Array = new Array(alienTribeResultsArray['alienWisdomMessageMp3']);

				//load sound that we received from the database into player2
				//loadData(player2, 2, alienSoundMp3Array, 0);
				//console.log(alienTribeImage);

				//load the alien tribe images into the img tags
				//$('#alien_figure').attr('src', alienTribeImage);
				//$('#alien_figure_hands').attr('src', alienTribeImageHands);
				//document.getElementById('alien_tribe_name').innerHTML = alienTribeName;
				//document.getElementById('user_interactive_area').innerHTML = alienTribeHtmlOutput;
				//document.getElementById('qty_of_love').innerHTML = "(" + qtyOfLoveReceived + ")";
			//	document.getElementById('meet_alien_button_yes').addEventListener('click', function() { meetAlien(true); }, false);
				//document.getElementById('meet_alien_button_no').addEventListener('click', function() { meetAlien(false); }, false);
			}

	}
	render() {
    

		return(<div>
					<Header />
					<div id="container_wrapper" className="scrollable">
						<div id="container">
						<Content submitForm={this.submitForm} alienTribeName={this.state.alienTribeName} alienTribeImage={this.state.alienTribeImage}
						alienTribeImageHands={this.state.alienTribeImageHands} alienWisdomMessageMp3={this.state.alienWisdomMessageMp3} 
						originalFormIsDisplayed={this.state.originalFormIsDisplayed} firstName={this.state.firstName} />
						</div>

						<AudioPlayers alienWisdomMessageMp3={this.state.alienWisdomMessageMp3} />
					</div>
				</div>
		);	
	}

}



export default AppContainer;
