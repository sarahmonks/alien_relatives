import React, { Component } from 'react';

//import components
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import AudioPlayers from '../components/AudioPlayers/AudioPlayers';

//define global variables
var xmlhttpSubmitForm;
var intvAnimation;
var intvShowGifts;
//the root of the url where the images and mp3s for the app are located.
var app_root_url = 'http://www.gamuzic.com/alien_relatives/';
var alienTribeId;

class AppContainer extends Component { 
	//This class is the main component of the application.
	constructor(props) {
    		super(props);
    		this.state = {
			originalFormIsDisplayed: true,
			firstName: '',
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
			qtyOfLoveReceived: 0
		};
		this.submitForm = this.submitForm.bind(this);
		this.submitFormCallback = this.submitFormCallback.bind(this);
		this.createXHR = this.createXHR.bind(this);
		this.meetAlien = this.meetAlien.bind(this);
		this.timeAnimation = this.timeAnimation.bind(this);
		this.playAlienMessage = this.playAlienMessage.bind(this);
		this.showGifts = this.showGifts.bind(this);

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
	    	//console.log(e);
	        //try{
	         //  return new ActiveXObject("Microsoft.XMLHTTP");
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
			xmlhttpSubmitForm.open("POST", "http://localhost/alien_relatives/formHandler.php", true);		
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
				alienTribeId = alienTribeResultsArray['alienTribeId']; 
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
	timeAnimation(){
		//alien has now arrived in the cup and saucer so set cupAndSaucerHaveArrived to true	
		//$("#cup_and_saucer_container").addClass('full_position').removeClass('rotate_cup_and_saucer_animation');
		//$(".saucer_solo").removeClass('saucer_shake');
		//$(".alien_figure").addClass('show_alien'); 
		//$(".alien_figure_hands").addClass('show_alien');
		//$(".play_message").addClass('show_play_button');
		this.setState({cupAndSaucerHaveArrived: true}); 	
		//document.getElementById('result_message_area').innerHTML = "<p class='large_text'>He has a wisdom message for you!!!</p>";
		clearInterval(intvAnimation);

	}
	meetAlien (userChoseToMeetAlien){
		//make results_message_area wider for inserting message to user
		//$("#result_message_area").addClass('full_width');

		//This method is called when a user is asked if they would like to meet the alien (in the AlienInformation component).
		//'yes' and 'no' buttons (with onClick listeners for this function) exist in the MeetAlienButtons component.

		//change the state of userChoseToMeetAlien to the new value
		//This state is used in the ResultMessage component so we know what feedback to output to the user.
		this.setState({userChoseToMeetAlien: userChoseToMeetAlien}); 	

		this.setState({resultMessageIsDisplayed: true}); 	
		if(userChoseToMeetAlien){
			//if the user chooses to meet the alien we do this
			//play the alien_saucer_rattle and alien_synth_melody audio files
			//this.audio_player_0.play();
			//this.audio_player_1.play();

			//set a timer for 10 seconds so we know when the animation is finished and we can change the state of cupAndSaucerHaveArrived to true
			//see the timeAnimation method
			var self;
			self = this;
			intvAnimation = setInterval(function(){self.timeAnimation();}, 10000);
		}else{

			//if the user chooses not to meet the alien do this
		
		}
	}
	playAlienMessage (){
		console.log('test');
		this.setState({userChoseToPlayMessage: true}); 	
		this.audio_player_2.load();
		this.audio_player_2.play();
		var self;
		self = this;
		intvShowGifts = setInterval(function(){self.showGifts();}, 6500);
	}
	showGifts (){
		this.setState({giftAreaIsDisplayed: true}); 	
		//$("#give_alien_gifts").show();
		clearInterval(intvShowGifts);

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
						/>
						<AudioPlayers alienWisdomMessageMp3={this.state.alienWisdomMessageMp3} />
					</div>
				</div>
			);	
	}

}

export default AppContainer;
