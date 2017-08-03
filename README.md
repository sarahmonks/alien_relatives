This project was built with create-react-app.

In order to set up the application on your work station do the following:

1. Create a new folder (e.g alien_relatives) on your computer to hold your project
2. Download the files to this folder
3. Open the command line
4. Navigate to your project folder in the command line e.g 

cd alien_relatives 

5. Install your npm dependencies in this folder, using the following command (Note: make sure you have node installed globally first)
npm install

6. Now the project is set up with all dependencies, type the following command to run the application
npm run start



Structure of components in terms of where/how they are rendered (Not folder structure)

+-- AppContainer
¦ +-- Header
¦ +-- Content
¦ ¦ +-- Planet
¦ ¦ +-- CupAndSaucer
¦ ¦ +-- AlienTribeNameArea
¦ ¦ +-- FormArea
¦ ¦ ¦ +-- OriginalForm
¦ ¦ ¦ +-- AlienInformation
¦ ¦ ¦ ¦ +-- ResultMessage
¦ ¦ ¦ ¦ ¦ +-- ShowSomeLovePrompt
¦ ¦ ¦ ¦ +-- MeetAlienButtons
¦ ¦ +-- AlienGiftsArea
¦ ¦ +-- SpeechBubble
¦ +-- AudioPlayers


e.g The ResultMessage component and the MeetAlienButtons component are both used within the AlienInformation component.



This project makes requests to a remote origin where an API (which was built with PHP).
The API connects to a database using mySQL in order to retrieve information about the Alien Tribes.