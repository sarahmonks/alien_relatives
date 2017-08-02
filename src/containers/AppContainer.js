import React, { Component } from 'react';

//import components
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import AudioPlayers from '../components/AudioPlayers/AudioPlayers';

//define global variables for ajax requests
var xmlhttpSubmitForm;
var xmlhttpGiveLove;

//define global variables for intervals
var intvAnimation;
var intvShowGifts;
var intvHideGifts;
//the root of the url where the images and mp3s for the app are located.
//The php server files which connect to the database are also located here
var app_root_url = 'https://www.gamuzic.com/alien_relatives/';

class AppContainer extends Component { 
	//This class is the main component of the application.
	constructor(props) {
    		super(props);
    		this.state = {
			originalFormIsDisplayed: true,
			firstName: '',
			alienTribeId: 0,
			alienTribeName: '',
			alienTribeImage: '',
			alienTribeImageHands: '',
			alienWisdomMessageMp3: '',
			wisdomMessageEnglish: '',
			userChoseToMeetAlien: false,
			resultMessageIsDisplayed: false,
			cupAndSaucerHaveArrived: false,
			userChoseToPlayMessage: false,
			giftAreaIsDisplayed: false,
			userWasPromptedToGiveLove: false,
			userClickedGiftArea: false,
			userGaveLove: false,
			qtyOfLoveReceived: 0
		};
		this.submitForm = this.submitForm.bind(this);
		this.submitFormCallback = this.submitFormCallback.bind(this);
		this.createXHR = this.createXHR.bind(this);
		this.meetAlien = this.meetAlien.bind(this);
		this.timeAnimation = this.timeAnimation.bind(this);
		this.playAlienMessage = this.playAlienMessage.bind(this);
		this.showGifts = this.showGifts.bind(this);
		this.hideGifts = this.hideGifts.bind(this);
		this.giveLove = this.giveLove.bind(this);
		this.updateLoveCallback = this.updateLoveCallback.bind(this);
		this.resetGiftsAreaStates = this.resetGiftsAreaStates.bind(this);
		this.clearTimers = this.clearTimers.bind(this);
		
  	}	
	componentDidMount() {
		//the main component has mounted therefore the AudioPlayers component has mounted also so we create audio players for the audio
		//tags containing the alien_saucer_rattle and alien_synth_melody files and load the players so they are ready.
		this.audio_player_0 = document.getElementById('audio_player_0');
		this.audio_player_1 = document.getElementById('audio_player_1');
		this.audio_player_0.load();
		this.audio_player_1.load();

    }
	createXHR(){
	    try{
	        return new XMLHttpRequest();
	    }catch(e){
	    	//this is causing causing error on chrome so we'll comment it out for the moment
	        // try{
	        //   return new ActiveXObject("Microsoft.XMLHTTP");
	        //}catch(e){
	        //   return new ActiveXObject("Msxml2.XMLHTTP");
	        //}
	    }
	}
	submitForm (){
		//this function is called when the original form is submitted with the users first name.
		//we do an ajax request to a php file called formHandler which queries the database for the results that
		//we need to display within the app.
		var firstName = document.getElementById('first_name').value;
		this.setState({firstName: firstName}); 
		if(firstName != "" && firstName != null){
			xmlhttpSubmitForm = this.createXHR(); 
			xmlhttpSubmitForm.onreadystatechange = this.submitFormCallback;
			xmlhttpSubmitForm.open("POST", app_root_url + "formHandler.php", true);		
			xmlhttpSubmitForm.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			//send the firstName variable to our formHandler.php file
			xmlhttpSubmitForm.send('firstName=' + firstName);
		}
	}
	submitFormCallback (){
			//this is the callback function which is called when the ajax response comes back.
			if(xmlhttpSubmitForm.readyState == 4 && xmlhttpSubmitForm.status == 200){
				//split the response into substrings at the string [BRK] and store into an array-responseDataArray
				var responseDataArray = xmlhttpSubmitForm.responseText.split("[BRK]");
				//save the alien information into an array
				var alienTribeResultsArray = JSON.parse(responseDataArray[1]);

				//store alien tribe id so we can use it later when updating alien love
				this.setState({alienTribeId: alienTribeResultsArray['alienTribeId']}); 
				this.setState({alienTribeName: alienTribeResultsArray['alienTribeName']}); 
				this.setState({alienTribeImage: app_root_url + alienTribeResultsArray['alienTribeImage']});
				console.log(alienTribeResultsArray['alienTribeImage']);
				this.setState({alienTribeImageHands: app_root_url + alienTribeResultsArray['alienTribeImageHands']});

				this.setState({wisdomMessageEnglish: alienTribeResultsArray['wisdomMessageEnglish']}); 
				this.setState({qtyOfLoveReceived: alienTribeResultsArray['qtyOfLoveReceived']}); 
				this.setState({originalFormIsDisplayed: false}); 


				this.setState({alienWisdomMessageMp3: app_root_url + alienTribeResultsArray['alienWisdomMessageMp3']}); 

				//create a player with the audio tag with id audio_player_2 where the wisdom message will be loaded.
				this.audio_player_2 = document.getElementById('audio_player_2');

				//create array of the sounds we received from the database
				var alienSoundMp3Array = new Array(alienTribeResultsArray['alienWisdomMessageMp3']);
			}

	}
	timeAnimation(){
		//alien has now arrived in the cup and saucer so set cupAndSaucerHaveArrived to true	
		this.setState({cupAndSaucerHaveArrived: true}); 	
		//clear the interval as we will only want to run this method once.
		clearInterval(intvAnimation);

	}
	meetAlien (userChoseToMeetAlien){
		//This method is called when a user is asked if they would like to meet the alien (in the AlienInformation component).
		//'yes' and 'no' buttons (with onClick listeners for this function) exist in the MeetAlienButtons component.

		//change the state of userChoseToMeetAlien to the new value
		//This state is used in the ResultMessage component so we know what feedback to output to the user.
		this.setState({userChoseToMeetAlien: userChoseToMeetAlien}); 	

		this.setState({resultMessageIsDisplayed: true}); 	
		if(userChoseToMeetAlien){
			//if the user chooses to meet the alien we do this
			//play the alien_saucer_rattle and alien_synth_melody audio files
			this.audio_player_0.play();
			this.audio_player_1.play();

			//set a timer for 10 seconds so we know when the animation is finished and we can change the state of cupAndSaucerHaveArrived to true
			//see the timeAnimation method
			var self;
			self = this;
			intvAnimation = setInterval(function(){self.timeAnimation();}, 10000);
		}
	}
	playAlienMessage (){
		//This method is called when a user has chosen to play the message (i.e presses the play_message button)
		//After the message is played, the gift area will appear.
		//Firstly clear all intervals in case this is the second time the user will play the message.
		this.clearTimers();
		//Reset the gift area states in case the gift area has already been displayed.
		this.resetGiftsAreaStates();
		//set the userChoseToPlayMessage state to true. This state will be used in the SpeechBubble component.
		this.setState({userChoseToPlayMessage: true}); 	
		//load and play audio_player_2 (which contains the wisdom message as the src)
		this.audio_player_2.load();
		this.audio_player_2.play();

		//we now set a timer for the showGifts method to run after the message has been played.
		//we have to create a local variable as the 'this' keyword will be out of scope when using setInterval
		var self;
		self = this;
		intvShowGifts = setInterval(function(){self.showGifts();}, 6500);
	}
	showGifts (){
		//This method is called from the playAlienMessage method after a user has chosen to play the wisdom message.
		//The purpose of this method is to display the gifts area to the user so they can give love to the alien.
		//set giftAreaIsDisplayed to true. This state will be used in the AlienGiftsArea component to determine which css classes are output
		this.setState({giftAreaIsDisplayed: true}); 	
		//clear the interval as we only want this method to be called once.
		clearInterval(intvShowGifts);

		//create and load audio_player_3 which containas the wit_woo mp3 file.
		//create and load audio_player_4 which contains the boo mp3 file. 
		//These sounds will be used as feedback messages after the user chooses to give a gift or not.
		//They will be played in the giveLove method.
		this.audio_player_3 = document.getElementById('audio_player_3');
		this.audio_player_4 = document.getElementById('audio_player_4');
		this.audio_player_3.load();
		this.audio_player_4.load();

	}

	giveLove (userGaveLove){
		//This method is called when a user chooses to give love or not in the AlienGiftsArea
		this.clearTimers();
		//when user presses a gift button, wait 3 seconds and then call the hideGifts function to fade out the gifts area
		var self;
		self = this;
		intvHideGifts = setInterval(function(){self.hideGifts();}, 3000);
		this.setState({userClickedGiftArea: true}); 	
		this.setState({userGaveLove: userGaveLove}); 	
		console.log(this.state.userGaveLove);
		if(userGaveLove){
			//play the "wit_woo" audio file which is stored in audio player 3
			this.audio_player_3.play();

			//the user has decided to give love to the alien tribe so we make ajax http request
			//in order to save the new quantity of love to the database for this particular alien tribe 
			xmlhttpGiveLove = this.createXHR();
			xmlhttpGiveLove.onreadystatechange = this.updateLoveCallback;
		
			xmlhttpGiveLove.open("POST", app_root_url + "updateLove.php", true);		
			xmlhttpGiveLove.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			//send our alienTribeId variable to updateLove.php file in order to process the data there
			xmlhttpGiveLove.send('alienTribeId=' + this.state.alienTribeId);

		}else{
			//play the "boo" audio file which is stored in audio player 4
			this.audio_player_4.play();
		}
		
	}
	updateLoveCallback (){
		//this is the callback function which is called when the ajax response comes back from giveLove.
		if(xmlhttpGiveLove.readyState == 4 && xmlhttpGiveLove.status == 200){
			//we receive the new quantity of love back in our response and store in newQtyOfLove 
			var newQtyOfLove = xmlhttpGiveLove.responseText;
			//update the qtyOfLoveReceived state with our new value
			this.setState({qtyOfLoveReceived:newQtyOfLove}); 

		}

	}
	hideGifts (){
		this.setState({giftAreaIsDisplayed: false}); 
		clearInterval(intvHideGifts);
	}
	resetGiftsAreaStates (){
		//This method is used 
		console.log('reset');
		this.setState({userClickedGiftArea: false}); 	
		this.setState({userGaveLove: false}); 	

	}
	clearTimers (){
		//clear all intervals
		clearInterval(intvHideGifts);
		clearInterval(intvShowGifts);
		clearInterval(intvAnimation);
	}
	render() {
		return(<div>
					<Header />
					<div id="container_wrapper" className="scrollable">
						<Content submitForm={this.submitForm} 
									alienTribeName={this.state.alienTribeName} 
									alienTribeImage={this.state.alienTribeImage}
									alienTribeImageHands={this.state.alienTribeImageHands} 
									alienWisdomMessageMp3={this.state.alienWisdomMessageMp3} 
									originalFormIsDisplayed={this.state.originalFormIsDisplayed} 
									firstName={this.state.firstName} 
									meetAlien={this.meetAlien} 
									userChoseToMeetAlien={this.state.userChoseToMeetAlien} 
									resultMessageIsDisplayed={this.state.resultMessageIsDisplayed} 
									cupAndSaucerHaveArrived={this.state.cupAndSaucerHaveArrived} 
									playAlienMessage={this.playAlienMessage}
									wisdomMessageEnglish={this.state.wisdomMessageEnglish}
									userChoseToPlayMessage={this.state.userChoseToPlayMessage}
									giftAreaIsDisplayed={this.state.giftAreaIsDisplayed}
									qtyOfLoveReceived={this.state.qtyOfLoveReceived}
									giveLove={this.giveLove}
									userGaveLove={this.state.userGaveLove}
									userClickedGiftArea={this.state.userClickedGiftArea}
						/>
						<AudioPlayers alienWisdomMessageMp3={this.state.alienWisdomMessageMp3} />
					</div>
				</div>
			);	
	}

}

export default AppContainer;
